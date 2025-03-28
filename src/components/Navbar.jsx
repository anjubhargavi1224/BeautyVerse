import { FiSearch } from "react-icons/fi";
import { IonIcon } from "@ionic/react";
import { personOutline, starOutline } from "ionicons/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo

const Navbar = () => {
  const location = useLocation(); // Get current page URL

  // Function to handle navigation
  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      // If not on Home Page, first navigate to "/"
      window.location.href = `/#${section}`;
    } else {
      // If on Home Page, just scroll smoothly
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm relative">
      <div className="container mx-auto mt-10 px-4 lg:px-10 flex justify-between items-center py-4 relative">
        
        {/* Search Box */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-1/3 md:w-1/4">
          <input
            type="text"
            placeholder="Search product"
            className="w-full focus:outline-none text-gray-500 text-sm"
          />
          <FiSearch className="text-gray-700 cursor-pointer" size={18} />
        </div>

        {/* Logo - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <RouterLink to="/">
            <img src={logo} alt="BeautyVerse Logo" className="h-14 md:h-16 w-auto object-contain" />
          </RouterLink>
        </div>

        {/* Icons */}
        <div className="flex space-x-6">
          <IonIcon icon={personOutline} size="large" className="cursor-pointer text-2xl" />
          <IonIcon icon={starOutline} size="large" className="cursor-pointer text-2xl" />
        </div>
      </div>

      {/* Menu Links */}
      <div className="py-6">
        <ul className="flex justify-center space-x-10 py-3 text-lg font-bold">
          <li className="cursor-pointer hover:text-gray-600">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <button onClick={() => handleNavigation("about-section")}>About</button>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <button onClick={() => handleNavigation("products-section")}>Products</button>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <button onClick={() => handleNavigation("faq-section")}>FAQ</button>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
          <button onClick={() => handleNavigation("blog-section")}>Blog</button>
            
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <button onClick={() => handleNavigation("footer-section")}>Contact Us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
