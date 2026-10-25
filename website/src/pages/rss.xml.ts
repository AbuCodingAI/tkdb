import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../config';
import { getPosts } from '../lib/content';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.fullName,
    description: SITE.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: `${p.data.title} (${p.blog.data.name})`,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: p.url,
      categories: p.data.tags,
    })),
  });
}
