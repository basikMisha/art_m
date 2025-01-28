const API_URL = 'https://api.artic.edu/api/v1';

export interface Artwork {
    id: number;
    title: string;
    date_display: string;
    artist_display: string;
    image_id: string;
    department_title: string;
}

const checkResponse = async (response: Response) => {
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    return response.json();
};

export const fetchArtworks = async (page: number = 1): Promise<Artwork[]> => {
    const response = await fetch(
        `${API_URL}/artworks?page=${page}&limit=4&fields=id,title,date_display,artist_display,image_id`
    );
    const data = await checkResponse(response);
    return data.data;
};

export const getArtById = async (id: string): Promise<Artwork> => {
    const response = await fetch(`${API_URL}/artworks/${id}`);
    const data = await checkResponse(response);
    return data.data;
};
