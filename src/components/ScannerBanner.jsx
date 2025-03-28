import React, { useEffect, useState, useRef } from "react";
import Biometric1 from "../assets/biometric1.jpg"; // Replace with your actual image path
import Biometric2 from "../assets/biometric2.jpeg"; // Replace with your second image path

const ScannerBanner = () => {
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
    <>
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
              transform: translate(-150%, -150%) rotate(30deg);
              opacity: 1;
            }
            100% {
              transform: translate(150%, 150%) rotate(30deg);
              opacity: 0;
            }
          }

          .shine-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              30deg,
              rgba(255, 255, 255, 0) 40%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0) 60%
            );
            opacity: 0;
            pointer-events: none;
            filter: brightness(1.8);
          }

          .group:hover .shine-effect {
            animation: shine 0.8s ease-out;
          }

          .group:hover img {
            transform: scale(1.1);
          }
        `}
      </style>

      <div
        ref={sectionRef}
        className={`w-full flex flex-col md:flex-row gap-6 px-8 py-32 fade-in ${isVisible ? "visible" : ""}`}
      >
        {/* Left Section - 65% Width */}
        <div className="relative group w-full md:w-[65%] h-[400px] bg-cover bg-center overflow-hidden">
          <img
            src={Biometric1}
            alt="Facial Scanner"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute shine-effect"></div>
          <div className="relative z-10 p-6 text-white">
            <h2 className="text-xl font-semibold">SCAN YOUR FACE</h2>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Achieve flawless skin with our smart facial scanner
            </h1>
            <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">Explore More</button>
          </div>
        </div>

        {/* Right Section - 35% Width */}
        <div className="relative group w-full md:w-[35%] h-[400px] flex flex-col items-center justify-center bg-cover bg-center overflow-hidden">
          <img
            src={Biometric2}
            alt="Virtual Makeup Try-on"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0"></div>
          <div className="absolute shine-effect"></div>
          <div className="relative z-10 text-black text-center">
            <h2 className="text-xl font-semibold">Virtual Makeup Try-on</h2>
            <p className="mt-2">Scan, analyze, and shop confidently for products that enhance your beauty.</p>
            <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded">Shop Sale</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScannerBanner;
