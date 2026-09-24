---
name: evaluate-job
description: Evaluate an internship against the candidate profile without collapsing everything into a single callback-probability score.
---

# Evaluate Job

Read `profile/PROFILE.md` before evaluating a role.

## Step 1: Hard eligibility

Determine whether the role is actually actionable:
- correct internship/co-op timing
- student eligibility
- location / remote compatibility
- work authorization compatibility
- paid, unless the profile explicitly opts into unpaid work
- application appears legitimate and still open

If a hard constraint clearly fails, mark it `not_eligible` and explain why.

## Step 2: Evaluate on separate dimensions

Do **not** hide important tradeoffs inside one opaque total score.

Assess:

### Role alignment
How closely the day-to-day work matches the candidate's primary or stretch directions.

### Skill overlap
Which required skills are already demonstrated, partially demonstrated, or missing.

### Learning value
Whether the role builds durable technical foundations such as systems, backend engineering, distributed systems, C/C++, Linux, networking, databases, math/statistics, ML engineering, or security, according to the candidate profile.

### Application realism
Estimate how demanding the requirements appear relative to the candidate's current background. Treat this as descriptive context, not a reason to suppress high-upside roles.

### Strategic upside
Consider mentorship, technical depth, exposure, domain relevance, and how the role expands future options.

### Recency / urgency
Prefer fresh postings and flag applications that should be submitted quickly.

## Step 3: Categorize

Place each viable role into exactly one group:

- `strong_fit`: good alignment and realistically actionable now
- `stretch`: meaningfully harder to land but high enough upside to justify an application
- `backup`: viable and useful, but less aligned with the candidate's preferred direction

Do not rank a prestigious or technically valuable role below weak roles solely because it is competitive.

## Step 4: Output

For each role return:

```json
{
  "company": "",
  "title": "",
  "url": "",
  "category": "strong_fit | stretch | backup | not_eligible",
  "role_alignment": "",
  "skill_overlap": {
    "demonstrated": [],
    "partial": [],
    "missing": []
  },
  "learning_value": "",
  "application_realism": "",
  "strategic_upside": "",
  "urgency": "",
  "why_apply_or_skip": ""
}
```

Use concrete evidence from the job description and profile. Do not invent candidate experience.
