import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4";

// Top headlines
export const getTopHeadlines = async () => {
  const response = await axios.get(
    `${BASE_URL}/top-headlines?country=in&lang=en&max=10&apikey=${API_KEY}`
  );

  return response.data.articles;
};

// News by category
export const getNewsByCategory = async (category) => {
  const response = await axios.get(
    `${BASE_URL}/top-headlines?topic=${category}&lang=en&max=10&apikey=${API_KEY}`
  );

  return response.data.articles;
};