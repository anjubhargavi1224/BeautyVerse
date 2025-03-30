import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { starOutline, repeatOutline } from "ionicons/icons";
import Lady1 from "../assets/Lady1.jpeg";
import Lady2 from "../assets/Lady2.jpeg";
import Lady3 from "../assets/Lady3.jpeg";
import Lady4 from "../assets/Lady4.jpeg";
import Lady5 from "../assets/Lady5.jpeg";

import Men1 from "../assets/Men1.jpeg";
import Men2 from "../assets/Men2.jpeg";
import Men3 from "../assets/Men3.jpeg";
import Men4 from "../assets/Men4.jpeg";
import Men5 from "../assets/Men5.jpeg";

import Baby1 from "../assets/Baby1.jpeg";
import Baby2 from "../assets/Baby2.jpeg";
import Baby3 from "../assets/Baby3.jpeg";
import Baby4 from "../assets/Baby4.jpeg";
import Baby5 from "../assets/Baby5.jpeg";
const products = [
  { name: "Facial Rejuvenating Serum", description: "A serum for glowing skin", category: "Women", image: Lady1, link: "https://www.myntra.com" },
  { name: "Foaming Cleanser", description: "Deep cleanses the skin", category: "Women", image: Lady2, link: "https://www.myntra.com" },
  { name: "Mucin Power Essence", description: "Hydrates and nourishes", category: "Women", image: Lady3, link: "https://www.myntra.com" },
  { name: "Skin Radiance Mask", description: "Brightens the complexion", category: "Women", image: Lady4, link: "https://www.myntra.com" },
  { name: "Vitamin C Bathing Bar", description: "Evens out skin tone", category: "Women", image: Lady5, link: "https://www.myntra.com" },

  { name: "Oil Control Facewash", description: "Removes excess oil", category: "Men", image: Men1, link: "https://www.myntra.com" },
  { name: "The Man Company De-tan Kit", description: "Reduces tan effectively", category: "Men", image: Men2, link: "https://www.myntra.com" },
  { name: "SPF 30 Face Cream", description: "Protects against UV rays", category: "Men", image: Men3, link: "https://www.myntra.com" },
  { name: "Minimalist Anti-Acne Kit", description: "Prevents acne breakouts", category: "Men", image:Men4, link: "https://www.myntra.com" },
  { name: "Daily Multi-Action Face Wash", description: "Hydrating and cleansing", category: "Men", image: Men5, link: "https://www.myntra.com" },

  { name: "Unscented Baby Lotion", description: "Gentle and nourishing", category: "Kids", image: Baby1, link: "https://www.myntra.com" },
  { name: "Body Lotion", description: "Moisturizes and soothes", category: "Kids", image: Baby2, link: "https://www.myntra.com" },
  { name: "Baby Moisturizing Cream", description: "For soft and healthy skin", category: "Kids", image: Baby3, link: "https://www.myntra.com" },
  { name: "Skin Healing Cream", description: "Repairs and protects skin", category: "Kids", image: Baby4, link: "https://www.myntra.com" },
  { name: "Nourishing Massage Oil", description: "Keeps skin soft and smooth", category: "Kids", image: Baby5, link: "https://www.myntra.com" }
];

const Products = () => {
  const [favorites, setFavorites] = useState([]);
  const [flippedStates, setFlippedStates] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.name]: false }), {})
  );

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    window.dispatchEvent(new Event("storage"));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.name === product.name)) {
        return prevFavorites.filter((fav) => fav.name !== product.name);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  const toggleFlip = (productName) => {
    setFlippedStates((prevStates) => ({
      ...prevStates,
      [productName]: !prevStates[productName],
    }));
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Dermatologist-Backed Recommendations</h2>
        {["Women", "Men", "Kids"].map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {products
                .filter((product) => product.category === category)
                .map((product) => {
                  const isFavorite = favorites.some((fav) => fav.name === product.name);
                  return (
                    <div key={product.name} className="relative w-48 h-64">
                      <div
                        className={`w-full h-full rounded-lg shadow-lg transition-transform transform ${flippedStates[product.name] ? 'rotate-y-180' : ''} relative`}
                      >
                        {!flippedStates[product.name] ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
                            <p className="text-gray-800 text-center px-4">{product.description}</p>
                          </div>
                        )}
                      </div>
                      <div className="absolute top-2 right-2 flex flex-col space-y-2">
                        <button
                          title="Add to Favorites"
                          onClick={() => toggleFavorite(product)}
                          className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transition ${
                            isFavorite ? "bg-black text-white" : "bg-white text-gray-600 hover:bg-black hover:text-white"
                          }`}
                        >
                          <IonIcon icon={starOutline} size="large" />
                        </button>
                        <button
                          title="Flip"
                          onClick={() => toggleFlip(product.name)}
                          className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full text-gray-600 hover:bg-black hover:text-white transition"
                        >
                          <IonIcon icon={repeatOutline} size="large" />
                        </button>
                      </div>
                      <a href={product.link} target="_blank" rel="noopener noreferrer" className="block mt-2 text-lg font-medium text-gray-800 text-center hover:text-blue-500">
                        {product.name}
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
