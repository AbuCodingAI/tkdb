# TKDB — The Kernel Daily Blog

*Analyzing the kernels of today.*

A static multi-blog publishing platform and portfolio built with **Astro + TypeScript**, deployed to **Cloudflare Pages**. The Astro app lives in [`website/`](website/).

## Local preview

Requires Node.js 22.23 or newer (24 recommended; see `website/.node-version`).

```bash
cd website
npm install
npm run dev        # http://localhost:4321 (drafts are visible here, labelled "Draft")
npm run build      # production build into website/dist (drafts removed)
npm run preview    # serve the production build locally
npm run check      # type-check Astro/TypeScript
```

## Create a new blog

No routing or layout changes are needed.

```bash
npm run new:blog -- "Space Weather" research "Notes on the Sun and its effects."
```

This creates `src/content/blogs/space-weather.json` and `src/content/posts/space-weather/`. Edit the JSON to set the cover image (`/images/covers/...` in `public/`), accent colour, categories, optional `author` byline and a `featured` post slug. The blog gets its own page at `/blogs/space-weather/`, tag and category pages, and its own feed at `/blogs/space-weather/rss.xml`.

**Templates** (`template` in the blog JSON, or per post): `article`, `research`, `tutorial`, `journal`. To add another, create `src/layouts/templates/<Name>.astro`, add its id to `src/lib/template-ids.ts` and register it in `src/lib/templates.ts`.

## Publish a post

```bash
npm run new:post -- space-weather "My first post"
```

1. Edit `src/content/posts/space-weather/my-first-post.md`.
2. Preview with `npm run dev`.
3. Set `draft: false` (or remove the line) and commit.

`draft: true` posts, and blogs with `"published": false`, appear only in `npm run dev`. They are excluded from production pages, navigation, search, RSS, the sitemap and public assets.

Posts, papers, projects, videos and general pages all live under `src/content/`. Files whose names start with `_` are ignored (use them as templates). **Demo content** is marked `demo: true` and shows a "Demo" badge. Delete it when you have real posts.

## Deploy to Cloudflare Pages

Do this only when you are ready to publish.

1. Put the project in a Git repository (`main` branch) and push it to GitHub or GitLab.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, and pick the repository.
3. Settings:
   - Project name: `tkdb` (gives `tkdb.pages.dev`)
   - Production branch: `main`
   - Framework preset: Astro
   - Root directory: `website`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `24`
4. Save and deploy. Optional: set `SITE_URL` to your custom domain (for example `https://tkdb.example`) so canonical links, the sitemap and RSS use it, and add the domain under **Custom domains**.

## Future plans

See [`docs/FUTURE.md`](docs/FUTURE.md) for how automated drafting, human approval, ads, analytics and comments are meant to be added later. None of it is active.
