export function generateBlogPosting(blog: any) {
  const plainContent = blog.content
    ?.replace(/<[^>]*>/g, ' ')
    ?.replace(/\s+/g, ' ')
    ?.trim();
  return {
    '@type': 'BlogPosting',
    '@id': `https://www.voidmatrixtech.com/blog/${blog.slug}#article`,
    headline: blog.title,
    description: blog.excerpt || plainContent?.slice(0, 150),

    author: {
      '@type': 'Person',
      name: blog.author?.name || 'Unknown',
    },

    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.voidmatrixtech.com/#organization',
    },

    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.voidmatrixtech.com/blog/${blog.slug}`,
    },
  };
}
