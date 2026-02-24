# ai-approval-engine

AI-assisted approval workflow engine where AI drafts recommendations, but decisions and accountability stay with humans. This is a reference implementation designed to showcase audit-first, enterprise-friendly AI adoption patterns using a MERN stack.

## What this demonstrates

- Human-in-the-loop approvals (requester → approver)
- AI reviewer that returns structured output (validated by schema)
- Audit trail (who did what, when, and what the AI suggested)
- Policy validation (example: amount thresholds, required fields)
- Clean monorepo structure for maintainability and scale

## Tech Stack

- Frontend: React (Vite), Tailwind
- Backend: Node.js, Express
- Database: MongoDB
- Auth: JWT
- Validation: Zod
- CI: GitHub Actions

## Project Structure

```text
ai-approval-engine/
  apps/
    api/                  # Express API
    web/                  # React UI (Vite)
  packages/
    shared/               # Shared schemas and utilities
  infra/                  # Local infra tooling (docker-compose)
  .github/
    workflows/            # CI pipelines