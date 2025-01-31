import React from "react";
import { Artwork } from "@/api/index";
import { Link } from "react-router-dom";

interface ArtworkCardProps {
  artwork: Artwork;
  // onFavorite: (artwork: Artwork) => void;
  // isFavorite: boolean;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  // onFavorite,
  // isFavorite,
}) => {
  return (
    <div>
      <Link to={`/artwork/${artwork.id}`}>
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
          width="200"
        />
        <h3>{artwork.title}</h3>
        <p>{artwork.artist_display}</p>
        <p>{artwork.date_display}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            // onFavorite(artwork);
          }}
        >
          {/* {isFavorite ? "Remove from fav" : "Add to fav"} */}
        </button>
      </Link>
    </div>
  );
};

export default ArtworkCard;