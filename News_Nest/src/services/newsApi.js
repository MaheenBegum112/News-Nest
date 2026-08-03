import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

const BASE_URL = "https://gnews.io/api/v4";

export const getTopHeadlines = async () => {
  const response = await axios.get(
    `${BASE_URL}/top-headlines?country=in&lang=en&max=10&apikey=${API_KEY}`
  );

  return response.data.articles;
};