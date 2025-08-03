import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-green-600">Tastetales 🍽</h1>
      <ul className="flex gap-6 text-lg font-medium text-gray-600">
        <li className="hover:text-green-500 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:text-green-500 cursor-pointer"><Link to="/favorites">Favorites</Link></li>
        <li className="hover:text-green-500 cursor-pointer"><Link to="/offers">Offers</Link></li>
        <li className="hover:text-green-500 cursor-pointer"><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
