import React, { useEffect, useState } from 'react';
import { Artwork } from '@/api/index';
import ArtworkCard from '@components/Artwork';

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
    <>
      <h1>Favorite Artworks</h1>
      {favorites.length === 0 ? (
        <p>No favorite artworks yet. Start adding them from the home page!</p>
      ) : (
        <div className="artwork-list">
          {favorites.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onFavorite={handleRemoveFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Favorites;
