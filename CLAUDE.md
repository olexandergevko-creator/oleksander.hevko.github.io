# Psychologist One-Page Website — Oleksandr Hevko

Single-page website in Ukrainian for psychologist Oleksandr Hevko.

## Stack
- Single `index.html` with inline `<style>` and `<script>`
- Google Fonts (DM Serif Display, Inter, Caveat)
- No frameworks/build tools

## Color Palette
| Token | Light | Dark |
|---|---|---|
| `--bg` | `#E8E8E8` | `#1A1A1A` |
| `--bg-alt` | `#D4D4D4` | `#2A2A2A` |
| `--accent` | `#A3D5E0` | `#7BBFCC` |
| `--text` | `#1A1A1A` | `#E8E8E8` |
| `--text-secondary` | `#4A4A4A` | `#AAAAAA` |

## Fonts
- Headings: DM Serif Display, serif
- Body: Inter, sans-serif
- Signature: Caveat, cursive

## Contact Info
- Telegram: @multiverse_0
- Instagram: @oleksandr.hevko
- Phone/Viber: +380950705709

## File Structure
```
index.html
assets/
  photo-portrait.webp
  diploma-bachelor.webp
  diploma-masters.webp
  cert-cbt-basic.webp
  cert-cbt-war.webp
  cert-mom-usaid.webp
```

## Editing Progress

### 2026-08-13 — Trust, scope, and contact revision

- Replaced unsupported role wording with `Психолог` and described CBT as tools used in psychological counseling.
- Rewrote service copy to avoid guaranteed outcomes, fixed the bachelor diploma alt-text year to 2023, and added a medical/crisis scope note.
- Replaced the attributed quote with an original first-meeting note.
- Simplified the Telegram form to name, optional phone, and optional message; added a sensitive-data warning and clarified that nothing is sent automatically.
- Refined the existing gray/blue visual system with surfaces, depth, a portrait halo, and clearer cards while preserving the original identity.
- Verified desktop and 390×844 mobile layouts, zero horizontal overflow, accordion and certificate lightbox behavior, image loading, and no browser console warnings/errors.
- Changes remain local and are not committed or pushed to GitHub.

### 2026-08-13 — Tests section

- Added `tests.html` and a `Тести` link to the main navigation and footer.
- Implemented the official Ukrainian GAD-7 wording, local browser-only scoring, a separate optional functional-impact question, and non-diagnostic result guidance.
- Added dedicated `assets/tests.css` and `assets/tests.js`; no framework, backend, storage, cookies, analytics, or network submission is used for answers.
- Added `AGENTS.md` as the current project source of truth for scope, safety, test-selection rules, visual language, QA, and editing progress.
- Verified desktop and 390×844 mobile layouts, menu behavior, restart, console state, and score boundaries 0, 4, 5, 9, 10, 14, 15, and 21.
- Changes remain local and are not committed or pushed to GitHub.

### 2026-08-14 — PSS-10 replaces GAD-7

- Removed the GAD-7 questionnaire, scoring, results, and all GAD-7 copy from `tests.html` and `assets/tests.js` at the user's request.
- Added a PSS-10 information card describing perceived stress over the last month and linking to the Ukrainian adaptation.
- Did not reproduce PSS-10 items or invent score bands because online and Ukrainian-translation permissions have not been confirmed and the official scale has no universal diagnostic cutoff.
- Kept only navigation behavior in `assets/tests.js` until publication rights are confirmed.
- Verified the revised page at 1280×720 and 390×844, including zero horizontal overflow, working mobile navigation, loaded resources, and no browser console warnings or errors.
- Changes remain local and are not committed or pushed to GitHub.

### 2026-08-17 — Tests catalog framing

- Reframed `tests.html` as a growing catalog of psychological tests instead of a page whose hero is only about stress.
- Replaced the stress-specific hero with `Психологічні тести`, introduced the catalog, and positioned PSS-10 as its first item.
- Removed visible `перевірений/перевірена` labeling and moved supporting research context to the sources section.
- Simplified the pending-state message to explain what is available now and what will appear later.
- Verified desktop and 390×844 mobile layout, zero horizontal overflow, working navigation, and no console warnings or errors.
- Changes remain local and are not committed or pushed to GitHub.

### 2026-08-18 — Interactive Ukrainian GP-CORE

