function CategoryButtons({ onCategorySelect }) {
  const categories = [
    "technology",
    "sports",
    "business",
    "health",
    "science",
    "entertainment",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className="px-6 py-2 border rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;