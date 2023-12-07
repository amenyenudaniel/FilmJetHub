import axios from "axios";

const options = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
};

export const TrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1",
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const nowPlayingMovies = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieDetailsAPI = async (id: any) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieTrailerAPI = async (id: any) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieCastAPI = async (id: any) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieSimilarAPI = async (id: any) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const RecommendedMovieAPI = async (id: any) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieReviewsAPI = async (id: any) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const allMoviesAPI = async (value: any) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?page=${value}`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
