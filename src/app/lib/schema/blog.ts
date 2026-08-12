import { SITE_URL } from './config';

export function generateBlogPosting(blog: any) {
  const plainContent = blog.content
    ?.replace(/<[^>]*>/g, ' ')
    ?.replace(/\s+/g, ' ')
    ?.trim();

  const pageUrl = `${SITE_URL}/blog/${blog.slug}`;

  return {
    '@type': 'BlogPosting',

    '@id': `${pageUrl}#article`,

    url: pageUrl,

    headline: blog.title,

    description: blog.excerpt || plainContent?.slice(0, 150),

    inLanguage: 'en-IN',

    image: {
      '@type': 'ImageObject',
      url: blog.coverImage || `${SITE_URL}/og/default-blog.jpg`,
    },

    author: {
      '@type': 'Person',

      '@id': `${SITE_URL}#author-${blog.author?.slug || 'admin'}`,

      name: blog.author?.name || 'VoidMatrix Technology',
    },

    publisher: {
      '@type': 'Organization',

      '@id': `${SITE_URL}#organization`,

      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },

    mainEntityOfPage: {
      '@type': 'WebPage',

      '@id': `${pageUrl}#webpage`,
    },

    isPartOf: {
      '@id': `${SITE_URL}#website`,
    },

    about: {
      '@id': `${SITE_URL}#organization`,
    },

    datePublished: blog.publishedAt || blog.createdAt,

    ...(blog.updatedAt && {
      dateModified: blog.updatedAt,
    }),

    keywords: blog.tags?.map((tagItem: any) => tagItem.tag?.name).filter(Boolean) || [],

    articleSection: blog.category || 'Technology',

    wordCount: plainContent?.split(/\s+/).length || 0,

    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['article'],
    },
  };
}
