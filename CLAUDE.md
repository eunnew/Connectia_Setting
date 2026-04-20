# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML/CSS/JS web project with no build step. Files are opened directly in a browser.

## Files

- `index.html` — Main landing page (dark theme, sections: hero / feature cards / contact form)
- `style.css` — Shared styles for `index.html`
- `script.js` — Shared JS for `index.html` (smooth scroll, form submit feedback)
- `calculator.html` — Standalone calculator (self-contained, no external deps)
- `connectia.html` — Standalone landing page for "커넥티아" AI sales product (self-contained, Pretendard + Nanum Square via Google Fonts, IntersectionObserver scroll animations)

## Design tokens (connectia.html)

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#0b0b0f` | Page background |
| `--surface` | `#131318` | Chat bubbles (AI) |
| `--surface2` | `#242430` | Chat card background |
| `--purple` | `#6b6be1` | Primary CTA, user bubbles |
| `--purple-light` | `#a9a9ee` | Feature list text |
| `--muted` | `#b8b3cc` | Hero subtitle |

## Design System Extraction Workflow
레퍼런스 URL이 주어지면:
1. Playwright로 해당 URL 접속
2. 전체 페이지 스크린샷 저장
3. document.styleSheets에서 CSS 변수 추출
4. getComputedStyle로 주요 엘리먼트 스타일 수집
5. design-tokens.json으로 저장
6. tailwind.config에 자동 반영

## Scroll animation pattern (connectia.html)

Elements start hidden with `.reveal` class (opacity 0, translateY 28px). IntersectionObserver adds `.visible` when they enter the viewport. Stagger delay is set via inline `style="transition-delay:Xs"` on each element in 0.8s increments.
