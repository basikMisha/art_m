// import React from 'react';
// import ArtworkCard from '@components/Artwork';
// import { Artwork } from '@/types/Artwork';
// import { Grid } from './styled';
// interface ArtworkGridProps {
//   artworks: Artwork[];
//   onFavorite: (artwork: Artwork) => void;
//   favorites: Artwork[];
//   minHeight: number;
// }
// const ArtworkGrid: React.FC<ArtworkGridProps & { minHeight: number }> = ({
//   artworks,
//   onFavorite,
//   favorites,
//   minHeight,
// }) => {
//   return (
//     <Grid id="artwork-grid" minHeight={minHeight}>
//       {artworks.map((artwork) => (
//         <ArtworkCard
//           key={artwork.id}
//           artwork={artwork}
//           onFavorite={onFavorite}
//           isFavorite={favorites.some((fav) => fav.id === artwork.id)}
//         />
//       ))}
//     </Grid>
//   );
// };

// export default ArtworkGrid;
import React from 'react';
import ArtworkCard from '@components/Artwork';
import { Artwork } from '@/types/Artwork';
import { Grid } from './styled';

interface ArtworkGridProps {
  artworks: Artwork[];
  onFavorite: (artwork: Artwork) => void;
  favorites: number[]; // Изменено: теперь массив id, а не массив Artwork
  minHeight: number;
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({
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
          isFavorite={favorites.includes(artwork.id)} // Изменено: теперь проверяем по id
        />
      ))}
    </Grid>
  );
};

export default ArtworkGrid;
