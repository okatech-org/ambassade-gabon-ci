// Analytics utility for tracking user interactions
// This would integrate with Google Analytics, Matomo, or similar

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class Analytics {
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    if (!this.isEnabled) return;

    // Google Analytics 4 example
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
        page_title: title,
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Page View:', { path, title });
    }
  }

  // Track custom events
  trackEvent({ action, category, label, value }: AnalyticsEvent) {
    if (!this.isEnabled) return;

    // Google Analytics 4 example
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Event:', { action, category, label, value });
    }
  }

  // Track form submissions
  trackFormSubmission(formName: string, success: boolean = true) {
    this.trackEvent({
      action: success ? 'form_submit_success' : 'form_submit_error',
      category: 'forms',
      label: formName,
    });
  }

  // Track file downloads
  trackDownload(fileName: string, fileType: string) {
    this.trackEvent({
      action: 'download',
      category: 'files',
      label: `${fileName} (${fileType})`,
    });
  }

  // Track external link clicks
  trackExternalLink(url: string) {
    this.trackEvent({
      action: 'external_link_click',
      category: 'navigation',
      label: url,
    });
  }

  // Track search queries
  trackSearch(query: string, resultsCount?: number) {
    this.trackEvent({
      action: 'search',
      category: 'site_search',
      label: query,
      value: resultsCount,
    });
  }
}

export const analytics = new Analytics();

// Convenience functions
export const trackPageView = (path: string, title?: string) => 
  analytics.trackPageView(path, title);

export const trackEvent = (event: AnalyticsEvent) => 
  analytics.trackEvent(event);

export const trackFormSubmission = (formName: string, success?: boolean) => 
  analytics.trackFormSubmission(formName, success);

export const trackDownload = (fileName: string, fileType: string) => 
  analytics.trackDownload(fileName, fileType);

export const trackExternalLink = (url: string) => 
  analytics.trackExternalLink(url);

export const trackSearch = (query: string, resultsCount?: number) => 
  analytics.trackSearch(query, resultsCount);