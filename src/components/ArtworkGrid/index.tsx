import React from 'react';
import ArtworkCard from '@components/Artwork';
import { Artwork } from '@/api/index';
import { Grid } from './styled';
interface ArtworkGridProps {
  artworks: Artwork[];
  onFavorite: (artwork: Artwork) => void;
  favorites: Artwork[];
  minHeight: number;
}
const ArtworkGrid: React.FC<ArtworkGridProps & { minHeight: number }> = ({
  artworks,
  onFavorite,
  favorites,
  minHeight,
}) => {
  return (
    <Grid id="artwork-grid" minHeight={minHeight}>
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          onFavorite={onFavorite}
          isFavorite={favorites.some((fav) => fav.id === artwork.id)}
        />
      ))}
    </Grid>
  );
};

export default ArtworkGrid;
