import React, { useState, useEffect } from 'react';

interface RotatingImageCarouselProps {
  images: string[];
}

const RotatingImageCarousel: React.FC<RotatingImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const numImages = images.length;
  const angle = 360 / numImages;
  
  // Dostosowanie promienia karuzeli dla różnych rozmiarów ekranu
  const getTranslateZ = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 200; // Mniejszy promień na urządzeniach mobilnych
    }
    return 320; // Większy promień na desktopach
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
    <>
      {/* Responsive background/image slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={`bg-${index}`}
            src={image}
            alt="background"
            className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ease-in-out brightness-75 md:blur-md md:brightness-50 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Karuzela 3D - ukryta na mobilnych */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center" style={{ perspective: '1200px' }}>
        <div
          className="relative w-48 h-72 md:w-60 md:h-80"
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
      </div>
    </>
  );
};

export default RotatingImageCarousel;