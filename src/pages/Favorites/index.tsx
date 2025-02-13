import React, { useEffect, useState } from 'react';
import { Artwork } from '@/types/Artwork';
import { Title, Container } from './styled';
import OtherArtworksGrid from '@/components/OtherArtworksGrid';
const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Artwork[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    };
    loadFavorites();

    window.addEventListener('storage', loadFavorites);
    return () => window.removeEventListener('storage', loadFavorites);
  }, []);

  const handleRemoveFavorite = (artwork: Artwork) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== artwork.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Container>
      <Title>
        Here are your
        <span> favorites</span>
      </Title>
      {favorites.length === 0 ? (
        <p>No favorite artworks yet. Start adding them from the home page!</p>
      ) : (
        <OtherArtworksGrid
          artworks={favorites}
          onFavorite={handleRemoveFavorite}
          favorites={favorites}
        />
      )}
    </Container>
  );
};

export default Favorites;
