
import { useState, useCallback, useMemo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  sizes = '100vw',
  quality = 80
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Memoize optimized source URL
  const optimizedSrc = useMemo(() => {
    if (src.includes('images.unsplash.com')) {
      const url = new URL(src);
      url.searchParams.set('fm', 'webp');
      url.searchParams.set('q', quality.toString());
      if (width) url.searchParams.set('w', width.toString());
      if (height) url.searchParams.set('h', height.toString());
      url.searchParams.set('auto', 'format');
      return url.toString();
    }
    return src;
  }, [src, width, height, quality]);

  // Generate WebP and fallback sources
  const srcSet = useMemo(() => {
    if (src.includes('images.unsplash.com')) {
      const baseUrl = new URL(src);
      baseUrl.searchParams.set('q', quality.toString());
      if (width && height) {
        return `${baseUrl.toString()}&fm=webp&w=${width} 1x, ${baseUrl.toString()}&fm=webp&w=${width * 2} 2x`;
      }
    }
    return undefined;
  }, [src, width, height, quality]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(false);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      
      <picture>
        {/* WebP source for modern browsers */}
        {srcSet && (
          <source 
            srcSet={srcSet.replace(/&fm=webp/g, '&fm=webp')} 
            type="image/webp" 
            sizes={sizes}
          />
        )}
        
        <img
          src={optimizedSrc}
          alt={alt}
          className={`transition-all duration-300 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${className}`}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          srcSet={srcSet}
          onLoad={handleLoad}
          onError={handleError}
          style={{ 
            maxWidth: '100%', 
            height: 'auto',
            ...(width && height && { aspectRatio: `${width}/${height}` })
          }}
        />
      </picture>
      
      {/* Error fallback */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 text-sm border border-slate-200 rounded"
          style={{ width, height }}
        >
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
};
