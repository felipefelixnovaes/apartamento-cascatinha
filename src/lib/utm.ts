// ============================================================
// UTM capture & persistence
// ============================================================

export interface UTMData {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  content: string | null;
  term: string | null;
  referrer: string | null;
  landingPage: string | null;
  timestamp: string | null;
}

const UTM_KEY = 'cascatinha_utm';

/**
 * Capture UTMs from the current URL and store in sessionStorage.
 * Only captures on the FIRST page view of the session.
 */
export function captureUTMs(): void {
  if (typeof window === 'undefined') return;

  // Don't overwrite if already captured this session
  if (sessionStorage.getItem(UTM_KEY)) return;

  const params = new URLSearchParams(window.location.search);

  const utm: UTMData = {
    source: params.get('utm_source'),
    medium: params.get('utm_medium'),
    campaign: params.get('utm_campaign'),
    content: params.get('utm_content'),
    term: params.get('utm_term'),
    referrer: document.referrer || null,
    landingPage: window.location.href,
    timestamp: new Date().toISOString(),
  };

  sessionStorage.setItem(UTM_KEY, JSON.stringify(utm));
}

/**
 * Retrieve stored UTM data.
 */
export function getUTMs(): UTMData {
  if (typeof window === 'undefined') {
    return {
      source: null,
      medium: null,
      campaign: null,
      content: null,
      term: null,
      referrer: null,
      landingPage: null,
      timestamp: null,
    };
  }

  const stored = sessionStorage.getItem(UTM_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // If corrupted, return defaults
    }
  }

  return {
    source: null,
    medium: null,
    campaign: null,
    content: null,
    term: null,
    referrer: null,
    landingPage: null,
    timestamp: null,
  };
}

/**
 * Detect device type from user agent.
 */
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' | 'unknown' {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(ua))
    return 'mobile';
  return 'desktop';
}
