import axios from "axios";

// Top headlines
export const getTopHeadlines = async () => {
  const response = await axios.get("/api/news?type=top");

  return response.data.articles;
};

// News by category
export const getNewsByCategory = async (category) => {
  const response = await axios.get(
    `/api/news?type=category&category=${category}`
  );

  return response.data.articles;
};

// Search news
export const searchNews = async (query) => {
  const response = await axios.get(
    `/api/news?type=search&q=${encodeURIComponent(query)}`
  );

  return response.data.articles;
};