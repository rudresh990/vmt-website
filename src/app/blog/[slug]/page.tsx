import { notFound } from 'next/navigation';
import prisma from '../../../../lib/prisma';
import { injectInternalLinks } from '@/app/lib/seo/internalLinks';
import Link from 'next/link';
import ViewTracker from './viewTracker';
import TrendingSidebar from '@/components/blog/trendingSidebar';
import RelatedPosts from '@/components/blog/relatedPosts';
import { cache } from 'react';
import { schemaFactory } from '@/app/lib/schema/schemaFactory';

export const revalidate = 360;
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
    },
  });
  return blog;
});
export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return { title: 'Not Found' };
  }
  return {
    title: blog.title,
    description: blog.content.slice(0, 150),

    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 150),
      url: `https://voidmatrixtech.com/blog/${blog.slug}`,
      type: 'article',
    },
  };
}
export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return notFound();
  const schema = schemaFactory(`/blog/${blog?.slug}`, { blog });
  const contentWithLinks = (await injectInternalLinks(blog.content)) || '';
  return (
    <div className="container mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        id="blog-schema"
      />
      <ViewTracker blogId={blog.id} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* main content */}
        <div className="col-span-1 lg:col-span-3 w-full text-center">
          <h1 className="main-headings mb-4">{blog.title}</h1>
          <p className="text-center text-(--text-muted) mb-4">
            {blog.author?.name} • {new Date(blog.publishedAt!).toDateString()} •{' '}
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
            className="prose prose-invert max-w-none wrap-break-word overflow-hidden"
            dangerouslySetInnerHTML={{ __html: contentWithLinks }}
          />
        </div>
        <div className="w-full">
          <TrendingSidebar />
        </div>
        {/* CATEGORY */}
        {/* WRAPPER */}
        <div className="mb-6 text-center md:col-span-3">
          {/* CATEGORY (centered) */}
          <div className="flex justify-center mb-3">
            <Link
              href={`/category/${blog.category?.slug}`}
              className="text-xs px-3 py-1 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition"
            >
              {blog.category?.name}
            </Link>
          </div>

          {/* TAGS (centered below) */}
          <div className="flex flex-wrap justify-center gap-2">
            {blog.tags.map((t: any) => (
              <Link
                key={t.tag.slug}
                href={`/tag/${t.tag.slug}`}
                className="text-xs px-2 py-1 border border-gray-600 rounded hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                #{t.tag.name}
              </Link>
            ))}
          </div>
        </div>
        <RelatedPosts blogId={blog.id} />
      </div>
    </div>
  );
}
