# Code Ranger 🎯

A 500-challenge coding game with an AI-powered Build Lab and Interview Lab. Players progress through bite-sized challenges across 19 categories, unlock a real coding workspace, get AI-driven code review on their projects, and build a downloadable resume that auto-fills from the categories they've mastered. The whole experience is a single continuous flow — *play to learn, learn to build, build to ship*.

## 👤 Author
**Jacqueline**
[Check out my GitHub Profile](https://github.com/jdbostonbu-ops)
🚀 **[Try the Live App](https://dev-play-nine.vercel.app/)**

<p align="center">
  <img src="coderanger.gif" alt="Code Ranger Showcase Demo" width="600">
</p>

## 🎓 Built During Next Chapter — Phase II

This project was designed and built during **Phase II of Thinking with AI** at Next Chapter Apprenticeship. Each lesson fed directly into this build:

- **Computational Thinking** — Decomposing the project into Slices (backend → integration → voice grading → deployment), recognizing repeating patterns across the 500 challenges, abstracting the AI provider into a swappable wrapper, and writing the unlock logic as a clean algorithm.
- **AI Prompting** — Crafting system instructions that produce reliable structured output (interview grading format, code review with strengths/weaknesses), iterating on prompts until the AI's response matched the user experience.
- **HTML / CSS / Forms** — Semantic landmark structure, accessible labels with `for` attributes throughout, mobile-first responsive layouts, and elaborate CSS animations. The Resume Builder uses fully validated forms with live preview.
- **Debugging** — Tracing through `console.log`, reading Python tracebacks, identifying CORS preflight failures, hunting zombie processes holding ports, and translating cryptic errors into root causes.

The project demonstrates everything Phase II covered, deployed as a working full-stack app.

## 🌐 Browser & Device Compatibility

| Browser / Device | Status | Performance Notes |
| :--- | :--- | :--- |
| **Google Chrome** | ✅ Tested | Full support — game flow, Build Lab editor, AI integration, Resume Builder. |
| **Microsoft Edge** | ✅ Tested | Matches Chrome rendering engine exactly. |
| **Firefox** | ✅ Tested | Full feature support including animations and AI calls. |
| **Apple Safari (macOS)** | ✅ Tested | All features functional including PDF/DOCX resume export. |
| **iPhone (iOS Safari)** | ✅ Tested | Touch interactions, smooth scroll, and AI features fully functional. |
| **iPad / iPadOS** | ✅ Tested | Responsive grids adapt correctly to tablet viewports. |

## 🌟 Key Features

- **500 Sourced Challenges Across 19 Categories:** From JS Fundamentals and Python to React, Algorithms, SQL, Web Security, and Testing — every challenge sourced from MDN, official docs, and recognized references.
- **Three Difficulty Tiers:** Easy, Medium, and Hard challenges with multiple-choice and code-completion formats. Every wrong answer becomes a learning moment via the hint drawer.
- **AI-Powered Build Lab:** Unlocks at 75 wins. A live coding workspace with HTML/CSS/JS/Python tabs, sandboxed iframe preview, and a "Get AI Feedback" button that sends your code through a Python backend to Google Gemini for personalized review.
- **Interview Lab:** Five interview modes — Decode, Voice Explainer, Concept Q&A, Stack Interview, and AI Prompt Lab — with a 90-second timer that mirrors real interview conditions.
- **Live Resume Builder:** Fill in personal info, projects, and experience — the Technical Skills section auto-populates from categories the player has solved 80% or more of. Downloads as PDF or Word `.docx`.
- **Trophy & Achievement System:** Trophies unlock at meaningful milestones (first win, 10 solved, 50 solved, category mastery, perfect streaks).
- **Performance Dashboard:** Visualizes per-category mastery, points, streak history, and unlock progress.
- **Daily Streak Tracking:** Returning players see streak fire counters that incentivize consistency.
- **Progress Persistence:** All progress saves to `localStorage` — no account required, no data leaves the device.
- **Accessible Forms Throughout:** Every label uses `for` attributes, every form supports keyboard navigation, every animation respects `@media (prefers-reduced-motion)`.

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+) — `IntersectionObserver`, `localStorage`, sandboxed iframes for code preview, dynamic DOM construction
- **Styling:** CSS3 — Custom Properties, CSS Grid, Flexbox, gradients, `@keyframes` animations, custom `cubic-bezier` easing, `clamp()` for fluid typography, mobile-first responsive design
- **Typography:** Inter, JetBrains Mono — Google Fonts
- **Backend:** Python 3.11 — FastAPI, Uvicorn, Pydantic for request validation, `python-dotenv` for environment variables
- **AI Integration:** Google Gemini (`gemini-2.5-flash`) via the official `google-generativeai` SDK, wrapped in a swappable abstraction so providers can be swapped without touching route handlers
- **Security:** API keys held server-side only — never exposed to the browser. Per-IP daily rate limiting prevents abuse of the demo allowance. Optional BYOK (bring-your-own-key) for power users.
- **Resume Export:** `html2pdf.js` for PDF generation, `docx` library for Word document export — both client-side, no server round-trips
- **Deployment:** Vercel — frontend served as static assets, backend deployed as a Python serverless function under `/api/*`. Environment variables set via Vercel dashboard. Auto-deploy on every push to `main`.

## 🚀 The User Flow

- **Land on the start screen** → see the 500-challenge stat callout, Interview Lab teaser, and category picker
- **Pick a category and click START** → enter the game UI with the challenge panel, code panel, hint drawer, and live progress board
- **Solve challenges** → multiple-choice or code-completion, with instant feedback and trophy unlocks at milestones
- **Unlock Interview Lab at 5 wins** → practice with five interview modes under a real 90-second timer
- **Unlock Build Lab at 75 wins** → enter a coding workspace with file tabs, live preview, and AI code review
- **Click "Get AI Feedback" in Build Lab** → your code is sent through the Python backend to Gemini, which returns structured feedback (what's working, what to improve, what to learn next)
- **Build your resume below** → fill in personal info, projects, experience; Technical Skills auto-fills from category mastery; download as PDF or Word

## 🔐 Backend Architecture

```
Browser
  ↓ POST /api/chat  { prompt, optional user_api_key }
Vercel Edge
  ↓ routed to Python serverless function
FastAPI handler
  ↓ checks daily rate limit per IP
  ↓ resolves which API key to use (user's BYOK or server's protected key)
Google Gemini
  ↓ generates response
Back through the function
  ↓ JSON response with content + remaining quota
Browser displays result inline
```

The user's API key (if provided) flows through the request body and is **never stored** server-side. The server's demo key is loaded from environment variables, never committed, and never sent to the browser.

## 🎓 Future Vision

- **Slice 3 — Interview Voice Grading:** Add Web Speech API transcription to the Interview Lab; send transcripts to the existing `/api/grade-interview` endpoint for structured AI feedback (score, strengths, weaknesses, model answer).
- **Monaco Editor in Build Lab:** Replace the textarea with the same editor that powers VS Code for syntax highlighting, autocomplete, and IntelliSense.
- **GitHub Integration:** Push Build Lab projects directly to a user's GitHub repo with auto-generated READMEs.
- **Subscription Tier:** Optional paid tier for unlimited AI calls without BYOK.
- **More Categories:** Rust, Go, Kubernetes, system design challenges.
- **Streak Recovery:** Allow streak protection via a one-time-per-week "rest day" mechanic.

## 🧰 Run It Locally

If you want to run a local copy for development:

```bash
# Clone the repo
git clone https://github.com/jdbostonbu-ops/Dev-Play.git
cd Dev-Play

# Create Python virtual environment
python3.11 -m venv venv
source venv/bin/activate      # Mac/Linux
# venv\Scripts\Activate.ps1   # Windows

# Install dependencies
pip install -r requirements.txt

# Create your .env from the template
cp .env.example .env
# Then open .env and add your free Gemini key from https://aistudio.google.com/apikey

# Run the backend
uvicorn api.index:app --reload --port 3001

# In a separate terminal, serve the frontend
# (use VS Code Live Server, or any static server)
```

## 🎓 Background

This project is part of a non-traditional path into software engineering — 12 years running a full-service insurance agency (systems design, data modeling, risk analysis), 3 years as a Behavior Detection & Analysis Officer with the Department of Homeland Security (real-time anomaly detection, pattern classification), now applied to building accessible, AI-powered web applications. Code Ranger is what I built during Phase II of Thinking with AI — a single continuous experience that takes a learner from their first challenge to a published portfolio resume, with a real Python backend and a real AI integration in between.

⭐ Love this project? Give it a star and explore the other deployed projects in this portfolio.
