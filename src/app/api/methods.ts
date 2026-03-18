export function slugify(slug: string) {
  return slug
    .trim()
    .toLocaleLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');
}
