import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getBlogs, getPosts, postsForBlog } from '../../../lib/content';

export async function getStaticPaths() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ params: { blog: blog.id }, props: { blog } }));
}

export async function GET(context: APIContext) {
  const { blog } = context.props as { blog: Awaited<ReturnType<typeof getBlogs>>[number] };
  const posts = postsForBlog(await getPosts(), blog.id);
  return rss({
    title: `${blog.data.name} — TKDB`,
    description: blog.data.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: p.url,
      categories: p.data.tags,
    })),
  });
}
