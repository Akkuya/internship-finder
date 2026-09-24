---
name: tailor-resume
description: >
  Tailors Anoch's resume to a specific job description, optimizing for ATS
  and human reviewers. Handles connection mapping, weighting, LaTeX editing,
  and PDF compilation. Uses the humanizer skill to eliminate AI-sounding prose.
---

# Resume Tailor

End-to-end workflow for adapting Anoch's resume to a job listing — from
extracting requirements through generating a compiled, one-page PDF.

---

## Step 1 — Parse the Job Listing

Extract every signal from the posting:

- **Hard skills** — tools, languages, frameworks, platforms (e.g. Docker, Kubernetes, TypeScript)
- **Soft skills** — communication, ownership, collaboration patterns
- **Requirements vs. nice-to-haves** — distinguish mandatory qualifications from assets
- **Implicit signals** — industry terms, team size cues, seniority expectations hidden in the language

Then connect each signal to Anoch's background. Be liberal. "Experience with Docker and Kubernetes" connects to StudentIDE. "Scripting and automation" connects to the home-network project. "Cross-platform development" connects to the IPTV box. List every plausible connection before filtering.

---

## Step 2 — Weigh and Select

Evaluate each connection on two axes: **relevance** (how directly it maps to the requirement) and **impact** (how strongly it demonstrates capability). Prioritize connections that are both specific and verifiable over generic claims.

From the full list, select **at most 3 projects or experiences** to feature. Depth beats breadth. Three well-told stories outperform six bullet-pointed mentions.

---

## Step 3 — Write the Tailored Resume

### Resume Writing Standards

#### The One-Page Rule

One page, no exceptions for early-career candidates. If it doesn't fit, cut — don't shrink margins below 0.5in or font below 10.5pt. Content decisions should come before layout tricks.

#### Section Order

For a CS student or new grad, this order works best:

1. **Header** — name, email, GitHub, LinkedIn, portfolio (no photo, no address beyond city)
2. **Summary** (optional but recommended when tailoring) — 2–3 lines max
3. **Skills** — grouped by category (Languages, Frameworks, Tools, Platforms)
4. **Projects** — the real substance for someone without much formal work history
5. **Experience** — internships, part-time roles, research
6. **Education** — last for a student; include GPA only if above 3.5

Reorder Projects and Experience based on whichever is stronger for the specific role. If there's a strong internship, lead with it.

#### The Summary (If Used)

Don't write a generic objective. Write a targeted 2–3 line pitch that mirrors the job title and front-loads the two strongest credentials.

Bad:
> Computer Science student looking for an internship to develop skills in software development.

Good:
> Second-year CS student with hands-on experience building full-stack systems (TypeScript, Python, React) and deploying hardware automation across Raspberry Pi and ESP32. Looking for a backend or systems role where low-level problem-solving matters.

Place 3–5 high-priority terms from the job description in the summary — ATS systems are designed to scan it first.

#### The XYZ Rule (Google's Bullet Formula)

Every bullet should follow: **"Accomplished [X] as measured by [Y] by doing [Z]"** — the formula coined by Laszlo Bock, former SVP of People Operations at Google. It forces every bullet to answer three questions: what changed, how much, and how.

- **X** — the result or outcome (what got better, faster, cheaper, more reliable)
- **Y** — the measurement (%, ms, users, lines, hours saved — any number works)
- **Z** — the method (what was specifically built or done)

Examples:

| Weak | Strong (XYZ) |
|---|---|
| "Worked on gesture recognition" | "Replaced MediaPipe with a custom ONNX pipeline to restore aarch64 compatibility, cutting inference latency to under 30ms" |
| "Built an IPTV app" | "Shipped an Electron/React streaming app targeting Android TV hardware, integrating TMDB metadata and progressive source loading for sub-2s content start times" |
| "Set up home automation" | "Deployed a 4-device MQTT automation stack (Pi, ESP32, Windows, Home Assistant) replacing 3 manual workflows with gesture and IR triggers" |

The order can vary — lead with the metric if it's impressive. The key is that all three elements are present in every bullet. If something genuinely can't be quantified, use scope instead: team size, codebase size, number of devices, or a before/after description ("reduced setup from days to hours").

#### Action Verbs

Never start a bullet with "responsible for," "worked on," or "helped." These signal passive involvement. Every bullet starts with a past-tense verb that makes the contribution clear at a glance.

Strong verbs by category:

- **Built / shipped**: Engineered, Developed, Implemented, Deployed, Shipped, Architected
- **Improved**: Optimized, Reduced, Accelerated, Refactored, Streamlined
- **Led / owned**: Designed, Drove, Directed, Owned, Spearheaded
- **Research / analysis**: Investigated, Diagnosed, Benchmarked, Evaluated, Identified
- **Collaboration**: Coordinated, Integrated, Contributed, Documented

Don't repeat the same verb in consecutive bullets. Variety signals range.

#### Bullet Length and Count

Keep each bullet to 1–2 lines (roughly 15–25 words). If a bullet runs to 3+ lines, split it or cut it. Aim for 3–5 bullets per project or role — fewer signals shallow involvement, more dilutes the strongest ones. Front-load: recruiters skim primarily the first three bullets under each entry.

#### ATS Compatibility

Over 75% of resumes are rejected by ATS before reaching a human, most commonly due to missing keywords, incompatible formatting, or structural issues.

Rules:

- **Mirror the job's exact language.** If the posting says "CI/CD pipelines," use that phrase — not "automated deployment." ATS systems match keywords literally.
- **Single-column layout only.** Tables, text boxes, and multi-column layouts cause parsing errors, silently dropping content before a human ever sees it.
- **Spell out acronyms once.** Write "Kubernetes (K8s)" on first mention to cover both search paths.
- **Use a dedicated Skills section.** Many ATS parsers specifically expect skills under a labelled section — burying them only in bullet prose reduces match scores.
- **Identify 10–15 must-have terms** from the posting and link each to a real achievement. Place each term once in context, then move on. Keyword stuffing without backing it up reads as spam to both ATS and humans.

#### Common Mistakes to Kill Before Submitting

- **Responsibility lists instead of achievement lists** — "Maintained codebase" tells a recruiter nothing. What changed because of it?
- **Buzzword padding** — "leveraged synergistic solutions to drive impact" is filler. Every word should carry weight.
- **Inconsistent tense** — past tense for everything unless the role is currently ongoing
- **Orphan lines** — a single word on the last line of a bullet wastes a full line of space; tighten the sentence
- **Generic skills** — listing "Git" or "Microsoft Office" as top skills for a software role wastes the section on noise; save it for differentiators
- **Unexplained project names** — "StudentIDE" means nothing to a recruiter; add one-line context ("Docker-based VM/IDE platform for university CS courses") before the bullets

### Be Human

Run all written content through the **humanizer skill** before finalizing. Resume bullets are especially prone to AI patterns: rule-of-three padding, significance inflation ("spearheaded," "leveraged," "pioneered"), and hollow soft-skill claims ("collaborated cross-functionally to drive synergies").

The final resume should read like a person wrote it — specific, direct, with word choices that could only come from someone who actually built the thing.

---

## Step 4 — Generate the PDF

1. Clone `raw-resumes/Original.tex` → `raw-resumes/<job_name>.tex`
2. Apply all edits to the new file
3. Run the compile script with `<job_name>` as the argument:
