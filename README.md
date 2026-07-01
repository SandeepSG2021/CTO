# CTO Readiness Coach & Daily Tracker

A static single-page web app that:
1. **Tab 1 — Coach Roadmap**: displays the full brutally-honest CTO readiness assessment, phase-wise plan, scripts, operating model, 30-60-90 plan, 12-month roadmap, and accountability system.
2. **Tab 2 — Daily Activities**: lets you log each day's activities. The analyzer scans your entry for behaviors the coach says to *keep* vs *stop*, produces an alignment score (0–100), and flags risks against the roadmap.
3. **Tab 3 — Report**: rolling report with alignment KPIs, per-category bars, deviations flagged in the last 30 days, current streak, and this week's coach reflection questions.

All data lives in your **browser's localStorage** — nothing leaves your machine. Use the **Export** button to back up a JSON of your log, and **Import** to restore.

## Files
| File | Purpose |
|------|---------|
| [index.html](index.html) | Page shell + 3 tabs |
| [styles.css](styles.css) | Styling |
| [app.js](app.js) | Tab switching, activity form, analyzer, report renderer, import/export |
| [data.js](data.js) | Full coach content + scoring categories (edit here to tune the roadmap or keyword lists) |
| [.github/workflows/deploy.yml](.github/workflows/deploy.yml) | GitHub Pages deploy |

## Run locally
Open `index.html` directly in your browser — no build step, no dependencies.

Or serve it (optional):
```powershell
py -3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy to GitHub Pages

1. **Create a new GitHub repo** (private or public), for example `cto-coach-tracker`.
2. From this folder, initialize and push:
   ```powershell
   git init
   git add .
   git commit -m "Initial CTO coach tracker"
   git branch -M main
   git remote add origin https://github.com/<your-username>/cto-coach-tracker.git
   git push -u origin main
   ```
3. On GitHub → **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
4. The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) runs on every push to `main` and publishes the site.
5. After the first successful run, your page is live at:
   `https://<your-username>.github.io/cto-coach-tracker/`

> Data note: localStorage is per-browser and per-domain, so your daily log lives in whichever browser you use to open the deployed page. Use **Export** weekly to keep a backup.

## Tuning the analyzer
Open [data.js](data.js) and edit the `categories` array. Each category has:
- `positive` — keywords/phrases that count as **aligned** with the roadmap (Tab 1's "Continue" and "Start" behaviors).
- `negative` — keywords/phrases that count as **deviation** (Tab 1's "Stop" behaviors).

The alignment score formula is in [app.js](app.js) → `analyze()`:
```
score = 50 + 8 * positives − 12 * negatives   (clamped 0..100)
```
Change the weights if you want the score to be more or less forgiving.

## Editing the coach content
The full Tab 1 content is in `window.COACH_DATA.coachContent` inside [data.js](data.js). Each section can carry `subsections`, `bullets`, `phases`, `lists`, `audiences`, `scripts`, `operatingModel`, `periods`, `months`, `accountability`, or `finalAdvice` — the renderer in [app.js](app.js) handles all of them.
