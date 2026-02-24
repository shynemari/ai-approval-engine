
---

## `ROADMAP.md`

```markdown
# Roadmap

This roadmap is intentionally small and focused to keep momentum.

## Phase 1: Boilerplate (MERN Monorepo)

- [ ] Monorepo structure (`apps/api`, `apps/web`, `packages/shared`)
- [ ] API health endpoint
- [ ] Web app connects to API
- [ ] Docker Compose for MongoDB
- [ ] CI workflow for install and build

## Phase 2: Core Workflow

- [ ] User model (requester, approver)
- [ ] JWT auth and protected routes
- [ ] Approval request model
- [ ] Approval request create and list screens
- [ ] Approver decision flow (approve, reject, request changes)

## Phase 3: AI Reviewer and Validation

- [ ] AI provider adapter (provider-agnostic interface)
- [ ] Structured AI output schema (Zod)
- [ ] Fallback behavior when AI output is invalid
- [ ] Store AI snapshot with each review

## Phase 4: Audit and Policy

- [ ] Audit log model (append-only)
- [ ] Policy checks (example: amount threshold, required fields)
- [ ] Decision history and audit timeline UI

## Phase 5: Production Readiness

- [ ] Basic tests (unit and API)
- [ ] Input validation and error handling
- [ ] Rate limiting and request logging
- [ ] Deployment notes (Docker, reverse proxy, env strategy)