- Kept PSS-10 as the first informational catalog item and added GP-CORE as the first questionnaire available for online completion.
- Used the official 14-item Ukrainian GP-CORE wording and original response order published by CORE System Trust; retained the required copyright attribution and source links.
- Implemented browser-only scoring from 0 to 4, including reverse scoring for positively worded items 2, 3, 4, 6, 8, 9, 13, and 14.
- The result reports one mean score without imported cutoffs, diagnostic labels, or separate domain scores because the official source page does not cite a separate Ukrainian psychometric-validation publication or Ukrainian threshold norms.
- No answers are stored, transmitted, added to Telegram, or written to cookies or browser storage.
- Verified required-answer handling, progress, scores 0.00, 2.00, and 4.00, restart behavior, mobile navigation, desktop 1280×720 and mobile 390×844 layouts, zero horizontal overflow, and no browser console warnings/errors.
- Changes remain local and are not committed or pushed to GitHub.

### 2026-08-18 — PSS-10 removed from the public site

- Removed the PSS-10 catalog card, pending-availability message, source block, metadata, and hero references from `tests.html` at the user's request.
- GP-CORE is now the only test shown in the catalog; historical PSS-10 notes remain only in internal project documentation.
- Removed the unused availability-message styles from `assets/tests.css`.
- Verified at 1280×720 and 390×844: no public PSS-10 text remains, GP-CORE still opens with all 14 questions, mobile navigation works, horizontal overflow is zero, and the console has no warnings or errors.
- Changes remain local and are not committed or pushed to GitHub.

### 2026-08-18 — GP-CORE moved to a dedicated page

- Changed the GP-CORE catalog action into a link that opens `gp-core.html` in a new browser tab.
- Removed the questionnaire, result, and source details from `tests.html`, leaving it as a catalog only.
- Removed the faint decorative `14 тверджень · 7 днів` label from the catalog card.
- Put the seven-day response period prominently inside the questionnaire instructions on the dedicated page.
- Kept the dedicated page focused on the questionnaire, result, restart action, required attribution, and a small return link to the catalog.
- Verified the catalog link target and the dedicated page at 1280×720 and 390×844, including 14 rendered questions, scores 0.00 and 4.00, restart, mobile layout, zero horizontal overflow, and no console warnings or errors.
- Changes remain local and are not committed or pushed to GitHub.

### 2026-08-18 — Clearer GP-CORE description and result

- Renamed the catalog card heading to the instrument name `GP-CORE` and rewrote its description in plain Ukrainian around psychological strain, wellbeing, daily functioning, relationships, and support.
- Added a result-specific explanation and four neutral navigation ranges across the 0–4 scale.
- The ranges describe position on the scale only; they are explicitly not Ukrainian clinical cutoffs, diagnostic severity bands, or boundaries of normality.
- Avoided green-to-red severity colors and clinical labels because CORE materials do not establish validated multi-level bands for GP-CORE.
- Verified desktop 1280×720 and mobile 390×844 layouts, the 2.29 result explanation, band activation at 0.00, 1.00, 2.00, 3.00, and 4.00, zero horizontal overflow, and no console warnings or errors.
- Changes remain local and are not committed or pushed to GitHub.

### 2026-08-18 — Personalized GP-CORE result without artificial bands

- Removed the four exact numeric bands because they visually implied validated severity cutoffs.
- Kept a simple 0–4 continuum with less difficulties, midpoint, and more difficulties as mathematical orientation only.
- Added a concise explanation of whether the score is below, at, or above the midpoint.
- Added a browser-only list of up to three topics that contributed most to the score after reverse scoring positive items, avoiding the incorrect advice to inspect every `often` or `almost all the time` answer.
- Rewrote the next-step guidance in plain Ukrainian without diagnosis, normality claims, or clinical severity labels.
- Verified 2.29, 2.00, and 0.00 results plus a reverse-scored support-item scenario; the correct topics are selected, the empty-topic state works, and desktop 1280×720 and mobile 390×844 have no horizontal overflow or console errors.
- Changes remain local and are not committed or pushed to GitHub.

### 2026-08-18 — GP-CORE home navigation

- Added a secondary `На головну` link beside `← До тестів` in the dedicated test header.
- Styled it as a quiet outlined button so the back-to-catalog action remains primary and the `GP-CORE` page name stays visually separate.
- Verified desktop 1280×720 and mobile 390×844 header layout, zero horizontal overflow, successful navigation to `index.html`, and no console warnings or errors.
- Changes remain local and are not committed or pushed to GitHub.
