import axios from "axios";

const options = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
};

const baseUrl =
  "https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1";

export const TrendingMovies = async () => {
  try {
    const { data } = await axios.get(baseUrl, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
