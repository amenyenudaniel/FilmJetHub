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
