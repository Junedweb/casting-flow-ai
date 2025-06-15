
import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/utils/analytics';

export const useScrollTracking = () => {
  const scrollPercentagesTracked = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      // Track at 25%, 50%, 75%, and 100% scroll depths
      const milestones = [25, 50, 75, 100];
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollPercentagesTracked.current.has(milestone)) {
          scrollPercentagesTracked.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset tracking when component unmounts or page changes
  useEffect(() => {
    return () => {
      scrollPercentagesTracked.current.clear();
    };
  }, []);
};
