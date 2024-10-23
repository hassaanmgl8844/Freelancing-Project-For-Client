import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa6";
import { FaCcVisa , FaCcMastercard , FaPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold mb-2">COMPANY</h3>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">FOR BUYERS</h3>
          <ul>
            <li><a href="#" className="hover:underline">Buyer FAQ</a></li>
            <li><a href="#" className="hover:underline">eGift Card</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">FOR ARTISTS</h3>
          <ul>
            <li><a href="#" className="hover:underline">Sell with VenoArt</a></li>
            <li><a href="#" className="hover:underline">Artist Handbook</a></li>
            <li><a href="#" className="hover:underline">E-Catalogs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">NEWSLETTER</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded border border-gray-400 mb-4 w-full"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded w-full">Join</button>
          </form>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaPinterest /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-700 pt-4 flex justify-between">
        <div>
          <p>&copy; 2023 VenoArt. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <FaCcVisa />
          <FaCcMastercard />
          <SiAmericanexpress />
          <FaPaypal />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
