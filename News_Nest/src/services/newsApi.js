import axios from "axios";

const API_URL = "https://news-nest-16fc.onrender.com";

export const getTopHeadlines = async (category = "") => {
  const response = await axios.get(`${API_URL}/news`, {
    params: {
      category: category,
    },
  });

  return response.data.articles || [];
};