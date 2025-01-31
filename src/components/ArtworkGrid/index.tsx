import React from "react";
import ArtworkCard from "@components/Artwork";
import styled from "styled-components";
import { Artwork } from "@/api/index";

interface ArtworkGridProps {
  artworks: Artwork[];
  // onFavorite: (artwork: Artwork) => void;
  // favorites: Artwork[];
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
`;

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks}) => {
  return (
    <Grid>
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          // onFavorite={onFavorite}
          // isFavorite={favorites.some((fav) => fav.id === artwork.id)}
        />
      ))}
    </Grid>
  );
};

export default ArtworkGrid;