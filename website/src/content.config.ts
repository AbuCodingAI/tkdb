import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TEMPLATE_IDS } from './lib/template-ids';

const template = z.enum(TEMPLATE_IDS);

/** One JSON file per blog: src/content/blogs/<blog-id>.json (the file name is the URL). */
const blogs = defineCollection({
  loader: glob({ pattern: '[^_]*.json', base: './src/content/blogs' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tagline: z.string().optional(),
    cover: z.string().optional(), // path under /public, e.g. /images/covers/linux.svg
    coverAlt: z.string().default(''),
    accent: z.string().regex(/^#[0-9a-fA-F]{6}$/).default('#d9480f'),
    template, // default article template for this blog
    author: z.string().optional(), // optional byline
    featured: z.string().optional(), // slug of the featured post
    categories: z.array(z.string()).default([]),
    order: z.number().default(100),
    published: z.boolean().default(true), // false hides the whole blog in production
    demo: z.boolean().default(false),
  }),
});

/** Posts live in src/content/posts/<blog-id>/<slug>.md|mdx. The folder decides the blog. */
const posts = defineCollection({
  loader: glob({ pattern: '*/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().default(''),
    template: template.optional(), // overrides the blog's default template
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    demo: z.boolean().default(false),
    // Template-specific optional fields
    abstract: z.string().optional(), // research
    sources: z.array(z.object({ title: z.string(), url: z.string() })).default([]), // research
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(), // tutorial
    prerequisites: z.array(z.string()).default([]), // tutorial
    mood: z.string().optional(), // journal
    // Reserved for future automated submissions + human approval (see docs/FUTURE.md)
    review: z
      .object({
        status: z.enum(['pending', 'approved', 'rejected']).default('pending'),
        source: z.enum(['human', 'agent']).default('human'),
        agent: z.string().optional(),
        notes: z.string().optional(),
      })
      .optional(),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: '[^_]*.{md,mdx}', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    abstract: z.string(),
    pubDate: z.coerce.date(),
    status: z.enum(['draft', 'preprint', 'published']).default('preprint'),
    venue: z.string().optional(),
    doi: z.string().optional(),
    pdf: z.string().optional(), // /papers/file.pdf (in /public/papers) or a full URL
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['idea', 'in-development', 'active', 'maintained', 'archived']).default('in-development'),
    languages: z.array(z.string()).default([]),
    github: z.string().optional(),
    docs: z.string().optional(),
    demo: z.string().optional(),
    cover: z.string().optional(),
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() }))
      .default([]),
    tags: z.array(z.string()).default([]),
    startDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '[^_]*.{md,mdx}', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    youtubeId: z.string(),
    pubDate: z.coerce.date(),
    thumbnail: z.string().optional(), // defaults to the YouTube thumbnail
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/** General pages (About, Contact, Privacy). The file name is the URL: about.md → /about/ */
const pages = defineCollection({
  loader: glob({ pattern: '[^_]*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blogs, posts, papers, projects, videos, pages };
