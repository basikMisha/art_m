import React, { useState, useEffect, useMemo } from 'react';
import { Artwork, fetchArtworks, fetchOtherArtworks } from '@/api/index';
import ArtworkGrid from '@components/ArtworkGrid';
import Pagination from '@/components/Pagination';
import Loader from '@/components/Loader';
import { useFavorites } from '@/context/FavoritesContext';
import { useDebounce } from '@/hooks/useDebounce';
import SearchForm from '@/components/SearchForm';
import SortDropdown from '@/components/SortDropdown';
import OtherArtworksGrid from '@/components/OtherArtworksGrid';
import SectionTitle from '@/components/Title';
const Home: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  const [sortOption, setSortOption] = useState<string>('alphabetical');
  const [others, setOthers] = useState<Artwork[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, totalPages } = await fetchOtherArtworks();
        setOthers(data);
        setTotalPages(totalPages);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);
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
    <>
      <SearchForm
        onSearch={(query) => {
          setSearchQuery(query);
          setPage(1);
        }}
      />

      {loading ? (
        <Loader />
      ) : (
        <>
          <SectionTitle subtitle="Topics for you" title="Our special gallery" />
          <SortDropdown onSortChange={setSortOption} />
          <ArtworkGrid
            artworks={sortedArtworks}
            onFavorite={toggleFavorite}
            favorites={favorites}
          />
        </>
      )}

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <SectionTitle subtitle="Here some more" title="Other works for you" />
          <OtherArtworksGrid artworks={others} onFavorite={toggleFavorite} favorites={favorites} />
        </>
      )}
    </>
  );
};

export default Home;
