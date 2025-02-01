import React from 'react';
import ArtworkCard from '@components/Artwork';
import { Artwork } from '@/api/index';
import { Grid } from './styled';
interface ArtworkGridProps {
  artworks: Artwork[];
  onFavorite: (artwork: Artwork) => void;
  favorites: Artwork[];
}
const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks, onFavorite, favorites }) => {
  return (
    <Grid>
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
