"""
main.py — Code Ranger Backend (single-file version)
═══════════════════════════════════════════════════════════════
Run locally with:
    uvicorn main:app --reload --port 3001

Then open http://localhost:3001/docs for interactive API docs.

This file contains everything the backend needs:
  1. Rate limiter (in-memory, per-IP, daily reset)
  2. Gemini AI service wrapper
  3. FastAPI app with /api/chat and /api/grade-interview endpoints
═══════════════════════════════════════════════════════════════
"""

import os
from datetime import datetime, timezone
from collections import defaultdict
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import google.generativeai as genai


# ═══════════════════════════════════════════════════════════════
# 1. CONFIG — load secrets from .env
# ═══════════════════════════════════════════════════════════════
load_dotenv()
DEMO_KEY = os.getenv("GEMINI_API_KEY", "")
DAILY_LIMIT = int(os.getenv("DEMO_DAILY_LIMIT", "5"))
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "").split(",")

# The Gemini model used for all AI calls. Flash is fast + free-tier friendly.
# Want better code generation later? Try "gemini-2.0-pro".
GEMINI_MODEL = "gemini-2.5-flash"

if not DEMO_KEY:
    print("⚠️  WARNING: GEMINI_API_KEY not set in .env — demo key won't work")


# ═══════════════════════════════════════════════════════════════
# 2. RATE LIMITER — tracks demo-key usage per visitor
# ═══════════════════════════════════════════════════════════════
# Why this matters: without limits, one user could drain your entire
# Gemini quota in minutes. In-memory dict is fine for a capstone demo;
# a real production app would use Redis or a database.

# Structure: { "192.168.1.1": {"date": "2026-05-06", "count": 3} }
_usage: dict[str, dict] = defaultdict(lambda: {"date": "", "count": 0})


def _today_utc() -> str:
    # UTC so the daily reset happens at the same instant for every user
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")


def check_and_increment(ip: str) -> tuple[bool, int]:
    """Returns (allowed, remaining_calls_today)."""
    today = _today_utc()
    record = _usage[ip]

    # New day? Reset.
    if record["date"] != today:
        record["date"] = today
        record["count"] = 0

    if record["count"] >= DAILY_LIMIT:
        return False, 0

    record["count"] += 1
    return True, DAILY_LIMIT - record["count"]


def get_remaining(ip: str) -> int:
    """How many calls this IP has left today — for the UI to display."""
    today = _today_utc()
    record = _usage[ip]
    if record["date"] != today:
        return DAILY_LIMIT
    return max(0, DAILY_LIMIT - record["count"])


# ═══════════════════════════════════════════════════════════════
# 3. AI SERVICE — wraps Gemini in a simple function
# ═══════════════════════════════════════════════════════════════
# Why a wrapper? If you swap Gemini for Claude later, you change
# ONLY this function. The rest of the app stays untouched. That's
# the "abstraction" principle from computational thinking.

def call_ai(prompt: str, api_key: str, system_instruction: Optional[str] = None) -> str:
    """Send a prompt to Gemini, return the text response."""
    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel(
            model_name=GEMINI_MODEL,
            system_instruction=system_instruction or "You are a helpful coding assistant.",
        )
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        # Log details server-side for debugging, but DON'T leak them to users
        # (error messages can sometimes contain key fragments or internal info)
        print(f"[ai_service] Gemini error: {e}")
        raise Exception("AI service is temporarily unavailable. Please try again.")


# ═══════════════════════════════════════════════════════════════
# 4. FASTAPI APP — the actual web server
# ═══════════════════════════════════════════════════════════════
app = FastAPI(
    title="Code Ranger API",
    description="Backend for the Code Ranger Build Lab and Interview Lab",
    version="0.1.0",
)

# CORS lets your frontend (different port) talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


# ─── Request/response shapes (Pydantic auto-validates) ─────────

