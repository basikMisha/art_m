import { useState, useEffect } from 'react';
import { fetchArtworks, Artwork } from '@/api/index';
import { useDebounce } from '@/hooks/useDebounce';

export const useArtworks = (page: number, searchQuery: string) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(searchQuery, 1000);

  useEffect(() => {
    const loadArtworks = async () => {
      setLoading(true);
      try {
        const { data, totalPages } = await fetchArtworks(page, debouncedQuery);
        setArtworks(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadArtworks();
  }, [page, debouncedQuery]);
  return { artworks, totalPages, loading };
};
