import { getCollection, type CollectionEntry } from 'astro:content';
import { readingTime, slugify } from './format';
import type { TemplateId } from './template-ids';

/**
 * Drafts (and blogs with "published": false) are visible in `npm run dev` so you can
 * preview them, but are removed from EVERY production output: pages, navigation,
 * search index, RSS feeds, and the sitemap. All of those read content through this file.
 */
const PROD = import.meta.env.PROD;
const hideDraft = (data: { draft?: boolean }) => PROD && data.draft === true;

export type Blog = {
  id: string;
  url: string;
  rssUrl: string;
  data: CollectionEntry<'blogs'>['data'];
};

export type Post = {
  entry: CollectionEntry<'posts'>;
  data: CollectionEntry<'posts'>['data'];
  blog: Blog;
  slug: string;
  url: string;
  template: TemplateId;
  isDraft: boolean;
  minutes: number;
};

const toBlog = (entry: CollectionEntry<'blogs'>): Blog => ({
  id: entry.id,
  url: `/blogs/${entry.id}/`,
  rssUrl: `/blogs/${entry.id}/rss.xml`,
  data: entry.data,
});

export async function getBlogs(): Promise<Blog[]> {
  const all = await getCollection('blogs', ({ data }) => !(PROD && !data.published));
  return all
    .map(toBlog)
    .sort((a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name));
}

export async function getPosts(): Promise<Post[]> {
  const [blogEntries, entries] = await Promise.all([
    getCollection('blogs'),
    getCollection('posts', ({ data }) => !hideDraft(data)),
  ]);
  const blogs = new Map(blogEntries.map((b) => [b.id, toBlog(b)]));
  const posts: Post[] = [];

  for (const entry of entries) {
    const [blogId, ...rest] = entry.id.split('/');
    const blog = blogs.get(blogId);
    if (!blog) {
      throw new Error(
        `Post "${entry.id}" is in the folder for blog "${blogId}", but src/content/blogs/${blogId}.json does not exist. Create the blog first (npm run new:blog).`,
      );
    }
    if (PROD && !blog.data.published) continue;
    const slug = rest.join('/');
    posts.push({
      entry,
      data: entry.data,
      blog,
      slug,
      url: `${blog.url}${slug}/`,
      template: entry.data.template ?? blog.data.template,
      isDraft: entry.data.draft,
      minutes: readingTime(entry.body),
    });
  }
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export const postsForBlog = (posts: Post[], blogId: string) => posts.filter((p) => p.blog.id === blogId);

export function featuredPost(blog: Blog, posts: Post[]): Post | undefined {
  const own = postsForBlog(posts, blog.id);
  return own.find((p) => p.slug === blog.data.featured) ?? own.find((p) => p.data.featured);
}

export function countBy(values: string[]): { label: string; slug: string; count: number }[] {
  const map = new Map<string, { label: string; slug: string; count: number }>();
  for (const label of values) {
    const slug = slugify(label);
    if (!slug) continue;
    const hit = map.get(slug);
    if (hit) hit.count++;
    else map.set(slug, { label, slug, count: 1 });
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

export async function getPapers() {
  const all = await getCollection('papers', ({ data }) => !hideDraft(data));
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !hideDraft(data));
  return all.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      (b.data.startDate?.getTime() ?? 0) - (a.data.startDate?.getTime() ?? 0),
  );
}

export async function getVideos() {
  const all = await getCollection('videos', ({ data }) => !hideDraft(data));
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getPages() {
  return getCollection('pages', ({ data }) => !hideDraft(data));
}

export const videoThumb = (v: CollectionEntry<'videos'>) =>
  v.data.thumbnail ?? `https://i.ytimg.com/vi/${v.data.youtubeId}/hqdefault.jpg`;
