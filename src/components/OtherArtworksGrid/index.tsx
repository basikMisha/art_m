import React from 'react';
import OtherArtwork from '../OtherArtwork';
import { Artwork } from '@/types/Artwork';
import { Grid } from './styled';
interface OtherArtworksGridProps {
  artworks: Artwork[];
  onFavorite: (artwork: Artwork) => void;
  favorites: Artwork[];
}

const OtherArtworksGrid: React.FC<OtherArtworksGridProps> = ({
  artworks,
  onFavorite,
  favorites,
}) => {
  return (
    <Grid>
      {artworks.map((artwork) => (
        <OtherArtwork
          key={artwork.id}
          artwork={artwork}
          onFavorite={onFavorite}
          isFavorite={favorites.some((fav) => fav.id === artwork.id)}
        />
      ))}
    </Grid>
  );
};

export default OtherArtworksGrid;
