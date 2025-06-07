import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex items-center justify-between px-4">
      <Link to="/" className="text-xl font-bold">
        Phu Le
      </Link>
    </div>
  </header>
);

export default Header;
