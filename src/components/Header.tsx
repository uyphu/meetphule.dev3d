import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => (
  <header className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
      <Link to="/" className="text-xl font-bold">
        Phu Le
      </Link>
      <Navbar />
    </div>
  </header>
);

export default Header;
