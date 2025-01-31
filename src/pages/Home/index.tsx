import React, { useState, useEffect, useMemo } from 'react';
import { Footer } from '@components/Footer';
import { Header } from '@/components/Header';
import { Artwork, fetchArtworks } from '@/api/index';
import ArtworkGrid from '@components/ArtworkGrid';
import Pagination from '@/components/Pagination';
import Loader from '@/components/Loader';
import { useFavorites } from '@/context/FavoritesContext';
import { useDebounce } from '@/hooks/useDebounce';
import SearchForm from '@/components/SearchForm';
import SortDropdown from '@/components/SortDropdown';
const Home: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [sortOption, setSortOption] = useState<string>('alphabetical');
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

  const sortArtworks = (artworks: Artwork[], option: string): Artwork[] => {
    switch (option) {
      case 'alphabetical':
        return [...artworks].sort((a, b) => a.title.localeCompare(b.title));
      case 'date':
        return [...artworks].sort(
          (a, b) => new Date(a.date_display).getTime() - new Date(b.date_display).getTime()
        );
      default:
        return artworks;
    }
  };
  const sortedArtworks = useMemo(() => sortArtworks(artworks, sortOption), [artworks, sortOption]);

  return (
    <div>
      <Header />
      <SearchForm
        onSearch={(query) => {
          setSearchQuery(query);
          setPage(1);
        }}
      />
      <SortDropdown onSortChange={setSortOption} />
      {loading ? (
        <Loader />
      ) : (
        <ArtworkGrid artworks={sortedArtworks} onFavorite={toggleFavorite} favorites={favorites} />
      )}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      <Footer />
    </div>
  );
};

export default Home;
