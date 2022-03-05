import { useCallback, useEffect } from 'react';

export default function useInfiniteScroll(callback: () => void) {
  const handleScroll = useCallback(() => {
    const documentHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;
    const modifier = 200; 
    
    if (currentScroll + modifier > documentHeight) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
}
