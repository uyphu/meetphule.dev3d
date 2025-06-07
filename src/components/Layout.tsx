import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-6">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
