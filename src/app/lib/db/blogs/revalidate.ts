import { revalidatePath } from 'next/cache';

export async function revalidateBlogPaths({
  slug,
  categorySlug,
  tagSlugs,
}: {
  slug: string;
  categorySlug?: string;
  tagSlugs?: string[];
}) {
  // blog page
  revalidatePath(`/blog/${slug}`);

  //Blog Listing
  revalidatePath('/blog');

  //category page
  if (categorySlug) {
    revalidatePath(`/category/${categorySlug}`);
  }
  // tag pages
  if (tagSlugs && tagSlugs?.length > 0) {
    for (const tag of tagSlugs) {
      revalidatePath(`/tag/${tag}`);
    }
  }
}
