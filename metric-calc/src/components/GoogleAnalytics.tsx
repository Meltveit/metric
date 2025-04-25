'use client';

import { useEffect } from 'react';
import { pageview } from '../lib/firebase/gtag';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(url);
  }, [pathname, searchParams]);

  return <></>;
}