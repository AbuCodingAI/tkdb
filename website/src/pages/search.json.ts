import { getBlogs, getPosts, getPapers, getProjects, getVideos } from '../lib/content';

/** Static search index. Built from the same filtered getters as every page, so drafts never leak. */
export async function GET() {
  const [blogs, posts, papers, projects, videos] = await Promise.all([getBlogs(), getPosts(), getPapers(), getProjects(), getVideos()]);
  const index = [
    ...blogs.map((b) => ({ type: 'Blog', title: b.data.name, description: b.data.description, url: b.url, tags: b.data.categories })),
    ...posts.map((p) => ({ type: 'Post', title: p.data.title, description: p.data.description, url: p.url, tags: [p.blog.data.name, ...p.data.tags, ...(p.data.category ? [p.data.category] : [])] })),
    ...papers.map((p) => ({ type: 'Paper', title: p.data.title, description: p.data.abstract, url: `/papers/${p.id}/`, tags: [...p.data.authors, ...p.data.tags] })),
    ...projects.map((p) => ({ type: 'Project', title: p.data.title, description: p.data.description, url: `/projects/${p.id}/`, tags: [...p.data.languages, ...p.data.tags] })),
    ...videos.map((v) => ({ type: 'Video', title: v.data.title, description: v.data.description, url: `/videos/${v.id}/`, tags: v.data.tags })),
  ];
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json' } });
}
