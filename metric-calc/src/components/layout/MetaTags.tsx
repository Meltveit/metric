import { Metadata } from 'next';

export interface MetaTagsProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>; // Fixed: Changed 'any' to 'unknown'
}

export function generateMetadata({ 
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/images/og-default.jpg",
  structuredData
}: MetaTagsProps): Metadata {
  
  // Base metadata
  const metadata: Metadata = {
    title: `${title} | MetricCalc - Easy Unit Converter`,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | MetricCalc`,
      description,
      url: canonicalUrl,
      siteName: 'MetricCalc',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | MetricCalc`,
      description,
      images: [ogImage],
    }
  };
  
  // Add JSON-LD structured data if provided
  if (structuredData) {
    metadata.other = {
      'application/ld+json': JSON.stringify(structuredData)
    };
  }
  
  return metadata;
}

// Helper function to generate structured data for converter tools
export function generateConverterStructuredData(
  name: string,
  description: string,
  url: string
): Record<string, unknown> { // Fixed: Changed 'any' to 'unknown'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': name,
    'description': description,
    'applicationCategory': 'UtilityApplication',
    'operatingSystem': 'Any',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'url': url
  };
}

// Helper function to generate FAQ structured data
export function generateFaqStructuredData(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> { // Fixed: Changed 'any' to 'unknown'
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

// Helper function to generate breadcrumb structured data
export function generateBreadcrumbStructuredData(
  items: { name: string; url: string }[]
): Record<string, unknown> { // Fixed: Changed 'any' to 'unknown'
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}