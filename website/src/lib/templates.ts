import Article from '../layouts/templates/Article.astro';
import Research from '../layouts/templates/Research.astro';
import Tutorial from '../layouts/templates/Tutorial.astro';
import Journal from '../layouts/templates/Journal.astro';
import type { TemplateId } from './template-ids';

/** Maps a template id (used in blog JSON / post frontmatter) to its layout component. */
export const templates: Record<TemplateId, typeof Article> = {
  article: Article,
  research: Research,
  tutorial: Tutorial,
  journal: Journal,
};
