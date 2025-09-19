import React, { useState, useEffect, useCallback } from 'react';

interface Rotating3dVideoCarouselProps {
  videoIds?: string[];
  videoPaths?: string[];
}

const Rotating3dVideoCarousel: React.FC<Rotating3dVideoCarouselProps> = ({ videoIds, videoPaths }) => {
  const videos = videoPaths || videoIds || [];
  const isLocalVideos = !!videoPaths;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));
  }, [videos.length]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000); 
    return () => clearInterval(timer);
  }, [goToNext]);

  const numVideos = videos.length;
  const angle = 360 / numVideos;
  
  const getTranslateZ = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 300; // Zwiększone z 150 na 300 dla mobile
    }
    return 500; // Zwiększone z 280 na 500 dla desktop
  }
  
  const [translateZ, setTranslateZ] = useState(getTranslateZ());

  useEffect(() => {
    const handleResize = () => {
      setTranslateZ(getTranslateZ());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center" style={{ perspective: '1200px' }}>
        <div
          className="relative w-48 h-72 md:w-56 md:h-80"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 1s ease-in-out',
            transform: `rotateY(-${currentIndex * angle}deg)`,
          }}
        >
          {videos.map((video, index) => (
            <div
              key={`carousel-${index}`}
              className="absolute w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black"
              style={{
                transform: `rotateY(${index * angle}deg) translateZ(${translateZ}px)`,
                backfaceVisibility: 'hidden',
              }}
            >
              {isLocalVideos ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video}`}
                  title={`YouTube video player ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </div>
        <button onClick={goToPrevious} className="absolute top-1/2 left-0 md:-left-8 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-10" aria-label="Previous video">
            ❮
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-0 md:-right-8 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-10" aria-label="Next video">
            ❯
        </button>
    </div>
  );
};

export default Rotating3dVideoCarousel;
