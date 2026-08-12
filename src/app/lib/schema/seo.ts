interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({ title, description, path }: SEOProps) {
  const baseUrl = 'https://www.voidmatrixtech.com';
  const url = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}/logo.png`;
  if (title.length > 136) {
    title = title.replace(/\s*\|\s*VMT/i, '');
  } else {
    title = title.replace(/\s*\|\s*VoidMatrix Technology/i, '');
  }

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'VoidMatrix Technology',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: imageUrl,
          alt: 'VoidMatrix Technology Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
