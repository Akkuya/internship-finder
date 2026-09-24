# Private Workspace Setup

This public branch contains only the reusable, privacy-safe workflow.

## Recommended setup

1. Create a **private** GitHub repository named `internship-agent`.
2. Copy this branch into that repository.
3. Copy `profile/PROFILE.example.md` to `profile/PROFILE.md` and fill in verified candidate information.
4. Copy `config/search.example.yaml` to `config/search.yaml` and customize the search.
5. Create `data/applications.json` as an empty array.
6. Add the real base resume under `profile/`.
7. Keep credentials out of the repository entirely.

The root `.gitignore` is designed to keep the private profile, resume, application state, generated resumes, and secrets out of version control by default. In a private repo you may decide to version some non-secret state, but credentials should still never be committed.

## Using with an agent runtime

Treat the repository as the workflow's durable source of truth and the agent runtime as the executor.

A useful first workflow is:

1. Read `AGENTS.md` and `profile/PROFILE.md`.
2. Find current roles for the configured target term.
3. Deduplicate against `data/applications.json`.
4. Evaluate and group roles using `skills/evaluate-job/SKILL.md`.
5. Present the shortlist.
6. Stop for candidate approval.

Add resume tailoring next. Add browser-assisted application filling only after the shortlist and tailoring steps are working reliably.

## What not to automate first

Avoid jumping immediately to fully autonomous mass submission. Application forms contain eligibility, legal, relocation, demographic, and other consequential questions that deserve an explicit review boundary.
