function CategoryButtons() {
  const categories = [
    "Technology",
    "Sports",
    "Business",
    "Health",
    "Science",
    "Entertainment",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {categories.map((category) => (
        <button
          key={category}
          className="px-5 py-2 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;