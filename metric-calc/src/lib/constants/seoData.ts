import { MetaTagsProps } from '@/components/layout/MetaTags';
import { generateConverterStructuredData, generateFaqStructuredData } from '@/components/layout/MetaTags';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metriccalc.com';

export function getVolumeMassSeoData(): MetaTagsProps {
  return {
    title: 'Volume and Mass Converter',
    description: 'Convert between volume units (liters, gallons, ml) and mass units (kg, pounds, ounces) quickly and accurately with our free online calculator.',
    keywords: [
      'volume converter', 'mass converter', 'weight converter', 
      'liters to gallons', 'kg to pounds', 'ml to oz', 
      'unit conversion', 'volume units', 'mass units'
    ],
    canonicalUrl: `${baseUrl}/volume-mass`,
    ogImage: '/images/og-volume-mass.jpg',
    structuredData: generateConverterStructuredData(
      'Volume and Mass Unit Converter',
      'Convert between volume units (liters, gallons, ml) and mass units (kg, pounds, ounces).',
      `${baseUrl}/volume-mass`
    )
  };
}

export function getLengthAreaSeoData(): MetaTagsProps {
  return {
    title: 'Length and Area Converter',
    description: 'Convert between length units (meters, feet, inches) and area units (square meters, acres, hectares) quickly and accurately with our free calculator.',
    keywords: [
      'length converter', 'area converter', 'distance converter', 
      'meters to feet', 'square meters to acres', 'feet to meters', 
      'convert length', 'convert area', 'metric to imperial'
    ],
    canonicalUrl: `${baseUrl}/length-area`,
    ogImage: '/images/og-length-area.jpg',
    structuredData: generateConverterStructuredData(
      'Length and Area Unit Converter',
      'Convert between length units (meters, feet, inches) and area units (square meters, acres, hectares).',
      `${baseUrl}/length-area`
    )
  };
}

export function getTemperatureSeoData(): MetaTagsProps {
  return {
    title: 'Temperature Converter',
    description: 'Convert between Celsius, Fahrenheit, Kelvin, and more temperature units with our free online calculator. Get instant and accurate results.',
    keywords: [
      'temperature converter', 'celsius to fahrenheit', 'fahrenheit to celsius', 
      'kelvin to celsius', 'fahrenheit to kelvin', 'temperature calculator',
      'convert temperature', 'temperature conversion', 'temperature scales'
    ],
    canonicalUrl: `${baseUrl}/temperature`,
    ogImage: '/images/og-temperature.jpg',
    structuredData: generateConverterStructuredData(
      'Temperature Unit Converter',
      'Convert between Celsius, Fahrenheit, Kelvin, Rankine, and Réaumur temperature scales.',
      `${baseUrl}/temperature`
    )
  };
}

export function getDataStorageSeoData(): MetaTagsProps {
  return {
    title: 'Data Storage Unit Converter',
    description: 'Convert between bytes, kilobytes, megabytes, gigabytes and more. Free online calculator for data storage units with instant results.',
    keywords: [
      'data storage converter', 'byte converter', 'megabyte to gigabyte', 
      'kb to mb', 'data unit calculator', 'file size converter',
      'convert bytes', 'digital storage units', 'binary conversion'
    ],
    canonicalUrl: `${baseUrl}/data-storage`,
    ogImage: '/images/og-data-storage.jpg',
    structuredData: generateConverterStructuredData(
      'Data Storage Unit Converter',
      'Convert between bytes, kilobytes, megabytes, gigabytes and more.',
      `${baseUrl}/data-storage`
    )
  };
}

export function getDensitySeoData(): MetaTagsProps {
  return {
    title: 'Density Calculator and Converter',
    description: 'Calculate and convert density between different units. Convert between kg/m³, g/cm³, lb/ft³ and more with our free online calculator.',
    keywords: [
      'density calculator', 'density converter', 'kg/m³ to g/cm³', 
      'g/cm³ to kg/m³', 'lb/ft³ converter', 'specific gravity',
      'calculate density', 'material density', 'substance density'
    ],
    canonicalUrl: `${baseUrl}/density`,
    ogImage: '/images/og-density.jpg',
    structuredData: generateConverterStructuredData(
      'Density Calculator and Converter',
      'Calculate and convert density between different units like kg/m³, g/cm³, and lb/ft³.',
      `${baseUrl}/density`
    )
  };
}

export function getMixturesSeoData(): MetaTagsProps {
  return {
    title: 'Mixture Ratio Calculator',
    description: 'Calculate mixture ratios, proportions, and dilutions with our free online calculator. Perfect for cooking, chemistry, construction, and more.',
    keywords: [
      'mixture ratio calculator', 'proportion calculator', 'dilution calculator', 
      'ratio converter', 'mixing ratio', 'part to part ratio',
      'concentration calculator', 'solution dilution', 'mixture proportions'
    ],
    canonicalUrl: `${baseUrl}/mixtures`,
    ogImage: '/images/og-mixtures.jpg',
    structuredData: generateConverterStructuredData(
      'Mixture Ratio Calculator',
      'Calculate mixture ratios, proportions, and dilutions for various applications.',
      `${baseUrl}/mixtures`
    )
  };
}

// Structured data for Home page
export const homePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'MetricCalc - Unit Conversion Made Easy',
  'url': baseUrl,
  'potentialAction': {
    '@type': 'SearchAction',
    'target': `${baseUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  },
  'description': 'Convert between different units of measurement quickly and accurately. Volume, length, weight, temperature and more.',
  'publisher': {
    '@type': 'Organization',
    'name': 'MetricCalc',
    'logo': {
      '@type': 'ImageObject',
      'url': `${baseUrl}/logo.png`
    }
  }
};

// Common FAQs for converter pages
export const commonConversionFaqs = [
  {
    question: 'Are the conversions accurate?',
    answer: 'Yes, our converters use precise conversion factors and mathematical formulas to ensure accuracy. For most practical applications, the results will be more than sufficient.'
  },
  {
    question: 'Can I use these converters offline?',
    answer: 'Yes, once you\'ve loaded the page, our converters work entirely in your browser and don\'t require an internet connection to perform conversions.'
  },
  {
    question: 'How many decimal places are shown in the results?',
    answer: 'The converter automatically adjusts decimal places based on the magnitude of the result, showing more decimals for smaller values and fewer for larger values to maintain readability while preserving precision.'
  },
  {
    question: 'Why are there both decimal and binary units for data storage?',
    answer: 'There are two standards: the decimal (SI) system uses powers of 10 (1KB = 1,000 bytes), while the binary (IEC) system uses powers of 2 (1KiB = 1,024 bytes). Storage manufacturers typically use decimal units, while operating systems often use binary units.'
  }
];