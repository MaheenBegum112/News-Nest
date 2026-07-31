import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold text-blue-600"
      >
        NewsNest
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link to="/technology" className="hover:text-blue-600">
          Technology
        </Link>

        <Link to="/sports" className="hover:text-blue-600">
          Sports
        </Link>

        <Link to="/business" className="hover:text-blue-600">
          Business
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;