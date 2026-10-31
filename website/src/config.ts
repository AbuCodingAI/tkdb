/**
 * Central site settings. Edit this file to change branding, navigation,
 * author placeholders, and to switch future integrations on.
 */
export const SITE = {
  name: 'TKDB',
  fullName: 'TKDB — The Kernel Daily Blog',
  tagline: 'Analyzing the kernels of today.',
  description:
    'TKDB is an independent technology publishing platform: multiple blogs, original papers, engineering projects, and videos in one place.',
  url: (import.meta.env.SITE as string | undefined) ?? 'https://tkdb.pages.dev',
  locale: 'en-US',

  /** EDIT: placeholder creator details used on the About page, bylines and structured data. */
  author: {
    name: 'Abu',
    bio: 'Linux user and builder (Ubuntu since March, Arch since last month). Writes the Linux Internals blog. The daily news articles on TKDB are fully AI generated.',
    email: '',
    links: {
      github: '',
      youtube: '',
      x: '',
    } as Record<string, string>,
  },

  nav: [
    { label: 'Blogs', href: '/blogs/' },
    { label: 'Papers', href: '/papers/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Videos', href: '/videos/' },
    { label: 'About', href: '/about/' },
  ],

  /**
   * Future integrations. Everything is OFF. Nothing is loaded or collected until
   * you enable it AND wire it up in src/components/BaseHead.astro (see docs/FUTURE.md).
   */
  integrations: {
    analytics: { enabled: false, provider: '' as '' | 'cloudflare' | 'plausible', siteId: '' },
    adsense: { enabled: false, clientId: '' },
    comments: { enabled: false, provider: '' },
  },
} as const;
