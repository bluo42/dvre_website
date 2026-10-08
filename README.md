# DVRE Partners website

The dvrepartners.com site as a Next.js project, ready to host on Vercel.
It recreates the pages built on Squarespace: homepage, About, Team, the fund
pages, 11 project pages, and News with individual post pages.

## Hosting

The site is deployed on Vercel (project `dvre-website`, team `dvre-development-team`)
from the `main` branch of this repository. Every push to `main` redeploys automatically.
`dvrepartners.com` and `www.dvrepartners.com` are added to the Vercel project; the
apex redirects to `www`. DNS is managed in Squarespace Domains.

## Before you cancel Squarespace

- **Photos are already in the project** (`public/images/`), so nothing is served
  from Squarespace's image server any more. Add new photos to `public/images/` and
  reference them in `lib/data.ts` as `img('/images/<file>.jpg')`.
- **Point the domain at Vercel** (see Hosting above) before cancelling the Squarespace
  site, and keep the Google Workspace email (MX/TXT) records as they are.
- **Add the hero video.** Save your drone clip as `public/video/hero.mp4`
  (see `public/video/README.txt`). Until then the homepage shows a still photo.
- **Old links keep working.** `next.config.mjs` redirects the old Squarespace URLs
  (e.g. `/dvre-fund-i`, `/updates/...`, `/howard3-1`) to the new pages.

## Editing content

| To change… | Edit |
| --- | --- |
| Hero text, email, stats, funds, projects, team bios, About page (who we are, philosophy, timeline) | `lib/data.ts` |
| News posts | `content/news/*.md` (see below) |
| Colors, spacing, layout | `app/globals.css` |
| Fonts | two lines at the top of `app/layout.tsx` |
| Page structure | `app/*/page.tsx` |

### Adding a News post

The News section is hidden for now. To bring back `/news` and the News links, set
`showNews = true` near the top of `lib/data.ts`. Posts can still be added while it's hidden.

1. Copy `content/news/_TEMPLATE.md` and rename it, e.g. `oakland-7-construction-loan.md`
   (the file name becomes the URL: `/news/oakland-7-construction-loan`).
2. Fill in the header:
   - `category`: `Acquisition`, `Financing`, `Construction` or `Completion`
   - `fund`: `Fund I`, `Pasadena Fund`, `Altadena Fund` or `Retail`
   - `image` (optional): a full image URL, or put a photo in `public/news/` and use
     `/news/photo.jpg`. Without one, the fund's aerial is used.
3. Write the body below the `---` line, with a blank line between paragraphs.
4. Commit and push. The newest post automatically becomes the featured card.

Keep announcements factual: no IRRs, return figures, raise amounts or invitations
to invest.

### Adding a project

Add an entry to the `projects` list in `lib/data.ts` with its fund slug
(`fund-i`, `pasadena-fund`, `altadena-fund`, `retail`). It appears on the fund page
and gets its own page at `/projects/<slug>`.

## Run locally (optional)

```
npm install
npm run dev
```
Then open http://localhost:3000. Requires Node.js 18.17 or newer.

## Notes

- **Fonts:** Inter Tight (headings) and Inter (body), loaded free from Google Fonts.
  The Squarespace site used Aktiv Grotesk, an Adobe font that needs an Adobe license
  outside Squarespace.
- **Project pages** for the newer Pasadena and Altadena projects show the fund's
  aerial until you add project photos (the Squarespace versions reused Howard 3's
  photos as placeholders).
- **Investor Portal** links to Cash Flow Portal, unchanged.
