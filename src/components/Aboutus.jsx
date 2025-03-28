import React, { useEffect, useState, useRef } from "react";
import collection1 from "../assets/collection1.jpeg";
import collection2 from "../assets/collection2.jpg";
import collection3 from "../assets/collection3.jpg";

const AboutUs = () => {
  const sections = [
    {
      title: "About Beautyverse",
      description:
        "Beautyverse uses advanced AI to analyze your skin type and concerns, such as acne, dryness, or sensitivity. Based on this, we recommend personalized products like cleansers, serums, and moisturizers to cater to your unique needs.",
      imageUrl: collection1,
    },
    {
      title: "Makeup Suggestions",
      description:
        "Whether it’s a casual outing, a professional event, or a glamorous party, Beautyverse curates makeup recommendations tailored to your skin tone, features, and the occasion. From foundations to lip colors and eyeshadows, we guide you.",
      imageUrl: collection2,
    },
    {
      title: "Personalized Skincare Routine",
      description:
        "Beautyverse crafts morning and evening skincare routines tailored to your lifestyle and skin goals. Each routine includes step-by-step guidance with products suited to your skin’s needs, such as hydrating serums or nighttime treatments.",
      imageUrl: collection3,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about-section" ref={sectionRef} className={`py-12 bg-white py-20 fade-in ${isVisible ? "visible" : ""}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Why Beautyverse?
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="relative w-[375px] h-[550px] rounded-lg overflow-hidden shadow-lg mx-auto group"
            >
              {/* Background Image */}
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Enhanced Shiny Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-shine" />
              </div>

              {/* Text Overlay with Perfect Spacing */}
              <div className="absolute top-[35px] bottom-[35px] left-[35px] right-[35px] bg-black/80 text-white p-6 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xl leading-relaxed tracking-wide">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
          }

          @keyframes shine {
            0% {
              transform: translate(-120%, -120%) rotate(30deg);
            }
            100% {
              transform: translate(120%, 120%) rotate(30deg);
            }
          }
          .animate-shine {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              120deg,
              transparent 25%,
              rgba(255, 255, 255, 1) 50%,
              transparent 75%
            );
            animation: shine 0.8s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
