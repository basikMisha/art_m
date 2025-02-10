import { getRandomPage } from '@/utils/getRandomPage';
import {
  API_URL,
  PAGE_NUMBER,
  ARTS_FOR_PAGE,
  ARTS_FOR_OTHERS,
  MAX_RANDOM_PAGE,
} from '@/constants/api';
import { Artwork } from '@/types/Artwork';

export const fetchArtworks = async (
  page: number = PAGE_NUMBER,
  searchQuery: string = ''
): Promise<{ data: Artwork[]; totalPages: number }> => {
  try {
    const limit = ARTS_FOR_PAGE;
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
      totalPages: searchData.pagination?.total_pages || PAGE_NUMBER,
    };
  } catch (error) {
    console.error(error);
    return { data: [], totalPages: PAGE_NUMBER };
  }
};

export const getArtById = async (id: string) => {
  const response = await fetch(`${API_URL}/artworks/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch artwork');
  }
  const data = await response.json();
  return data.data;
};

export const fetchOtherArtworks = async (): Promise<{ data: Artwork[]; totalPages: number }> => {
  try {
    const limit = ARTS_FOR_OTHERS;
    const randPage = getRandomPage(PAGE_NUMBER, MAX_RANDOM_PAGE);
    const url = new URL(`${API_URL}/artworks`);
    url.searchParams.append('page', randPage.toString());
    url.searchParams.append('limit', limit.toString());
    url.searchParams.append('fields', 'id,title,artist_title,image_id');

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      data: data.data,
      totalPages: data.pagination?.total_pages || PAGE_NUMBER,
    };
  } catch (error) {
    console.error('Error retrieving artworks:', error);
    return { data: [], totalPages: PAGE_NUMBER };
  }
};
