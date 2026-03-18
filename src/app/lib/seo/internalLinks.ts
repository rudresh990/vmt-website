import prisma from '../../../../lib/prisma';

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export async function injectInternalLinks(content: string) {
  const tags = await prisma.tag.findMany({
    where: { status: 'APPROVED' },
  });

  let updated = content;

  for (const tag of tags) {
    const safeTag = escapeRegex(tag.name);

    // simple word match
    const regex = new RegExp(`\\b(${safeTag})\\b`, 'i');

    updated = updated.replace(regex, `<a href="/tag/${tag.slug}" class="internal-link">$1</a>`);
  }

  return updated;
}