class ChatRequest(BaseModel):
    prompt: str = Field(..., min_length=1, max_length=4000)
    user_api_key: Optional[str] = Field(None, description="BYOK — user's own Gemini key")
    system_instruction: Optional[str] = None


class ChatResponse(BaseModel):
    response: str
    used_demo_key: bool
    demo_calls_remaining: int


class InterviewGradeRequest(BaseModel):
    question: str = Field(..., min_length=1)
    transcript: str = Field(..., min_length=1, max_length=10000)
    user_api_key: Optional[str] = None


# ─── Helper: pick which API key to use ─────────────────────────

def resolve_key(user_api_key: Optional[str], client_ip: str) -> tuple[str, bool, int]:
    """
    Decide whether to use the user's BYOK key or the demo key.
    Returns (api_key_to_use, is_demo, remaining_calls).
    Raises 429 if user is out of demo calls and has no BYOK.
    """
    # User brought their own key? Use it. No rate limit (their key, their cost).
    if user_api_key and user_api_key.strip():
        return user_api_key.strip(), False, -1

    # Otherwise, check demo quota
    allowed, remaining = check_and_increment(client_ip)
    if not allowed:
        raise HTTPException(
            status_code=429,
            detail=(
                "Daily demo limit reached. Add your own free Gemini key in Settings "
                "to keep going. Get one at https://aistudio.google.com/apikey"
            ),
        )
    if not DEMO_KEY:
        raise HTTPException(
            status_code=503,
            detail="Demo service unavailable. Please add your own Gemini key in Settings.",
        )
    return DEMO_KEY, True, remaining


# ─── Routes ────────────────────────────────────────────────────

@app.get("/")
def root():
    return {"status": "ok", "service": "Code Ranger API", "version": "0.1.0"}


@app.get("/api/usage")
def usage(request: Request):
    """Lets the frontend show 'X demo calls remaining today'."""
    ip = request.client.host
    return {"demo_calls_remaining": get_remaining(ip), "daily_limit": DAILY_LIMIT}


@app.post("/api/chat", response_model=ChatResponse)
def chat(req: ChatRequest, request: Request):
    """
    Generic AI chat — used by the Build Lab.
    Send a prompt, get back text/code.
    """
    ip = request.client.host
    api_key, is_demo, remaining = resolve_key(req.user_api_key, ip)

    sys_inst = req.system_instruction or (
        "You are an expert coding assistant for beginner web developers. "
        "When asked to write code, return clean, well-commented HTML/CSS/JS "
        "in fenced code blocks. Prefer vanilla JavaScript over frameworks unless asked otherwise."
    )

    response_text = call_ai(req.prompt, api_key, sys_inst)
    return ChatResponse(
        response=response_text,
        used_demo_key=is_demo,
        demo_calls_remaining=remaining if is_demo else -1,
    )


@app.post("/api/grade-interview", response_model=ChatResponse)
def grade_interview(req: InterviewGradeRequest, request: Request):
    """
    Interview Lab voice grader.
    Takes a question + the candidate's transcribed answer, returns
    structured feedback (score, strengths, weaknesses, model answer, tip).
    """
    ip = request.client.host
    api_key, is_demo, remaining = resolve_key(req.user_api_key, ip)

    sys_inst = (
        "You are a senior software engineer conducting a technical interview. "
        "You will receive an interview question and the candidate's spoken answer. "
        "Return your feedback in this exact format:\n\n"
        "SCORE: [1-10]\n"
        "STRENGTHS: [bullet points]\n"
        "WEAKNESSES: [bullet points]\n"
        "MODEL_ANSWER: [a 2-3 sentence ideal answer]\n"
        "TIP: [one specific suggestion for next time]"
    )

    prompt = f"INTERVIEW QUESTION:\n{req.question}\n\nCANDIDATE'S ANSWER:\n{req.transcript}"
    response_text = call_ai(prompt, api_key, sys_inst)

    return ChatResponse(
        response=response_text,
        used_demo_key=is_demo,
        demo_calls_remaining=remaining if is_demo else -1,
    )
