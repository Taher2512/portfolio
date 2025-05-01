"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import Image from "next/image";

interface CarouselComponentProps {
  images: string[];
  isMobile?: boolean;
}

const CarouselComponent = ({
  images,
  isMobile = false,
}: CarouselComponentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images.length === 0) {
    return (
      <div
        className={`w-full ${
          isMobile ? "aspect-[9/16]" : "aspect-video"
        } bg-secondary flex items-center justify-center rounded-lg`}
      >
        <p className="text-muted-foreground text-sm">No images available</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${
        isMobile ? "aspect-[9/16]" : "aspect-video"
      } overflow-hidden rounded-lg group`}
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        {/* Placeholder for actual project images */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
          <p className="text-center font-mono text-sm px-4">
            [Project image {currentIndex + 1} of {images.length}]
          </p>
        </div>

        {/* When you have actual images, uncomment this: */}
        {/* <Image 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex}`} 
          fill 
          className="object-cover"
        /> */}
      </motion.div>

      {/* Navigation arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <FiChevronLeft size={18} />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goToNext}
        aria-label="Next image"
      >
        <FiChevronRight size={18} />
      </button>

      {/* Slide indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
