# Code Ranger

A 500-challenge coding game with an AI-powered Build Lab and Interview Lab.

## Project structure

```
code-ranger/
├── frontend/        ← HTML/CSS/JS — your existing game
└── backend/         ← Python FastAPI — AI proxy + rate limiter
```

## Slice 1 setup — get the backend running

This gets you to the point where you can hit `http://localhost:3001/docs`
and successfully send a prompt to Gemini through your own API.

### 1. Get a free Gemini API key

Go to https://aistudio.google.com/apikey, create a key, copy it.

### 2. Set up Python virtual environment

A virtual environment ("venv") keeps this project's Python packages
separate from your system Python. Run from the `backend/` folder:

```bash
cd backend
python3 -m venv venv

# Activate it:
# Mac/Linux:
source venv/bin/activate
# Windows (PowerShell):
venv\Scripts\Activate.ps1
```

You'll know it worked when your terminal prompt shows `(venv)` at the start.

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Create your .env file

Copy the template and fill in your real key:

```bash
cp .env.example .env
```

Open `.env` in your editor and replace `paste-your-gemini-key-here` with
the key you got from Google AI Studio.

### 5. Run the server

```bash
uvicorn main:app --reload --port 3001
```

You should see:
```
INFO:     Uvicorn running on http://127.0.0.1:3001
INFO:     Application startup complete.
```

### 6. Test it

Open `http://localhost:3001/docs` in your browser. You'll see auto-generated
interactive API documentation. Click `POST /api/chat`, click "Try it out",
paste this into the request body:

```json
{
  "prompt": "Write a one-line HTML hello world page"
}
```

Click "Execute". If you see a JSON response with HTML in it, **the backend
works**. You're ready for Slice 2.

## Troubleshooting

**"GEMINI_API_KEY not set" warning** — your `.env` file is missing or your
key wasn't saved correctly. Check the file exists in `backend/` and has no
quotes around the key.

**"CORS error" when frontend calls backend** — your frontend's URL isn't in
`ALLOWED_ORIGINS` in `.env`. Add it (e.g. `http://localhost:5500` if you're
using Live Server in VS Code).

**"Module not found"** — you forgot to activate the venv. Run `source venv/bin/activate`
again.

**Rate limit hits too fast** — bump `DEMO_DAILY_LIMIT` in `.env` while developing.
Set it back to 5 before deploying.

## What's next

Once the backend works locally, the next steps are:
- **Slice 2**: Wire your existing Build Lab UI to call `POST /api/chat`,
  add Monaco Editor for code editing, add a sandboxed iframe preview.
- **Slice 3**: Add voice transcription to the Interview Lab and call
  `POST /api/grade-interview` with the transcript.

We'll do those after Slice 1 is solid.
