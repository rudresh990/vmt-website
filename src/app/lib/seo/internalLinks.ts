import prisma from '../../../../lib/prisma';
import * as cheerio from 'cheerio';

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export async function injectInternalLinks(content: string) {
  const tags = await prisma.tag.findMany({
    where: { status: 'APPROVED' },
  });

  const $ = cheerio.load(content);

  $('body *').each((_, el) => {
    $(el)
      .contents()
      .each((_, child) => {
        if (child.type !== 'text') return;

        let text = child.data || '';

        for (const tag of tags) {
          const safeTag = escapeRegex(tag.name);

          const regex = new RegExp(`\\b(${safeTag})\\b`, 'gi');

          text = text.replace(
            regex,
            (match) => `<a href="/tag/${tag.slug}" class="text-inherit">${match}</a>`,
          );
        }

        $(child).replaceWith(text);
      });
  });

  return $.html();
}
