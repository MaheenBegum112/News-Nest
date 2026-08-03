import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryButtons from "./components/CategoryButtons";
import NewsCard from "./components/NewsCard";
import { getTopHeadlines, getNewsByCategory,} from "./services/newsApi";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const articles = await getTopHeadlines();
        setNews(articles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);
  const handleCategory = async (category) => {
  setLoading(true);

  try {
    const articles = await getNewsByCategory(category);
    setNews(articles);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <SearchBar />
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