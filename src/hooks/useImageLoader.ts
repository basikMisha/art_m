import { useState, useEffect } from 'react';
import noImage from '@/assets/img/no-image.png';

export const useImageLoader = (imageUrl?: string) => {
  const [loadedImage, setLoadedImage] = useState<string>(noImage);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new window.Image();
    img.src = imageUrl;

    img.onload = () => setLoadedImage(imageUrl);
    img.onerror = () => setLoadedImage(noImage);
  }, [imageUrl]);

  return loadedImage;
};
