
// SEO and crawler optimization utilities

export const generatePageTitle = (pageTitle: string, includeCompany = true): string => {
  if (includeCompany) {
    return `${pageTitle} | JAMZ - AI-Powered Casting Platform`;
  }
  return pageTitle;
};

export const generateMetaDescription = (description: string): string => {
  // Ensure description is between 150-160 characters for optimal SEO
  if (description.length > 160) {
    return description.substring(0, 157) + '...';
  }
  return description;
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://jamz-casting.lovable.app';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const generateStructuredData = (type: 'WebPage' | 'ContactPage' | 'AboutPage', data: any) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    "url": data.url || window.location.href,
    "name": data.title || document.title,
    "description": data.description,
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "JAMZ Casting Platform",
      "url": "https://jamz-casting.lovable.app/"
    }
  };

  return { ...baseData, ...data };
};

export const addStructuredData = (data: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Enhanced robots meta generation
export const generateRobotsContent = (options: {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
}) => {
  const directives = [];
  
  directives.push(options.index !== false ? 'index' : 'noindex');
  directives.push(options.follow !== false ? 'follow' : 'nofollow');
  
  if (options.noarchive) directives.push('noarchive');
  if (options.nosnippet) directives.push('nosnippet');
  if (options.maxSnippet) directives.push(`max-snippet:${options.maxSnippet}`);
  if (options.maxImagePreview) directives.push(`max-image-preview:${options.maxImagePreview}`);
  
  return directives.join(', ');
};
