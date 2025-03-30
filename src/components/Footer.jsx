import React, { useState, useEffect, useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacu-us" className="your-hero-section-styles">
    <footer className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div ref={textRef} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-2 text-gray-600"><strong>+91 94824 83948</strong></p>
          <p className="text-gray-600">support@beautyverse.com</p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>Our Products</li>
            <li>Best Sellers</li>
            <li>Exclusive Bundles</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h3 className="text-lg font-semibold">Information</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>Returns & Exchanges</li>
            <li>Shipping Information</li>
            <li>Terms & Policies</li>
            <li>Privacy & Security</li>
          </ul>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="mt-2 text-gray-600">Subscribe for exclusive offers and updates.</p>
          <div className="mt-3 flex">
            <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 flex-1 rounded-l-md focus:outline-none" />
            <button className="bg-black text-white px-4 rounded-r-md">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className={`text-gray-600 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>&copy; 2025 BeautyVerse</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaTwitter className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          <FaFacebook className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          <FaInstagram className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          <FaYoutube className="text-gray-600 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
