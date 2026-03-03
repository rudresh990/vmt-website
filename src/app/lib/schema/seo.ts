interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export function buildMetada({ title, description, path }: SEOProps) {
  const baseUrl = 'https://www.voidmatrixtech.com';
  const url = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}/logo.png`;

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
      siteName: 'Void Matrix Technology',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: imageUrl,
          alt: 'Void Matrix Technology Logo',
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
