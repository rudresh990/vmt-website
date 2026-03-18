export function generateBlogPosting(blog: any) {
  return {
    '@type': 'BlogPosting',
    '@id': `https://www.voidmatrixtech.com/blog/${blog.slug}#article`,
    headline: blog.title,
    description: blog.excerpt || blog.content.slice(0, 150),

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
