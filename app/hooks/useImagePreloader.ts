"use client";

import { useEffect, useState, useCallback } from "react";

interface UseImagePreloaderOptions {
  enabled?: boolean;
  maxConcurrent?: number;
  delay?: number;
}

export const useImagePreloader = (
  imageUrls: string[],
  options: UseImagePreloaderOptions = {}
) => {
  const { enabled = true, maxConcurrent = 3, delay = 2000 } = options;
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  const preloadImage = useCallback(
    (url: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (loadedImages.has(url) || errorImages.has(url)) {
          resolve();
          return;
        }

        setLoadingImages((prev) => new Set(prev).add(url));

        const img = new window.Image();

        img.onload = () => {
          setLoadedImages((prev) => new Set(prev).add(url));
          setLoadingImages((prev) => {
            const newSet = new Set(prev);
            newSet.delete(url);
            return newSet;
          });
          resolve();
        };

        img.onerror = () => {
          setErrorImages((prev) => new Set(prev).add(url));
          setLoadingImages((prev) => {
            const newSet = new Set(prev);
            newSet.delete(url);
            return newSet;
          });
          reject(new Error(`Failed to load image: ${url}`));
        };

        img.src = url;
      });
    },
    [loadedImages, errorImages]
  );

  const preloadBatch = useCallback(
    async (urls: string[]) => {
      const batches = [];
      for (let i = 0; i < urls.length; i += maxConcurrent) {
        batches.push(urls.slice(i, i + maxConcurrent));
      }

      for (const batch of batches) {
        await Promise.allSettled(batch.map((url) => preloadImage(url)));
        // Small delay between batches to prevent overwhelming the browser
        if (batches.indexOf(batch) < batches.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
    },
    [maxConcurrent, preloadImage]
  );

  useEffect(() => {
    if (!enabled || imageUrls.length === 0) return;

    // Delay the preloading to not interfere with initial page load
    const timer = setTimeout(() => {
      preloadBatch(imageUrls);
    }, delay);

    return () => clearTimeout(timer);
  }, [imageUrls, enabled, delay, preloadBatch]);

  return {
    loadedImages,
    loadingImages,
    errorImages,
    isLoaded: (url: string) => loadedImages.has(url),
    isLoading: (url: string) => loadingImages.has(url),
    hasError: (url: string) => errorImages.has(url),
    preloadImage,
  };
};
