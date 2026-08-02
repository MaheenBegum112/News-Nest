import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryButtons from "./components/CategoryButtons";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <SearchBar />
        <CategoryButtons />
        <NewsCard
  title="OpenAI launches a new AI model"
  description="OpenAI has introduced a new model with improved reasoning, coding, and multimodal capabilities."
  image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800"
  source="TechCrunch"
  publishedAt="August 2, 2026"
  url="https://example.com"
/>
      </main>
    </>
  );
}

export default App;