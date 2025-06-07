const Footer = () => (
  <footer className="bg-gray-900 text-white py-4 mt-auto">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
      <span>© {new Date().getFullYear()} Phu Le</span>
      {/* Placeholder for language switcher */}
      <button className="text-sm underline">EN / VI</button>
    </div>
  </footer>
);

export default Footer;
