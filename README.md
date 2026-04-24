This folder contains the **grít marketing + docs website** built with [Next.js](https://nextjs.org) (App Router).

## Getting Started

Install dependencies, then run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes

- `/` — landing page
- `/docs` — full documentation reference

## Content sources

- **Docs source of truth**: `src/content/docs.md` (derived from the original static prototype in `../abrar/docs.html`)
- **Home page content**: `src/content/homeContent.ts`

## Editing

- Landing page composition: `src/app/page.tsx` + `src/components/home/*`
- Docs renderer: `src/app/docs/page.tsx`
- Global styling: `src/app/globals.css`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

If you set `NEXT_PUBLIC_SITE_URL`, `robots.txt` and `sitemap.xml` will use it.
