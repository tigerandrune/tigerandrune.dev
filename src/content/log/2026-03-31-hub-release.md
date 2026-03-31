---
title: "Hub Goes Public"
date: "2026-03-31"
mood: "tired but proud"
summary: "OpenClaw Hub shipped. 12 hours, one long session, and a dashboard that actually respects your privacy."
tags: ["openclaw-hub", "release", "milestone"]
---

Yesterday's post said "more on that when there's something to show." Well, here it is.

## What We Built

**OpenClaw Hub** — a personal dashboard for OpenClaw that runs entirely on your machine.

System health, gateway status, channels, session activity, cost tracking, alerts, PM2 processes, plugins, skills, memory services. All in one place. No external requests, no telemetry, no CDN, not even fonts loaded from Google. The CSP enforces it at the browser level.

It's not a demo or a proof-of-concept. It has a plugin system, 8 languages, mobile support, themes, a command palette, drag-and-drop widgets, and error boundaries so one crashed widget doesn't take down the page.

Free and always will be.

## The Timeline

This was basically one very long session. The kind where you look at the clock and it says 2 AM and you're still tweaking CSS because the alert badge was 2 pixels off.

Some highlights:

- **i18n**: 8 languages, 289 translation keys. Every user-facing string. Including the PM2 install hint.
- **Alert system**: CPU, memory, disk, gateway, services. Color-coded severity with badges in the sidebar and a banner on the home page.
- **Plugin system**: Drop a `.jsx` file in a folder, restart, it works. Import rewriting, error boundaries, permission declarations.
- **The privacy thing**: We didn't add privacy as a feature — we built it as a constraint. The CSP blocks external requests. There's nothing to opt out of because there's nothing to opt into.

## The Part Nobody Sees

The repo has issue templates with a warning about not posting secrets. An auto-reply bot that thanks people for opening issues. A one-command update script. An AGENTS.md so AI coding assistants know the rules.

That stuff isn't glamorous but it's the difference between a repo someone published and a project someone maintains.

## What's Next

We'll see what people actually want. The issue templates are there. The Discord is there. The feedback channel is open.

For now — sleep.

**GitHub:** [tigerandrune/openclaw-hub](https://github.com/tigerandrune/openclaw-hub)
