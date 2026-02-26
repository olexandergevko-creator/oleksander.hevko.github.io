# Assets Directory

## Image Naming Convention
- `photo-*.webp` — Personal photos
- `cert-*.webp` — Certificates
- `diploma-*.webp` — Diplomas

## Source → Processed Mapping
| Source | Processed | Notes |
|---|---|---|
| `IMG_2559.PNG` | `photo-portrait.webp` | Resized 800px, cwebp -q 80 |
| `image.webp` | `diploma-masters.webp` | Resized 1200px, cwebp -q 80 |
| `image (1).webp` | `cert-mom-usaid.webp` | Copied as-is |
| `image (2).webp` | `cert-cbt-basic.webp` | Copied as-is |
| `2024_01_29 12_59 Office Lens.pdf` | `cert-cbt-war.webp` | pdftoppm → cwebp -q 80 |
| `Hala2-3Гевко Олександр.pdf` | `cert-uku.webp` | pdftoppm → cwebp -q 80 |

## Certificate Gallery Order (chronological)
1. `cert-cbt-basic.webp` — КПТ+. Базові техніки КПТ — УІКПТ, 2021
2. `cert-uku.webp` — Інститут психічного здоров'я — УКУ, 2022
3. `cert-cbt-war.webp` — КПТ коупінг з викликами війни — УІКПТ, 2022
4. `cert-mom-usaid.webp` — Профілактика вигоряння — МОМ/USAID, 2024
5. `diploma-masters.webp` — Магістр психології консультування з відзнакою — НПУ Драгоманова, 2025
