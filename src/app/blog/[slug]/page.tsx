import { cache } from 'react';
import { notFound } from 'next/navigation';
import prisma from '../../../../lib/prisma';
import { injectInternalLinks } from '@/app/lib/seo/internalLinks';
import Link from 'next/link';
import ViewTracker from './viewTracker';
import TrendingSidebar from '@/components/blog/trendingSidebar';
import RelatedPosts from '@/components/blog/relatedPosts';
import { schemaFactory } from '@/app/lib/schema/schemaFactory';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import BlogHero from '@/components/blog/bloghero';
import ReadingProgress from '@/components/blog/progress';

export const revalidate = 60;
const getBlog = cache(async (slug: string) => {
  const blog = await prisma.blog.findUnique({
    where: {
      slug,
    },
    include: {
      tags: {
        select: { tag: true },
      },
      category: {
        select: { name: true, slug: true },
      },
      author: {
        select: { name: true },
      },
      faqs: {
        include: {
          faq: {
            select: {
              id: true,
              question: true,
              answer: true,
            },
          },
        },
      },
    },
  });
  return blog;
});
export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  const plainContent = blog?.content
    ?.replace(/<[^>]*>/g, ' ')
    ?.replace(/\s+/g, ' ')
    ?.trim();

  if (!blog) {
    return { title: 'Not Found' };
  }
  return {
    title: blog.title,
    description: plainContent?.slice(0, 150),

    alternates: {
      canonical: `https://www.voidmatrixtech.com/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: plainContent?.slice(0, 150),
      url: `https://www.voidmatrixtech.com/blog/${blog.slug}`,
      siteName: 'VoidMatrix Technology',
      type: 'article',
      locale: 'en_IN',
      images: [
        {
          url: 'https://www.voidmatrixtech.com/logo.png',
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: plainContent?.slice(0, 150),
      images: ['https://www.voidmatrixtech.com/logo.png'],
    },
  };
}
export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return notFound();
  const schema = schemaFactory(`/blog/${blog?.slug}`, { blog });
  const contentWithLinks = (await injectInternalLinks(blog.content)) || '';
  const normalizedFaqs = blog.faqs.map((item) => ({
    id: item.faq.id,
    q: item.faq.question,
    a: item.faq.answer,
  }));
  return (
    <>
    <ReadingProgress/>
    <div className="container mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        id="blog-schema"
      />
      <ViewTracker blogId={blog.id} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* main content */}
        <div className="col-span-1 lg:col-span-3 w-full p-4">
          <h1 className="main-headings mb-4">{blog.title}</h1>
          <p className="text-center text-(--text-muted) mb-4 capitalize">
            {blog.author?.name} • {new Date(blog.publishedAt!).toDateString()}{' '}
            {blog.category && (
              <Link
                key={blog.categoryId}
                href={`/category/${blog.category?.slug}`}
                className="internal-link"
              >
                {blog.category?.name}
              </Link>
            )}
          </p>
          <div
            className="relative prose prose-invert max-w-none wrap-break-word overflow-hidden"
            dangerouslySetInnerHTML={{ __html: contentWithLinks }}
          />
          <div className="flex  flex-wrap gap-3 justify-center items-center mt-4 w-full">
            {blog.tags.map(({ tag }) => (
              <Link
                href={`/tag/${tag.slug}`}
                key={tag.slug}
                className="block p-3 border border-gray-700 rounded-2xl hover:bg-gray-800 transition"
              >
                <p key={tag.slug}>#{tag.name}</p>
              </Link>
            ))}
          </div>
          {!!blog.faqs.length && (
            <div className="w-full">
              <MainServiceFAQ
                heading="Frequently Asked Questions"
                faqs={normalizedFaqs}
                sectionClassName="w-full mt-8"
              />
            </div>
          )}
        </div>
        <div className="w-full">
          <TrendingSidebar />
        </div>
        {/* CATEGORY */}
        {/* WRAPPER */}
      </div>
      <RelatedPosts blogId={blog.id} />
    </div>

    </>
  );
}
