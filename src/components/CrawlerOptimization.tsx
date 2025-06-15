
import { useEffect } from 'react';

export const CrawlerOptimization = () => {
  useEffect(() => {
    try {
      const userAgent = navigator.userAgent.toLowerCase();
      const isCrawler = /bot|crawler|spider|crawling|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|chatgpt|gptbot|google-extended|ccbot|anthropic|claude/i.test(userAgent);

      // Enhanced meta tags for crawler compatibility
      const ensureMetaTags = () => {
        // Ensure charset is first
        if (!document.querySelector('meta[charset]')) {
          const charset = document.createElement('meta');
          charset.setAttribute('charset', 'UTF-8');
          document.head.insertBefore(charset, document.head.firstChild);
        }

        // Ensure viewport meta tag
        if (!document.querySelector('meta[name="viewport"]')) {
          const viewport = document.createElement('meta');
          viewport.setAttribute('name', 'viewport');
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
          document.head.appendChild(viewport);
        }

        // Add robots meta tag if missing
        if (!document.querySelector('meta[name="robots"]')) {
          const robots = document.createElement('meta');
          robots.setAttribute('name', 'robots');
          robots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
          document.head.appendChild(robots);
        }

        // Add language meta tag
        if (!document.querySelector('meta[name="language"]')) {
          const language = document.createElement('meta');
          language.setAttribute('name', 'language');
          language.setAttribute('content', 'English');
          document.head.appendChild(language);
        }

        // Ensure HTML lang attribute
        if (!document.documentElement.getAttribute('lang')) {
          document.documentElement.setAttribute('lang', 'en-IN');
        }

        // Add crawler-specific meta tags
        if (isCrawler) {
          // Add prerender meta tag for crawlers
          if (!document.querySelector('meta[name="prerender-spa-plugin"]')) {
            const prerender = document.createElement('meta');
            prerender.setAttribute('name', 'prerender-spa-plugin');
            prerender.setAttribute('content', 'processed');
            document.head.appendChild(prerender);
          }

          // Add cache control for crawlers
          if (!document.querySelector('meta[http-equiv="cache-control"]')) {
            const cacheControl = document.createElement('meta');
            cacheControl.setAttribute('http-equiv', 'cache-control');
            cacheControl.setAttribute('content', 'no-cache, must-revalidate');
            document.head.appendChild(cacheControl);
          }
        }
      };

      // Enhanced structured data for better crawler understanding
      const addStructuredData = () => {
        if (!document.querySelector('script[type="application/ld+json"]')) {
          const structuredData = {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://jamz-casting.lovable.app/#organization",
                "name": "JAMZ",
                "url": "https://jamz-casting.lovable.app/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://jamz-casting.lovable.app/logo.png",
                  "width": 512,
                  "height": 512
                },
                "description": "AI-powered casting platform for India's entertainment industry",
                "foundingDate": "2024",
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "serviceType": ["Casting Platform", "Talent Management", "AI Face Matching"],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-XXX-XXX-XXXX",
                  "contactType": "Customer Service",
                  "availableLanguage": ["English", "Hindi"],
                  "areaServed": "IN"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://jamz-casting.lovable.app/#website",
                "url": "https://jamz-casting.lovable.app/",
                "name": "JAMZ Casting Platform",
                "description": "Discover and cast verified talent across India with JAMZ. AI-powered face matching, secure GDPR-compliant database, and streamlined casting workflow.",
                "publisher": {
                  "@id": "https://jamz-casting.lovable.app/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://jamz-casting.lovable.app/?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                "inLanguage": "en-IN"
              },
              {
                "@type": "SoftwareApplication",
                "name": "JAMZ Casting Platform",
                "description": "AI-powered casting platform for India's entertainment industry",
                "url": "https://jamz-casting.lovable.app/",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web Browser",
                "softwareVersion": "1.0",
                "datePublished": "2024-01-01",
                "dateModified": new Date().toISOString(),
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR",
                  "description": "Free consultation available",
                  "availability": "https://schema.org/InStock"
                },
                "provider": {
                  "@id": "https://jamz-casting.lovable.app/#organization"
                },
                "featureList": [
                  "AI-powered character analysis",
                  "Smart talent pool matching",
                  "GDPR compliant database",
                  "Verified talent profiles"
                ]
              }
            ]
          };
          
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.textContent = JSON.stringify(structuredData);
          document.head.appendChild(script);
        }
      };

      // Enhance page accessibility for crawlers
      const enhanceAccessibility = () => {
        // Add skip to content link for screen readers and crawlers
        if (!document.querySelector('#skip-to-content')) {
          const skipLink = document.createElement('a');
          skipLink.id = 'skip-to-content';
          skipLink.href = '#main-content';
          skipLink.textContent = 'Skip to main content';
          skipLink.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
          skipLink.addEventListener('focus', () => {
            skipLink.style.cssText = 'position:absolute;left:6px;top:7px;z-index:999999;padding:8px 16px;background:#000;color:#fff;text-decoration:none;';
          });
          skipLink.addEventListener('blur', () => {
            skipLink.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
          });
          document.body.insertBefore(skipLink, document.body.firstChild);
        }

        // Add main content identifier
        const mainContent = document.querySelector('main') || document.querySelector('#root > div');
        if (mainContent && !mainContent.id) {
          mainContent.id = 'main-content';
          mainContent.setAttribute('role', 'main');
        }

        // Add proper heading structure
        const h1 = document.querySelector('h1');
        if (h1 && !h1.id) {
          h1.id = 'main-heading';
        }
      };

      // Crawler-specific optimizations
      const crawlerSpecificOptimizations = () => {
        if (isCrawler) {
          // Disable animations for crawlers
          const style = document.createElement('style');
          style.textContent = `
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          `;
          document.head.appendChild(style);

          // Add crawler identification in body class
          document.body.classList.add('crawler-detected');
          
          // Log crawler access for debugging
          console.log('🤖 Crawler optimizations applied for:', userAgent);
        }
      };

      // Execute optimizations
      ensureMetaTags();
      addStructuredData();
      enhanceAccessibility();
      crawlerSpecificOptimizations();

      // Log optimization completion
      console.log('✅ Enhanced crawler optimization completed');

    } catch (error) {
      console.error('❌ Error in CrawlerOptimization:', error);
    }
  }, []);

  return null;
};
