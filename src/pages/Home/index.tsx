import React, { useState, useEffect } from 'react';
import { Footer } from '@components/Footer';
import { Header } from '@/components/Header';
import { Artwork, fetchArtworks } from '@/api/index';
import ArtworkGrid from '@components/ArtworkGrid';
import Pagination from '@/components/Pagination';
import Loader from '@/components/Loader';
import { useFavorites } from '@/context/FavoritesContext';
import { useDebounce } from '@/hooks/useDebounce';
import SearchForm from '@/components/SearchForm';
const Home: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const loadArtworks = async () => {
      setLoading(true);
      try {
        const { data, totalPages } = await fetchArtworks(page, debouncedSearchQuery);
        setArtworks(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadArtworks();
  }, [page, debouncedSearchQuery]);

  return (
    <div>
      <Header />
      <SearchForm
        onSearch={(query) => {
          setSearchQuery(query);
          setPage(1);
        }}
      />
      {loading ? (
        <Loader />
      ) : (
        <ArtworkGrid artworks={artworks} onFavorite={toggleFavorite} favorites={favorites} />
      )}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      <Footer />
    </div>
  );
};

export default Home;
