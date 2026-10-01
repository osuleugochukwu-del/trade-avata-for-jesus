# Trade Avata — One-Upload Deployment Checklist

## Before upload
- Do not rename or remove `.github/workflows/build-and-deploy.yml`.
- Upload the **contents** of this package to the root of the new repository.
- Use `main` as the default branch.

## GitHub Pages
1. Open the new repository.
2. Go to **Settings → Pages**.
3. Choose **GitHub Actions** as the source.
4. Commit/push the files.
5. Open **Actions** and wait for `Trade Avata - Build and Deploy` to complete.

## Why the previous base-path mistake should not repeat
`astro.config.mjs` reads `GITHUB_REPOSITORY` during the GitHub build. The new repository name is therefore used automatically. There is no `/JESUS/` or `/NEW-SITE-TRADE-AVATA/` hard-coded into the project.

## Included route groups
Public: Home, Indicators, Product Detail, Courses, Course Detail, Course Player, Articles, Article Detail, Market, Tools, Learn, Store, About, Contact, Login, Register, Privacy, Terms, Risk Disclosure, 404.

Dashboards: Member, Analytics, Journal, Copy Trading (Master workspace), Admin Control Center.

## Backend boundary
The interface, navigation, responsive behavior and local interactions are included. Secure authentication, database persistence, payments, broker connections, email delivery, true AI calls, and copy-trading execution remain backend services and should be connected after frontend approval.
