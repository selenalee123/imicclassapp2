const API_URL = 'https://api.themoviedb.org/3';

export type Movie = {
  id: number;
  title: string;
  overview: string;
  original_title: string;
  release_date: string;
  poster_path: string;
};

const moveAPI = {
  async fetchAll() {
    const result = await fetch(`${API_URL}/movie/popular`);
    return result.json();
  },
  async fetchDetail(id: number) {
    const result = await fetch(`${API_URL}/movie/${id}`);
    return result.json();
  },
};

export default moveAPI;
