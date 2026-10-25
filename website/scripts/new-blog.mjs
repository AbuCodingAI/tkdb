#!/usr/bin/env node
// Usage: npm run new:blog -- "Blog Name" [template] ["Short description"]
// Creates src/content/blogs/<id>.json and src/content/posts/<id>/. Nothing else to edit.
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';

const TEMPLATES = ['article', 'research', 'tutorial', 'journal'];
const [name, template = 'article', description = 'Describe this blog in one sentence.'] = process.argv.slice(2);
if (!name) {
  console.error('Usage: npm run new:blog -- "Blog Name" [article|research|tutorial|journal] ["Description"]');
  process.exit(1);
}
if (!TEMPLATES.includes(template)) {
  console.error(`Unknown template "${template}". Choose one of: ${TEMPLATES.join(', ')}`);
  process.exit(1);
}
const id = name.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const file = `src/content/blogs/${id}.json`;
if (existsSync(file)) {
  console.error(`${file} already exists.`);
  process.exit(1);
}
const palette = ['#d9480f', '#1c7ed6', '#2f9e44', '#9c36b5', '#e67700', '#0c8599'];
const accent = palette[Math.floor(Math.random() * palette.length)];
writeFileSync(file, JSON.stringify({ name, description, accent, template, categories: [], order: 100 }, null, 2) + '\n');
mkdirSync(`src/content/posts/${id}`, { recursive: true });
console.log(`Created ${file} and src/content/posts/${id}/`);
console.log(`Next: npm run new:post -- ${id} "My first post"`);
