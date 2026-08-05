import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryButtons from "./components/CategoryButtons";
import NewsCard from "./components/NewsCard";

import {
  getTopHeadlines,
  getNewsByCategory,
  searchNews,
} from "./services/newsApi";

function App() {
  // State to store news articles
  const [news, setNews] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Search input state
  const [searchText, setSearchText] = useState("");

  // Fetch top headlines when app loads
  useEffect(() => {
    fetchTopNews();
  }, []);

  // Function to fetch top headlines
  const fetchTopNews = async () => {
    setLoading(true);

    try {
      const articles = await getTopHeadlines();
      setNews(articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch news by category
  const handleCategory = async (category) => {
    setLoading(true);

    try {
      let articles;

      if (category === "") {
        articles = await getTopHeadlines();
      } else {
        articles = await getNewsByCategory(category);
      }

      setNews(articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Function to search news
  const handleSearch = async () => {
    if (!searchText.trim()) return;

    setLoading(true);

    try {
      const articles = await searchNews(searchText);
      setNews(articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar onCategorySelect={handleCategory} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          onSearch={handleSearch}
        />

        <CategoryButtons onCategorySelect={handleCategory} />

        {loading ? (
          <h1 className="text-center text-2xl font-semibold mt-10">
            Loading...
          </h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {news.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
                image={article.image}
                source={article.source.name}
                publishedAt={new Date(
                  article.publishedAt
                ).toLocaleDateString()}
                url={article.url}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default App;