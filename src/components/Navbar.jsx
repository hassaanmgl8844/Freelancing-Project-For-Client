const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <div className="text-2xl">VenoArt</div>
      <ul className="hidden md:flex space-x-4">
        <li>Auctions</li>
        <li>Buy Now</li>
        <li>Artists</li>
        <li>About</li>
      </ul>
      <div className="md:hidden">
        <button className="text-xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
