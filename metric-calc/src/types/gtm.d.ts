// This file extends the Window interface to include Google Tag Manager properties

interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }