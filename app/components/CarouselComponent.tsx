"use client";

import { useState, useRef } from "react";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

interface CarouselComponentProps {
  images: string[];
  isMobile?: boolean;
}

const CarouselComponent = ({
  images,
  isMobile = false,
}: CarouselComponentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const constraintsRef = useRef(null);

  // Reset auto-scroll when user interacts with carousel
  const resetAutoScroll = () => {
    // This function is intentionally empty as the effect depends
    // on currentIndex, which is updated by navigation functions
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    resetAutoScroll();
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    resetAutoScroll();
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50; // minimum distance required for a swipe

    if (info.offset.x > threshold) {
      // Swiped right - go to previous
      goToPrevious();
    } else if (info.offset.x < -threshold) {
      // Swiped left - go to next
      goToNext();
    } else {
      // If swipe wasn't strong enough, reset position
      controls.start({ x: 0 });
    }
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
      ref={constraintsRef}
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full touch-pan-y"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        {/* Position the image with proper fallback */}
        <div className="relative w-full h-full">
          {/* Fallback background that shows while image loads or if it fails */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
            <p className="text-center font-mono text-sm px-4">
              [Project image {currentIndex + 1} of {images.length}]
            </p>
          </div>

          {/* The actual image with higher z-index to appear above fallback */}
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-center relative"
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => {
              console.error("Image failed to load:", images[currentIndex]);
              // The fallback will remain visible if image fails to load
            }}
          />
        </div>

        {/* Swipe hint indicator - only visible on mobile */}
        {/* <div className="absolute bottom-16 left-0 right-0 flex justify-center items-center pointer-events-none md:hidden z-20">
          <div className="text-white/70 text-xs bg-black/30 px-3 py-1 rounded-full">
            Swipe to view more
          </div>
        </div> */}
      </motion.div>

      {/* Navigation arrows - more visible styling */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-300 hidden md:block backdrop-blur-sm border border-white/20 shadow-lg hover:scale-110"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <FiChevronLeft size={20} />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-300 hidden md:block backdrop-blur-sm border border-white/20 shadow-lg hover:scale-110"
        onClick={goToNext}
        aria-label="Next image"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Slide indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              resetAutoScroll();
            }}
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
