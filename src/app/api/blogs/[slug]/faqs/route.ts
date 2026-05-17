import prisma from '../../../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;

    const blog = await prisma.blog.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
      },
    });
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    const faqs = await prisma.blogFAQ.findMany({
      where: {
        blogId: blog.id,
      },
      include: {
        faq: true,
      },
      orderBy: {
        faq: {
          createdAt: 'desc',
        },
      },
    });
    return NextResponse.json(faqs);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
  }
}

export async function POST(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;

    const blog = await prisma.blog.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
      },
    });
    if (!blog) {
      console.log('blog not found');
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const body = await req.json();
    const question = body.question?.trim();
    const answer = body.answer?.trim();

    if (!question || !answer) {
      return NextResponse.json({ error: 'Question and answer are required.' }, { status: 400 });
    }
    // const faq = await prisma.fAQ.create({
    //   data: {
    //     question,
    //     answer,
    //   },
    // });

    // await prisma.blogFAQ.create({
    //   data: {
    //     blogId: blog.id,
    //     faqId: faq.id,
    //   },
    // });

    let faq = await prisma.fAQ.findFirst({
      where: {
        question: {
          equals: question,
          mode: 'insensitive',
        },
      },
    });

    if (!faq) {
      faq = await prisma.fAQ.create({
        data: {
          question,
          answer,
        },
      });
    }

    const existingRelation = await prisma.blogFAQ.findFirst({
      where: {
        blogId: blog.id,
        faqId: faq.id,
      },
    });

    if (!existingRelation) {
      await prisma.blogFAQ.create({
        data: {
          blogId: blog.id,
          faqId: faq.id,
        },
      });
    }

    return NextResponse.json(faq);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 });
  }
}
