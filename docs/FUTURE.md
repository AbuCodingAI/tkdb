# Future extensions (not implemented)

Everything below is **prepared for, not built**. No ads, analytics, comments or automation run today.

## Automated content submissions (research agents → human approval)

- Agents would write Markdown files into `website/src/content/posts/<blog>/` on a **separate branch or pull request**, never directly on `main`.
- Every submitted file must use `draft: true` and may include the reserved `review` block:

  ```yaml
  review:
    status: pending      # pending | approved | rejected
    source: agent        # human | agent
    agent: research-agent-1
    notes: "Sources to verify: ..."
  ```
- A human reviews the preview, checks the sources, then flips `draft: false` and merges. Because drafts are stripped from production, an unreviewed submission can never go live.
- Suggested checks to add later: front-matter validation in CI, a link checker, and a rule that agent posts must list `sources`.

## Ads (AdSense)

`SITE.integrations.adsense` in `src/config.ts` is `enabled: false`. To activate later: add the script in `BaseHead.astro` behind that flag, add a consent step if required for your audience, and update `/privacy`.

## Analytics

`SITE.integrations.analytics` is disabled. Prefer a privacy-friendly option (Cloudflare Web Analytics or Plausible). Update `/privacy` when enabled.

## Comments

`SITE.integrations.comments` is disabled. Candidates: Giscus (GitHub Discussions). Load it only on post pages.

## More blog types and a custom domain

- New article layouts: add a file in `src/layouts/templates/` and register it.
- Custom domain: add it in Cloudflare Pages and set `SITE_URL`.
