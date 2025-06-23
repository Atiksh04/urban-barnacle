import { useEffect, useState } from 'react';
import { CONSTANTS } from '../constants';

// Displays a horizontal progress bar for a sequence of media items, auto-advancing internally.
export default function StoryProgressBar({ media, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= media.length) {
      onComplete?.(); // done with all
      return;
    }

    let start = Date.now();
    setProgress(0);

    const interval = setInterval(() => {
      const diff = Date.now() - start;
      setProgress((diff / CONSTANTS.AUTO_SCROLL_TIMER) * 100);
      if (diff >= CONSTANTS.AUTO_SCROLL_TIMER) {
        setCurrentIndex((prev) => prev + 1);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex, media.length, onComplete]);

  return (
    <div className="absolute top-3 left-0 w-full px-4 flex space-x-1 z-50">
      {media.map((_, index) => (
        <div
          key={index}
          className="flex-1 h-1 bg-white/40 rounded-full overflow-hidden"
        >
          {index === currentIndex ? (
            <div
              className="h-full bg-white transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          ) : (
            <div
              className={`h-full ${
                index < currentIndex ? 'bg-white' : 'bg-transparent'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
