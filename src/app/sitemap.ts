import type { MetadataRoute } from 'next';
import { serviceData } from '@/app/lib/schema/data/services_data';
import prisma from '../../lib/prisma';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.voidmatrixtech.com';
  const lastModified = new Date();

  // -----------------------
  // STATIC PAGES
  // -----------------------
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    {
      url: `${baseUrl}/software-development-cost-estimator`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    { url: `${baseUrl}/platforms`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/company`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },

    // legal
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/security`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/cookies`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/accessibility`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // -----------------------
  // SERVICE PAGES
  // -----------------------
  const servicePages: MetadataRoute.Sitemap = Object.keys(serviceData).map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // -----------------------
  // BLOG PAGES
  // -----------------------
  const blogs = await prisma.blog.findMany({
    where: { status: 'PUBLISHED' },
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // -----------------------
  // TAG PAGES
  // -----------------------
  const tags = await prisma.tag.findMany({
    where: { status: 'APPROVED' },
    select: {
      slug: true,
      createdAt: true,
    },
  });

  const tagPages: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${baseUrl}/tag/${tag.slug}`,
    lastModified: tag.createdAt || lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // -----------------------
  // CATEGORY PAGES
  // -----------------------
  const categories = await prisma.category.findMany({
    where: { status: 'APPROVED' },
    select: {
      slug: true,
      createdAt: true,
    },
  });

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: cat.createdAt || lastModified,
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  // -----------------------
  // FINAL
  // -----------------------
  return [...staticPages, ...servicePages, ...blogPages, ...tagPages, ...categoryPages];
}
