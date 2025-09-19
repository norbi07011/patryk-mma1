
import React, { useState, useEffect, useCallback } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex, goToNext]);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 p-1 rounded-lg bg-gray-300 dark:bg-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-yellow/40">
      <div className="overflow-hidden h-full rounded-md shadow-lg">
        <div
          className="whitespace-nowrap h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((url, index) => (
            <div key={index} className="inline-block w-full h-full">
              <img src={url} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <button onClick={goToPrevious} className="absolute top-1/2 left-3 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-10">
        ❮
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-10">
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? 'bg-neon-yellow scale-125' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
