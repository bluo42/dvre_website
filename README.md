# DVRE Partners website

The dvrepartners.com site as a Next.js project, ready to host on Vercel.
It recreates the pages built on Squarespace: homepage, About, Team, the fund
pages, 11 project pages, and News with individual post pages.

## Deploy to Vercel (about 10 minutes)

1. **Put the code on GitHub.** Create a new private repository at github.com/new,
   then upload this folder (drag the files into the repo page, or use `git push`).
2. **Import to Vercel.** At vercel.com/new, choose the repository and click Deploy.
   No settings need changing. You'll get a preview link like `dvre-partners.vercel.app`.
3. **Check the preview**, then connect your domain: Vercel project → Settings →
   Domains → add `dvrepartners.com` and `www.dvrepartners.com`. Vercel shows the DNS
   records to set at your domain registrar (or in Squarespace Domains, if the domain
   was bought there — you can transfer it out later).
4. **Before cancelling Squarespace**, run the image copy step below so no photos
   are still served from Squarespace.

Every change you push to GitHub redeploys automatically.

## Before you cancel Squarespace

- **Copy the photos into the project** (they currently load from Squarespace's image
  server). On your computer, in this folder:
  ```
  npm install
  npm run fetch-images
  ```
  This downloads every photo into `public/images/` and updates `lib/data.ts`.
  Commit and push the result.
- **Add the hero video.** Save your drone clip as `public/video/hero.mp4`
  (see `public/video/README.txt`). Until then the homepage shows a still photo.
- **Old links keep working.** `next.config.mjs` redirects the old Squarespace URLs
  (e.g. `/dvre-fund-i`, `/updates/...`, `/howard3-1`) to the new pages.

## Editing content

| To change… | Edit |
| --- | --- |
| Hero text, email, stats, funds, projects, team bios, About timeline | `lib/data.ts` |
| News posts | `content/news/*.md` (see below) |
| Colors, spacing, layout | `app/globals.css` |
| Fonts | two lines at the top of `app/layout.tsx` |
| Page structure | `app/*/page.tsx` |

### Adding a News post

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
