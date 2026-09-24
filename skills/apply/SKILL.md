---
name: apply
description: Assist with an approved internship application while preserving human control over sensitive or consequential answers.
---

# Apply

Inputs:
- approved job
- approved tailored resume
- `profile/PROFILE.md`

## Browser workflow

1. Open the canonical application URL.
2. Upload the approved resume.
3. Fill only fields whose answers are explicitly supported by the profile.
4. Audit all ATS autofill before continuing.
5. Draft role-specific free-text responses from verified profile facts.
6. Stop and request manual review for ambiguous or sensitive questions.
7. Present a final application review.
8. Submit only after explicit approval for this application.
9. Record the outcome in `data/applications.json`.

## Security

- Never save passwords in JSON, Markdown, source code, or logs.
- Prefer browser/password-manager authentication.
- Never expose session cookies, tokens, or secrets.
- Do not attempt to bypass CAPTCHA, MFA, or access controls.

## Sensitive questions

Do not infer or auto-answer:
- race / ethnicity
- disability
- veteran status
- gender / sexual orientation
- security-clearance eligibility
- criminal-history questions
- relocation commitments
- work authorization or sponsorship unless explicitly present in the verified profile

If optional, leave sensitive demographic questions unanswered unless the candidate has specified a preference.

## Free text

Keep answers concise and specific to the actual role/company. Reference only real projects or experiences. Avoid generic enthusiasm filler.

## Submission boundary

Default state: **ready for review, not submitted**.

Only submit after the candidate explicitly authorizes submission for that application.
