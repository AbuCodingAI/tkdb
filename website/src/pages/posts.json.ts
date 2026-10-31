import { getPosts } from '../lib/content';
import { isoDate } from '../lib/format';

/** Small post index for the Saved page and pins. Uses the same filtered getter as every page, so drafts never leak. */
export async function GET() {
  const posts = await getPosts();
  const index = posts.map((p) => ({
    url: p.url,
    title: p.data.title,
    description: p.data.description,
    blog: p.blog.data.name,
    blogUrl: p.blog.url,
    accent: p.blog.data.accent,
    date: isoDate(p.data.pubDate),
    minutes: p.minutes,
  }));
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json' } });
}
