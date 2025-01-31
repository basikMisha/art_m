const API_URL = 'https://api.artic.edu/api/v1';

export interface Artwork {
    id: number
    title: string
    date_display: string
    artist_display: string
    image_id: string
    department_title: string
}

export const fetchArtworks = async (page: number = 1, searchQuery: string = ""): Promise<{ data: Artwork[], totalPages: number }> => {
    let url = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=4&fields=id,title,date_display,artist_display,image_id`;

    // Если есть поисковый запрос, добавляем фильтр
    if (searchQuery.trim() !== "") {
        url += `&q=${encodeURIComponent(searchQuery)}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch");
    }

    const data = await response.json();
    return {
        data: data.data, // Список работ
        totalPages: data.pagination.total_pages || 1, // Общее количество страниц
    };
};

export const getArtById =  async (id: string) => {
    const response = await fetch(`${API_URL}/artworks/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch artwork");
    }
    const data = await response.json();
    console.log("API Response:", data); // Лог для проверки API
    return data.data;
  };