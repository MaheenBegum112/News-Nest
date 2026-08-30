import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryButtons from "./components/CategoryButtons";
import NewsCard from "./components/NewsCard";
import { getTopHeadlines } from "./services/newsApi";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  // Fetch top headlines
  const fetchNews = async () => {
    try {
      setLoading(true);

      const articles = await getTopHeadlines();

      setNews(articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  // Search handler
  const handleSearch = () => {
    console.log("Searching for:", searchText);

    // For now, search within the news already loaded
    if (!searchText.trim()) {
      fetchNews();
      return;
    }

    const filteredNews = news.filter((article) =>
      article.title?.toLowerCase().includes(searchText.toLowerCase())
    );

    setNews(filteredNews);
  };

  // Category handler
  const handleCategorySelect = async (category) => {
  try {
    setLoading(true);

    const articles = await getTopHeadlines(category);

    setNews(articles);
  } catch (error) {
    console.error("Error fetching category:", error);
    setNews([]);
  } finally {
    setLoading(false);
  }
};

 useEffect(() => {
  fetchNews();
}, []);

  return (
    <>
      <Navbar onCategorySelect={handleCategorySelect} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          onSearch={handleSearch}
        />

        <CategoryButtons
          onCategorySelect={handleCategorySelect}
        />

        {loading ? (
          <h1 className="text-center text-2xl font-semibold mt-10">
            Loading...
          </h1>
        ) : news.length === 0 ? (
          <h1 className="text-center text-2xl font-semibold mt-10">
            No news found
          </h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {news.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
                image={article.image}
                source={article.source?.name || "Unknown"}
                publishedAt={
                  article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString()
                    : ""
                }
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

