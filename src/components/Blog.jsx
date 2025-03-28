import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import watersplash from "../assets/watersplash.jpeg";
import makeup from "../assets/makeup.jpeg";
import derma from "../assets/derma.jpeg";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog-section" className="your-hero-section-styles">
      <style>
        {`
          @keyframes shine {
            0% {
              transform: translate(-150%, -150%) rotate(45deg);
              opacity: 1;
            }
            100% {
              transform: translate(150%, 150%) rotate(45deg);
              opacity: 0;
            }
          }

          .shine-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 150%;
            height: 150%;
            background: linear-gradient(
              45deg,
              rgba(255, 255, 255, 0) 40%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0) 60%
            );
            opacity: 0;
            pointer-events: none;
          }

          .group:hover .shine-effect {
            animation: shine 1s ease-out;
          }
        `}
      </style>

      <div
        ref={sectionRef}
        className={`py-32 px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { src: watersplash, alt: "Skincare", text: "Skincare", link: "/skincare" },
            { src: makeup, alt: "Makeup", text: "Makeup", link: "/makeup" },
            { src: derma, alt: "Dermatologist Consultations", text: "Dermatologist Consultations", link: "/dermatologist" }
          ].map((item, index) => (
            <Link to={item.link} key={index} className="relative group cursor-pointer overflow-hidden">
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute shine-effect"></div>
              </div>
              <div className="mt-6 text-2xl font-semibold text-green-800 transition-transform duration-300 group-hover:scale-110">
                {item.text}
              </div>
              <div className="text-xl text-gray-500 mt-2 font-semibold">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
