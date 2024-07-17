// src/Navbar.js

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-end list-none m-0 p-0">
        <li className="ml-4">
          <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Login</Link>
        </li>
        <li className="ml-4">
          <Link to="/register" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
