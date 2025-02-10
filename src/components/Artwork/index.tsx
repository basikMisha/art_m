import React from 'react';
import { Artwork } from '@/types/Artwork';
import {
  Card,
  StyledLink,
  Image,
  InfoContainer,
  Info,
  Title,
  Artist,
  PublicTag,
  FavoriteButton,
  SVGIcon,
} from './styled';

interface ArtworkCardProps {
  artwork: Artwork;
  onFavorite: (artwork: Artwork) => void;
  isFavorite: boolean;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, onFavorite, isFavorite }) => {
  return (
    <Card>
      <StyledLink to={`/artwork/${artwork.id}`}>
        <Image
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
        />
        <InfoContainer>
          <Info>
            <Title>
              {artwork.title.length > 15 ? artwork.title.substring(0, 15) + '...' : artwork.title}
            </Title>
            <Artist>{artwork.artist_title ? artwork.artist_title : 'Unknown'}</Artist>
            <PublicTag>{artwork.is_public_domain ? 'Public' : 'Private'}</PublicTag>
          </Info>
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={(e) => {
              e.preventDefault();
              onFavorite(artwork);
            }}
          >
            <SVGIcon
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5444 21.5444L12.5444 17.5444L5.54445 21.5444V5.54443C5.54445 5.014 5.75516 4.50529 6.13024 4.13022C6.50531 3.75515 7.01402 3.54443 7.54445 3.54443H17.5444C18.0749 3.54443 18.5836 3.75515 18.9587 4.13022C19.3337 4.50529 19.5444 5.014 19.5444 5.54443V21.5444Z"
                stroke="#F17900"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SVGIcon>
          </FavoriteButton>
        </InfoContainer>
      </StyledLink>
    </Card>
  );
};

export default ArtworkCard;
