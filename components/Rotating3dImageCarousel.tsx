import React, { useState, useEffect, useCallback } from 'react';

interface Rotating3dImageCarouselProps {
  images: string[];
}

const Rotating3dImageCarousel: React.FC<Rotating3dImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const numImages = images.length;
  const angle = 360 / numImages;
  
  const getTranslateZ = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 150; 
    }
    return 280; 
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
          {images.map((image, index) => (
            <div
              key={`carousel-${index}`}
              className="absolute w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black"
              style={{
                transform: `rotateY(${index * angle}deg) translateZ(${translateZ}px)`,
                backfaceVisibility: 'hidden',
              }}
            >
              <img src={image} alt={`carousel item ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <button onClick={goToPrevious} className="absolute top-1/2 left-0 md:-left-8 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-10" aria-label="Previous image">
            ❮
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-0 md:-right-8 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-10" aria-label="Next image">
            ❯
        </button>
    </div>
  );
};

export default Rotating3dImageCarousel;
