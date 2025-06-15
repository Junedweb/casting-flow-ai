export const detectCrawler = (userAgent?: string): boolean => {
  const ua = userAgent || navigator.userAgent.toLowerCase();
  
  const crawlerPatterns = [
    // Google crawlers
    'googlebot', 'google-extended', 'googleother', 'google-inspectiontool',
    // Bing crawlers  
    'bingbot', 'msnbot', 'bingpreview',
    // Yahoo
    'slurp', 'yahoo',
    // Other search engines
    'duckduckbot', 'baiduspider', 'yandexbot',
    // Social media crawlers
    'facebookexternalhit', 'facebookcatalog', 'facebookplatform',
    'twitterbot', 'linkedinbot', 'whatsapp', 'telegrambot',
    // AI crawlers
    'chatgpt-user', 'gptbot', 'google-extended', 'ccbot',
    'anthropic-ai', 'claude-web', 'claude', 'anthropic',
    // SEO tools
    'semrushbot', 'ahrefsbot', 'mj12bot', 'dotbot',
    // Generic patterns
    'bot', 'crawler', 'spider', 'scraper'
  ];

  return crawlerPatterns.some(pattern => ua.includes(pattern));
};

export const getCrawlerType = (userAgent?: string): string => {
  const ua = userAgent || navigator.userAgent.toLowerCase();
  
  if (ua.includes('googlebot')) return 'Google';
  if (ua.includes('bingbot')) return 'Bing';
  if (ua.includes('facebookexternalhit')) return 'Facebook';
  if (ua.includes('twitterbot')) return 'Twitter';
  if (ua.includes('linkedinbot')) return 'LinkedIn';
  if (ua.includes('chatgpt') || ua.includes('gptbot')) return 'ChatGPT';
  if (ua.includes('anthropic') || ua.includes('claude')) return 'Claude';
  if (ua.includes('whatsapp')) return 'WhatsApp';
  if (ua.includes('telegrambot')) return 'Telegram';
  
  return 'Unknown Bot';
};

export const isCrawlerUserAgent = (userAgent: string): boolean => {
  return /bot|crawler|spider|crawling|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|chatgpt|gptbot|google-extended|ccbot|anthropic|claude/i.test(userAgent);
};

export const enhanceCrawlerAccess = () => {
  // Add meta tag to indicate crawler support
  const crawlerSupport = document.createElement('meta');
  crawlerSupport.setAttribute('name', 'crawler-support');
  crawlerSupport.setAttribute('content', 'enabled');
  document.head.appendChild(crawlerSupport);
  
  // Add robots meta tag for better indexing
  const robotsMeta = document.createElement('meta');
  robotsMeta.setAttribute('name', 'robots');
  robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  document.head.appendChild(robotsMeta);
  
  return true;
};
