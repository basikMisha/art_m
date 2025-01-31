import React, { useState, useEffect} from "react";
import { Footer } from '@components/Footer'
import { Header } from '@/components/Header'
import { Artwork, fetchArtworks } from "@/api/index";
import ArtworkGrid from "@components/ArtworkGrid";
import Pagination from "@/components/Pagination";

const Home: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadArtworks = async () => {
        setLoading(true);
        try {
            const { data, totalPages } = await fetchArtworks(page);
            setArtworks(data);
            setTotalPages(totalPages);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    loadArtworks();
}, [page]);

  return (
    <div>
        <Header/>
        
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ArtworkGrid artworks={artworks} />
      )}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      <Footer/>
    </div>
    
  );
};

export default Home;