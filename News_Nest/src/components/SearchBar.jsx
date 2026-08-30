function SearchBar({
  searchText,
  setSearchText,
  onSearch,
}) {
  return (
    <div className="flex justify-center gap-3 mt-10">
      <input
        type="text"
        placeholder="Search latest news..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        className="w-full max-w-xl border rounded-lg px-4 py-3 outline-none"
      />

      <button
        onClick={onSearch}
        className="bg-blue-900 text-white px-8 rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;