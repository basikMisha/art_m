import { useMemo } from 'react';
import { Artwork } from '@/types/Artwork';

export const useSortedArtworks = (artworks: Artwork[], sortOption: string) => {
  return useMemo(() => {
    switch (sortOption) {
      case 'alphabetical':
        return [...artworks].sort((a, b) => a.title.localeCompare(b.title));
      case 'date':
        return [...artworks].sort(
          (a, b) => new Date(a.date_display).getTime() - new Date(b.date_display).getTime()
        );
      default:
        return artworks;
    }
  }, [artworks, sortOption]);
};
