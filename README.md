# Trade Avata — Consolidated Frontend

This repository contains the consolidated Trade Avata frontend prepared for GitHub Pages.

## Included
- Public Trade Avata website
- Member progress dashboard
- Advanced Analytics dashboard
- Advanced Trading Journal
- Master-only Copy Trading dashboard
- Admin Control Center
- Responsive desktop/tablet/mobile layouts
- Local/demo interactions so the frontend can be tested before Firebase is connected
- GitHub Pages deployment workflow

## Deploy
1. Create a new GitHub repository.
2. Upload the entire contents of this folder to the repository root.
3. Make sure the default branch is `main`.
4. In GitHub: Settings → Pages → Source → GitHub Actions.
5. Push/commit. The included workflow builds and deploys automatically.

The Astro base path is detected from `GITHUB_REPOSITORY`, so you do not need to hard-code the new repository name.

## Backend stage
The frontend intentionally uses demo/local state where a live backend would normally be required. The next phase is Firebase authentication, Firestore, Storage, Functions, email, real analytics feeds, and copy-trading services.
