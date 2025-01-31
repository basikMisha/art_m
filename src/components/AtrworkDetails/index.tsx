import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtById } from "@/api/index";
import { Artwork } from "@/api/index";
import Loader from '../Loader';
import { Header } from '../Header';
import { Footer } from '../Footer';

const ArtworkDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получение ID картины из URL
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtwork = async () => {
        console.log("Fetching artwork with ID:", id);
      setLoading(true);
      setError(null);

      try {
        if (id) {
          const data = await getArtById(id);
          setArtwork(data);
        }
      } catch (err) {
        setError('Failed to load artwork details.');
      } finally {
        setLoading(false);
      }
    };

    fetchArtwork();
  }, [id]);

  if (loading) return <Loader/>;
  if (error) return <p>{error}</p>;
  if (!artwork) return <p>Artwork not found.</p>;

  return (
    <>
      <Header/>
      <h1>{artwork.title}</h1>
      <p><strong>Artist:</strong> {artwork.artist_display || 'Unknown'}</p>
      <p><strong>Date:</strong> {artwork.date_display || 'N/A'}</p>
      <p>Repository: {artwork.department_title}</p>
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.title || artwork.title}
        className="artwork-image"
      />
      <p><strong>Description:</strong> {artwork.title || 'No description available.'}</p>
      <Footer/>
    </>
  );
};

export default ArtworkDetails;
