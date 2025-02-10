import { useState, useEffect } from 'react';
import { fetchOtherArtworks } from '@/api/index';
import { Artwork } from '@/types/Artwork';
export const useOtherArtworks = (page: number) => {
  const [others, setOthers] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, totalPages } = await fetchOtherArtworks();
        setOthers(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return { others, loading, totalPages };
};
