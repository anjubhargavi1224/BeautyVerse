import React, { useState, useEffect, useRef } from "react";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";

const featuresData = [
  {
    img: feature1,
    title: "Guaranteed PURE",
    description:
      "Promotes a balance between beauty and wellness with natural formulations. Experience the power of pure ingredients crafted for your skin’s needs.",
  },
  {
    img: feature2,
    title: "Completely Cruelty-Free",
    description:
      "Supports a global movement toward humane and ethical skincare practices. Together, we can promote a world where beauty doesn’t come at a cost.",
  },
  {
    img: feature3,
    title: "Ingredient Sourcing",
    description:
      "Encourages mindful skincare habits by tracking product life cycles. Build a routine that values safety, hygiene, and maximum benefits.",
  },
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Updates state when entering/exiting viewport
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-12 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={feature.img} alt={feature.title} className="h-20 w-20 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
