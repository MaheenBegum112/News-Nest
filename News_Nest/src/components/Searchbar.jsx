function SearchBar() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex w-full max-w-2xl gap-3">
        <input
          type="text"
          placeholder="Search latest news..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;