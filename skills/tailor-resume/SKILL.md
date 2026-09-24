---
name: tailor-resume
description: Tailor the candidate's existing resume to an approved job without inventing facts.
---

# Tailor Resume

Inputs:
- approved job description
- `profile/PROFILE.md`
- candidate's base resume

## Rules

- Preserve factual accuracy.
- Never add a technology merely because the job description mentions it.
- Never invent a performance metric.
- Use a metric only when it is explicitly known or can be transparently derived from known data.
- Prefer concrete technical detail over generic soft-skill language.
- Keep the candidate's actual voice and level of experience.
- Do not keyword-stuff.
- Keep the result to one page unless the candidate explicitly changes this preference.

## Process

1. Extract required skills, preferred skills, responsibilities, and domain signals from the job.
2. Map each signal to verified experiences/projects in the profile.
3. Select the strongest relevant evidence.
4. Reorder and rewrite existing bullets to emphasize that evidence.
5. Remove lower-value material if space is needed.
6. Check every changed claim against the profile/base resume.
7. Generate the resume artifact.
8. Return a brief change log explaining what was emphasized and why.

If the role depends heavily on a missing skill, do not disguise the gap. Surface it to the candidate.
