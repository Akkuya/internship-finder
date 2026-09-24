---
name: find-jobs
description: Discover fresh internship/co-op postings, normalize them, and pass viable roles to the evaluator.
---

# Find Jobs

Read `profile/PROFILE.md` for the target term, locations, work authorization, and role preferences.

## Discovery

Search broadly enough to capture both primary and high-upside stretch roles.

Prefer:
- company career pages
- original ATS postings
- reputable internship boards as discovery sources

Search primary directions first, then stretch directions.

## Normalize

For each listing capture:
- company
- title
- location
- remote/hybrid/on-site
- target term or start date if stated
- date posted if available
- application deadline if available
- canonical application URL
- full job description
- source

## Deterministic filtering

Use code, not an LLM, for:
- exact duplicates
- previously applied URLs
- company + title duplicates
- clearly expired postings
- date arithmetic

Do not use brittle keyword filters to discard a role merely because its title is generic.

## Evaluation

Pass normalized viable roles to `skills/evaluate-job/SKILL.md`.

Return a compact shortlist grouped into strong fit, stretch, and backup roles. Fresh strong fits and time-sensitive postings should be surfaced prominently.
