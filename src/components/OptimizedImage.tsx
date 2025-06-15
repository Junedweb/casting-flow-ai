
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  sizes = '100vw'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Convert Unsplash URLs to WebP format for better compression
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('images.unsplash.com')) {
      // Add WebP format and optimize for web
      const url = new URL(originalSrc);
      url.searchParams.set('fm', 'webp');
      url.searchParams.set('q', '80');
      if (width) url.searchParams.set('w', width.toString());
      if (height) url.searchParams.set('h', height.toString());
      return url.toString();
    }
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-slate-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      
      <img
        src={optimizedSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          ...(width && height && { aspectRatio: `${width}/${height}` })
        }}
      />
      
      {/* Error fallback */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 text-sm"
          style={{ width, height }}
        >
          Image unavailable
        </div>
      )}
    </div>
  );
};
