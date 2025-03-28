import React, { useState, useEffect, useRef } from "react";
import { IonIcon } from "@ionic/react";
import { starOutline, repeatOutline } from "ionicons/icons";

import product01 from "../assets/product01.jpg";
import product02 from "../assets/product02.jpg";
import product03 from "../assets/product03.jpg";
import product04 from "../assets/product04.jpg";
import product05 from "../assets/product05.jpg";
import product06 from "../assets/product06.jpg";
import product07 from "../assets/product07.jpg";
import product08 from "../assets/product08.jpg";
import product09 from "../assets/product09.jpg";
import product10 from "../assets/product10.jpg";


const products = [
  { name: "Facial Cleanser", image: product01, link: "#" },
  { name: "Bio-shroom Serum", image: product02, link: "#" },
  { name: "Caffeine Eye Cream", image: product03, link: "#" },
  { name: "Hydrating Face Mist", image: product04, link: "#" },
  { name: "Vitamin C Serum", image: product05, link: "#" },

  { name: "Aloe Vera Gel", image: product06, link: "#" },
  { name: "Rose Water Toner", image: product07, link: "#" },
  { name: "SPF 50 Sunscreen", image: product08, link: "#" },
  { name: "Charcoal Face Wash", image: product09, link: "#" },
  { name: "Tea Tree Oil", image: product10, link: "#" },

  { name: "Hair Growth Oil", image: product01, link: "#" },
  { name: "Lip Balm", image: product02, link: "#" },
  { name: "Moisturizing Lotion", image: product03, link: "#" },
  { name: "Baby Shampoo", image: product04, link: "#" },
  { name: "Kids Sunscreen", image: product, link: "#" },
];

const Products = () => {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false));
  const [menVisible, setMenVisible] = useState(false);
  const [kidsVisible, setKidsVisible] = useState(false);

  const menRef = useRef(null);
  const kidsRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === menRef.current) {
          if (entry.isIntersecting) {
            setMenVisible(true);
          } else {
            setMenVisible(false);
          }
        } else if (entry.target === kidsRef.current) {
          if (entry.isIntersecting) {
            setKidsVisible(true);
          } else {
            setKidsVisible(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (menRef.current) observer.observe(menRef.current);
    if (kidsRef.current) observer.observe(kidsRef.current);

    return () => {
      if (menRef.current) observer.unobserve(menRef.current);
      if (kidsRef.current) observer.unobserve(kidsRef.current);
    };
  }, []);

  const handleFlip = (index) => {
    setFlipped((prev) => prev.map((flip, i) => (i === index ? !flip : flip)));
  };

  return (
    <section id="products-section" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Women Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Women</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {products.slice(0, 5).map((product, index) => (
            <ProductCard key={index} product={product} index={index} flipped={flipped} handleFlip={handleFlip} />
          ))}
        </div>

        {/* Men Section (With Fade-in Effect) */}
        <h2 ref={menRef} className="text-3xl font-bold text-gray-900 mb-4">Men</h2>
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16 transition-opacity duration-700 ease-in-out transform ${menVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {products.slice(5, 10).map((product, index) => (
            <ProductCard key={index + 5} product={product} index={index + 5} flipped={flipped} handleFlip={handleFlip} />
          ))}
        </div>

        {/* Kids Section (With Fade-in Effect) */}
        <h2 ref={kidsRef} className="text-3xl font-bold text-gray-900 mb-4">Kids</h2>
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 transition-opacity duration-700 ease-in-out transform ${kidsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {products.slice(10, 15).map((product, index) => (
            <ProductCard key={index + 10} product={product} index={index + 10} flipped={flipped} handleFlip={handleFlip} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index, flipped, handleFlip }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-64 perspective-1000">
        <div className={`relative w-full h-full transition-transform duration-500 transform ${flipped[index] ? "rotate-y-180" : ""}`} style={{ transformStyle: "preserve-3d" }}>
          {/* Front Side */}
          <div className="absolute w-full h-full shadow-lg rounded-lg bg-white" style={{ backfaceVisibility: "hidden", transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)" }}>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-red-500 flex items-center justify-center text-white text-lg font-bold rounded-lg" style={{ backfaceVisibility: "hidden", transform: flipped[index] ? "rotateY(0deg)" : "rotateY(180deg)" }}>
            {product.name}
          </div>

          {/* Buttons */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2">
            <button className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full text-gray-600 hover:bg-black hover:text-white transition">
              <IonIcon icon={starOutline} size="large" />
            </button>
            <button onClick={() => handleFlip(index)} className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full text-gray-600 hover:bg-black hover:text-white transition">
              <IonIcon icon={repeatOutline} size="large" />
            </button>
          </div>
        </div>
      </div>
      <h3 className="mt-2 text-lg font-medium text-gray-800">
        <a href={product.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{product.name}</a>
      </h3>
    </div>
  );
};

export default Products;
