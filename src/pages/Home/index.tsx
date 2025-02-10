import React, { useState, useRef, useEffect } from 'react';
import ArtworkGrid from '@components/ArtworkGrid';
import Pagination from '@/components/Pagination';
import Loader from '@/components/Loader';
import { useFavorites } from '@/context/FavoritesContext';
import SearchForm from '@/components/SearchForm';
import SortDropdown from '@/components/SortDropdown';
import OtherArtworksGrid from '@/components/OtherArtworksGrid';
import SectionTitle from '@/components/Title';
import { useArtworks } from '@/hooks/useArtworks';
import { useOtherArtworks } from '@/hooks/useOtherArtworks';
import { useSortedArtworks } from '@/hooks/useSortedArtworks';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<string>('alphabetical');
  const { favorites, toggleFavorite } = useFavorites();

  const { artworks, totalPages, loading: artworksLoading } = useArtworks(page, searchQuery);
  const { others, loading: othersLoading } = useOtherArtworks(page);
  const sortedArtworks = useSortedArtworks(artworks, sortOption);

  const gridRef = useRef<HTMLDivElement>(null);
  const [gridHeight, setGridHeight] = useState(0);

  useEffect(() => {
    if (gridRef.current) {
      setGridHeight(gridRef.current.clientHeight);
    }
  }, [page, artworks]);

  return (
    <>
      <SearchForm
        onSearch={(query) => {
          setSearchQuery(query);
          setPage(1);
        }}
      />

      {artworksLoading ? (
        <Loader />
      ) : (
        <>
          <SectionTitle subtitle="Topics for you" title="Our special gallery" />
          <SortDropdown onSortChange={setSortOption} />
          <div ref={gridRef}>
            <ArtworkGrid
              minHeight={gridHeight}
              artworks={sortedArtworks}
              onFavorite={toggleFavorite}
              favorites={favorites}
            />
          </div>
        </>
      )}

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />

      {othersLoading ? (
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
