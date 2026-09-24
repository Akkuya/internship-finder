# Internship Agent

A small, auditable agent workflow for internship discovery, evaluation, resume tailoring, and application assistance.

This branch is a **privacy-safe template**. Keep reusable skills and scripts in version control, but keep the real candidate profile, resume, application history, credentials, and generated resumes in a **private repository**.

## Design

```text
job discovery
    ↓
evaluate + shortlist
    ↓
human approval
    ↓
tailor resume
    ↓
application assistance
    ↓
human review + submit
    ↓
application log
```

## Principles

- The repository is the source of truth for workflow instructions and persistent state.
- The agent runtime (for example, ChatGPT Work) executes the workflow.
- Code handles deterministic work: scraping, parsing, deduplication, date handling, PDF compilation, and storage.
- Agents handle judgment: relevance, tradeoffs, resume emphasis, and ambiguous application questions.
- Never fabricate resume facts or performance metrics.
- Never store passwords or authentication tokens in repository files.
- Do not automatically submit an application without an explicit user approval step.
- Keep stretch roles visible instead of burying them solely because callback probability is lower.

See [docs/SETUP.md](docs/SETUP.md) for the private-repo setup.
