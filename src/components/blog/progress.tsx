'use client';

import { useEffect, useRef } from 'react';

export default function ReadingProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage = 3 + (scrollTop / scrollHeight) * 97;
        // scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${Math.min(
          100,
          Math.max(0, percentage)
        )}%`;
      }
    };

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });

        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="sticky top-0 left-0 z-[9999] h-[4px] w-full">
      <div
        ref={progressRef}
        className="h-full bg-cyan-400 transition-[width] duration-100 ease-linear"
        style={{ width: '0%' }}
      />
    </div>
  );
}