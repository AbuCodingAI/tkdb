#!/usr/bin/env node
// Usage: npm run new:post -- <blog-id> "Post title"
// Creates a DRAFT post. Set draft: false (or delete the line) to publish.
import { writeFileSync, existsSync } from 'node:fs';

const [blog, title] = process.argv.slice(2);
if (!blog || !title) {
  console.error('Usage: npm run new:post -- <blog-id> "Post title"');
  process.exit(1);
}
if (!existsSync(`src/content/blogs/${blog}.json`)) {
  console.error(`Blog "${blog}" not found. Create it first: npm run new:blog -- "Name"`);
  process.exit(1);
}
const slug = title.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const file = `src/content/posts/${blog}/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists.`);
  process.exit(1);
}
const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  file,
  `---\ntitle: ${JSON.stringify(title)}\ndescription: "One or two sentences for cards, search and social previews."\npubDate: ${today}\ntags: []\ndraft: true\n---\n\nWrite your post here.\n`,
);
console.log(`Created ${file} (draft). Preview with npm run dev. Publish by setting draft: false.`);
