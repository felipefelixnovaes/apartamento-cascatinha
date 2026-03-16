// ============================================================
// Google Analytics 4 — Event helpers
// ============================================================

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type GAEventParams = Record<string, string | number | boolean | null | undefined>;

/**
 * Send a custom event to GA4 via gtag.
 */
export function trackEvent(eventName: string, params?: GAEventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// ─── Convenience helpers ──────────────────────────────────

export const trackWhatsAppClick = (position: 'top' | 'float' | 'cta') =>
  trackEvent(`click_whatsapp_${position}`, { position });

export const trackGalleryClick = (imageIndex: number) =>
  trackEvent('click_gallery', { image_index: imageIndex });

export const trackMapOpen = () => trackEvent('open_map');

export const trackFormSubmit = () => trackEvent('submit_form');

export const trackLeadGenerated = (source: 'form' | 'whatsapp_intent') =>
  trackEvent('lead_generated', { source });

export const trackScrollDepth = (percent: 25 | 50 | 75 | 100) =>
  trackEvent(`scroll_${percent}`, { percent });

export const trackFAQOpen = (question: string) =>
  trackEvent('faq_open', { question: question.slice(0, 100) });

export const trackCTAClick = (label: string) =>
  trackEvent('click_cta_contact', { label });
