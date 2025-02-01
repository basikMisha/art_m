const API_URL = 'https://api.artic.edu/api/v1';

export interface Artwork {
  id: number;
  title: string;
  date_display: string;
  artist_display: string;
  image_id: string;
  department_title: string;
  dimensions: string;
  credit_line: string;
  place_of_origin: string;
  is_public_domain: boolean;
  artist_title: string;
}

export const fetchArtworks = async (
  page: number = 1,
  searchQuery: string = ''
): Promise<{ data: Artwork[]; totalPages: number }> => {
  try {
    const limit = 4;
    const searchUrl = `${API_URL}/artworks/search?q=${encodeURIComponent(
      searchQuery
    )}&page=${page}&limit=${limit}&fields=id`;

    const searchResponse = await fetch(searchUrl);
    if (!searchResponse.ok) throw new Error('Search request failed');

    const searchData = await searchResponse.json();
    const artworkIds = searchData.data.map((item: { id: number }) => item.id);

    if (!artworkIds.length) {
      return { data: [], totalPages: 1 };
    }
    const artworksUrl = `${
      API_URL
    }/artworks?ids=${artworkIds.join(',')}&fields=id,title,date_display,artist_display,image_id,dimensions,credit_line,place_of_origin,is_public_domain,artist_title`;
    const artworksResponse = await fetch(artworksUrl);
    if (!artworksResponse.ok) throw new Error('Artworks request failed');

    const artworksData = await artworksResponse.json();

    return {
      data: artworksData.data,
      totalPages: searchData.pagination?.total_pages || 1,
    };
  } catch (error) {
    console.error(error);
    return { data: [], totalPages: 1 };
  }
};

export const getArtById = async (id: string) => {
  const response = await fetch(`${API_URL}/artworks/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch artwork');
  }
  const data = await response.json();
  console.log('API Response:', data); // Лог для проверки API
  return data.data;
};
