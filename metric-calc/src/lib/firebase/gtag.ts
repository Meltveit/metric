'use client';

// Initialize dataLayer if it doesn't exist
const initDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

export const pageview = (url: string) => {
  initDataLayer();
  window.dataLayer.push({
    'event': 'pageview',
    'page_path': url,
  });
};

// Event tracking
export const event = ({ action, category, label, value }: GtagEventArgs) => {
  initDataLayer();
  window.dataLayer.push({
    'event': 'gtag_event',
    'event_action': action,
    'event_category': category,
    'event_label': label,
    'event_value': value,
  });
};

interface GtagEventArgs {
  action: string;
  category: string;
  label?: string;
  value?: number;
}