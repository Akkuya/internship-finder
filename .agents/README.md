# Internship Finder Agents

The `.agents` directory contains the agent configuration and reusable skills for an internship application workflow. Together, these files help find suitable roles, rank them, tailor a resume for each posting, and complete applications.

## Directory overview

- `GEMINI.md` defines the workflow's overall goal, operating constraints, and guidance for agents.
- `mcp_config.json` configures the Playwright MCP server used for browser automation.
- `.gitignore` keeps the private profile skill out of version control.
- `skills/` contains the instructions for each specialized agent capability.

## Skills

- `orchestrator` coordinates the full workflow. It delegates job discovery, resume tailoring, and application submission in the required order, then gathers the results.
- `job-finder` discovers, filters, scores, deduplicates, and ranks internship listings based on fit and application viability.
- `tailor-resume` adapts the base resume to a specific job description, checks the writing and formatting, and produces a targeted PDF.
- `applier` navigates an application site, verifies form data, uploads the tailored resume, submits the application when possible, and records the outcome.
- `humanize` edits generated text so it sounds natural, direct, and consistent with a human writer's voice.
- `profile` is the private source of applicant information used by the other skills when they need verified personal context. It contains all work experience, projects, certifications, education, etc. 

## Private profile

`skills/profile/SKILL.md` is intentionally not shown or documented in detail because it contains private information. Its contents are confidential and should not be copied into this README, committed to version control, printed in logs, or otherwise exposed.

Agents may use the profile only as an internal source of truth when a task requires it. This README describes the file's purpose without revealing any of the information stored inside it. The `.gitignore` entry for the profile provides an additional safeguard against accidentally committing it.

## Workflow at a glance

1. The orchestrator asks the job finder for a ranked shortlist.
2. After approval, the resume tailor creates a targeted resume for each selected role.
3. The applier uses that resume to complete the application and log the result.
4. The humanizer supports written material produced during tailoring or application work.

Keep all agent instructions scoped to their assigned role, and never expose the private profile while reporting results.
