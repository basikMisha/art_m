import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtById } from '@/api/index';
import { Artwork } from '@/types/Artwork';
import Loader from '@components/Loader';
import { useImageLoader } from '@/hooks/useImageLoader';
import {
  Container,
  ContentContainer,
  ArtTitle,
  ArtArtist,
  ArtDate,
  DescTitle,
  DescName,
  DescValue,
  DescRow,
  OverviewContainer,
  Image,
} from './styled';

const ArtworkDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id) {
          const data = await getArtById(id);
          setArtwork(data);
        }
      } catch (err) {
        console.error('Error fetching artwork:', err);
        setError('Failed to load artwork details.');
      } finally {
        setLoading(false);
      }
    };

    fetchArtwork();
  }, [id]);

  const imageUrl = artwork?.image_id
    ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
    : undefined;

  const backgroundUrl = useImageLoader(imageUrl);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!artwork) return <p>Artwork not found.</p>;

  return (
    <Container>
      <Image background_url={backgroundUrl} />
      <ContentContainer>
        <ArtTitle>{artwork.title}</ArtTitle>
        <ArtArtist>{artwork.artist_title || 'Unknown'}</ArtArtist>
        <ArtDate>{artwork.date_display}</ArtDate>

        <OverviewContainer>
          <DescTitle>Overview</DescTitle>
          <DescRow>
            <DescName>Artist nationality:</DescName>
            <DescValue>{artwork.place_of_origin}</DescValue>
          </DescRow>
          <DescRow>
            <DescName>Dimensions:</DescName>
            <DescValue>{artwork.dimensions}</DescValue>
          </DescRow>
          <DescRow>
            <DescName>Credit Line:</DescName>
            <DescValue>{artwork.credit_line}</DescValue>
          </DescRow>
          <DescRow>
            <DescName>Repository:</DescName>
            <DescValue>{artwork.department_title}</DescValue>
          </DescRow>
          <DescRow>
            <DescValue>{artwork.is_public_domain ? 'Public' : 'Private'}</DescValue>
          </DescRow>
        </OverviewContainer>
      </ContentContainer>
    </Container>
  );
};

export default ArtworkDetails;
