# Security Policy

## Scope

This package is a frontend-only Atomic Design component library (React + Tailwind CSS). It has no backend, no server-side code, no authentication, and doesn't handle user data or secrets itself — see `AUDIT.md` and `README.md` for what it actually contains. The realistic attack surface is:

- **Vulnerable dependencies** — a CVE in `react`, `@radix-ui/*`, `lucide-react`, or any other dependency this package pulls in.
- **Unsafe rendering in a component** — e.g. a future `dangerouslySetInnerHTML` or similar that lets untrusted content become executable markup. There is none today (verified by grepping `src/` for `dangerouslySetInnerHTML`, `eval(`, and `new Function(` — zero matches), but flag it immediately if you find one being added.
- **Supply-chain risk in the distribution model** — this package is consumed as a git dependency (`github:autopaylab/landing-design-system#<tag>`), not published to any registry (see "Releases" in `CONTRIBUTING.md`). Access is controlled entirely by GitHub repository permissions.

## Supported Versions

Only the latest tagged release is supported. There's no long-term-support branch — given the size and pace of this package, backporting fixes to older tags isn't realistic; upgrade to the latest tag instead.

## Reporting a Vulnerability

**Preferred: GitHub's private vulnerability reporting.** This repo has it enabled — go to the [Security tab](https://github.com/autopaylab/landing-design-system/security) → "Report a vulnerability". This reaches maintainers directly without exposing the report publicly until it's resolved.

If you can't use that for some reason, open an issue with as little sensitive detail as possible and ask for a private channel to share the rest.

Please don't open a public issue with exploit details or proof-of-concept code before a fix is available.

## What to expect

This is a small, actively-maintained internal package, not a widely-deployed public library — response time depends on maintainer availability rather than a formal SLA. A confirmed vulnerability gets a patch released as soon as practical, noted in `CHANGELOG.md`.

## Automated safeguards already in place

- **Dependabot** version-update PRs (weekly, `.github/dependabot.yml`) and **Dependabot security updates** (automatic PRs specifically for known-vulnerable dependency versions, independent of the weekly version bumps).
- **Secret scanning + push protection** — GitHub blocks pushes containing recognizable credentials before they land in history.
- **CI-enforced accessibility and correctness checks** on every PR (see `CONTRIBUTING.md`) — not a security control per se, but the same "verify automatically, don't wait for a manual audit" philosophy applies here.
