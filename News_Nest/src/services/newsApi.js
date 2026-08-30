import axios from "axios";

const API_URL = "http://localhost:8000";

export const getTopHeadlines = async (category = "") => {
  const response = await axios.get(`${API_URL}/news`, {
    params: {
      category: category,
    },
  });

  return response.data.articles || [];
};