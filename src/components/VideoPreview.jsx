import { useRef, useState } from 'react';

const MutedIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9v6h4l5 5V4l-5 5H9z" />
      <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2" />
    </svg>
);
  
const UnmutedIcon = (
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9v6h4l5 5V4l-5 5H9z" />
</svg>
);

// Component for previewing videos
export default function VideoPreview({ src, onComplete }) {
  const videoRef = useRef();
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative w-full h-full">
      <video
        src={src}
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted={muted}
        onEnded={onComplete}
      />
      <button
        className="absolute bottom-50 right-4 text-white bg-black/60 px-3 py-1 rounded text-xs flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          setMuted((m) => !m);
        }}
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? MutedIcon : UnmutedIcon}
      </button>
    </div>
  );
} 