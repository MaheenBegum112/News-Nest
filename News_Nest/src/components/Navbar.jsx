function Navbar({ onCategorySelect }) {
  return (
    <nav className="w-full border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      <h1
        className="text-3xl font-bold text-blue-600 cursor-pointer"
        onClick={() => onCategorySelect("")}
      >
        NewsNest
      </h1>

      <div className="flex items-center gap-8">
        <button
          onClick={() => onCategorySelect("")}
          className="hover:text-blue-600"
        >
          Home
        </button>

        <button
          onClick={() => onCategorySelect("technology")}
          className="hover:text-blue-600"
        >
          Technology
        </button>

        <button
          onClick={() => onCategorySelect("sports")}
          className="hover:text-blue-600"
        >
          Sports
        </button>

        <button
          onClick={() => onCategorySelect("business")}
          className="hover:text-blue-600"
        >
          Business
        </button>
      </div>
    </nav>
  );
}

export default Navbar;