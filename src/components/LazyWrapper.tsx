
import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export const LazyWrapper = ({ 
  children, 
  fallback,
  className = ''
}: LazyWrapperProps) => {
  const defaultFallback = (
    <div className={`space-y-4 ${className}`}>
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
};

// Simplified HOC for lazy loading components
export const withLazyLoading = <P extends {}>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as any)} />
    </LazyWrapper>
  );
};
