# grít

<div align="center">

  <a href="https://github.com/alchemistreturns/grit">
    <img
      src="src/app/icon.svg"
      alt="Grít"
      width="120"
      height="120"
    />
  </a>

  <h3>Official website for the Grít CLI</h3>

  <p>
    <strong>Learn the product, read real docs, and get started</strong> <br />
    <sub>Grít turns commits into a knowledge base: adaptive questions, a live file watcher, reflections, and analytics.</sub>
  </p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white" alt="Next.js" /></a>
    &nbsp;
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
    &nbsp;
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" /></a>
    &nbsp;
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  </p>

  <h3>
    <a href="https://github.com/alchemistreturns/grit">grit on GitHub</a>
  </h3>

  <p>
    <a href="#whats-on-the-site">Site &amp; routes</a>
    &nbsp;·&nbsp;
    <a href="#tech-stack">Stack</a>
    &nbsp;·&nbsp;
    <a href="#getting-started">Run locally</a>
    &nbsp;·&nbsp;
    <a href="#content-and-documentation">Source files</a>
    &nbsp;·&nbsp;
    <a href="#deploy">Deploy</a>
  </p>

</div>

---

## 🌐 What's on the site

| Route       | What visitors get                                                  |
| :---------- | :----------------------------------------------------------------- |
| **`/`**     | Landing: story, how it works, features, and CTAs                   |
| **`/docs`** | Full reference: commands, config, git hooks, data model, workflows |

**SEO:** `robots.txt` and `sitemap.xml` are generated at build time. Set `NEXT_PUBLIC_SITE_URL` in production to your public origin (for example `https://your-domain.com`) so metadata and the sitemap use the correct host.

---

## 🧱 Tech stack

| Layer         | Details                                                                                                                                                                    |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router)                                                                                                                             |
| **UI**        | [React](https://react.dev/) 19, [Tailwind CSS](https://tailwindcss.com/) 4                                                                                                 |
| **Content**   | [react-markdown](https://github.com/remarkjs/react-markdown), [rehype-slug](https://github.com/rehypejs/rehype-slug), [remark-gfm](https://github.com/remarkjs/remark-gfm) |
| **Tooling**   | TypeScript, ESLint (`eslint-config-next`)                                                                                                                                  |

**Not in this repo:** the Grít **CLI** (Go, SQLite, git hooks) — see [github.com/alchemistreturns/grit](https://github.com/alchemistreturns/grit).

---

## 🚀 Getting started

### Prerequisites

- **Node.js** 20+ (or the version you standardize on for this repo)
- **npm** (comes with Node)

### Run locally

```bash
git clone https://github.com/rawadhossain/grit-cli.git
npm install
npm run dev
```

- **App:** [http://localhost:3000](http://localhost:3000)
- **Docs:** [http://localhost:3000/docs](http://localhost:3000/docs)

### Production build

```bash
npm run build
npm start
```

### 📜 Scripts

| Script              | Command         |
| :------------------ | :-------------- |
| Development         | `npm run dev`   |
| Production build    | `npm run build` |
| Start (after build) | `npm start`     |
| Lint                | `npm run lint`  |

---

## 📝 Content and documentation

| What                          | Where                                                                                                                    |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Docs** (source for `/docs`) | [`src/content/docs.md`](./src/content/docs.md)                                                                           |
| **Home / marketing**          | [`src/content/homeContent.ts`](./src/content/homeContent.ts), [`src/components/home/`](./src/components/home/)           |
| **Docs page & sidebar**       | [`src/app/docs/page.tsx`](./src/app/docs/page.tsx), [`src/components/DocsSidebar.tsx`](./src/components/DocsSidebar.tsx) |
| **Heading slugs (TOC)**       | [`src/lib/slug.ts`](./src/lib/slug.ts)                                                                                   |
| **Global styles**             | [`src/app/globals.css`](./src/app/globals.css)                                                                           |
| **App shell & home**          | [`src/app/layout.tsx`](./src/app/layout.tsx), [`src/app/page.tsx`](./src/app/page.tsx)                                   |

When CLI-facing docs change, update **`docs.md`** here so the site remains the place users trust.

---

## 🛠️ CLI — separate repository

- **Install & use Grít** → [github.com/alchemistreturns/grit](https://github.com/alchemistreturns/grit).
- This website repo ships **only** the Next.js app: discovery, narrative, and documentation in the browser.

---

## 🚢 Deploy

1. Set **`NEXT_PUBLIC_SITE_URL`** to your production origin.
2. Run **`npm run build`** and serve with **`npm start`**, or use your host’s **Next.js** integration (Vercel, etc.).

---

<div align="center">
  <sub>grít — capture the thinking behind your code</sub>
</div>
