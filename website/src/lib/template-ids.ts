/**
 * Article templates. To add one: create src/layouts/templates/<Name>.astro and
 * register it here and in src/lib/templates.ts. No routing changes needed.
 */
export const TEMPLATE_IDS = ['article', 'research', 'tutorial', 'journal'] as const;
export type TemplateId = (typeof TEMPLATE_IDS)[number];
