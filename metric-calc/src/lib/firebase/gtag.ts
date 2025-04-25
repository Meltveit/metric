export const pageview = (url: string) => {
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        'event': 'pageview',
        'page_path': url,
      });
    } else {
      console.warn("Google Tag Manager's dataLayer is not defined. Ensure gtag.js is properly installed.");
    }
  };
  
  // Example: Event tracking
  export const event = ({ action, category, label, value }: GtagEventArgs) => {
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        'event': 'gtag_event',
        'event_action': action,
        'event_category': category,
        'event_label': label,
        'event_value': value,
      });
    } else {
      console.warn("Google Tag Manager's dataLayer is not defined. Ensure gtag.js is properly installed.");
    }
  };
  
  interface GtagEventArgs {
    action: string;
    category: string;
    label?: string;
    value?: number;
  }