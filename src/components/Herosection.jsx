import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import womenhome from "../assets/womenhome.jpg";
import menhome from "../assets/menhome.jpeg";
import kidshome from "../assets/kidshome.jpeg";

const slides = [
  {
    image: womenhome,
    title: "Reveal The Beauty of Skin",
    description:
      "Beautyverse: A virtual universe revolutionizing beauty experiences through immersive technology and personalized solutions.",
    buttonText: "Quick Survey",
  },
  {
    image: menhome,
    title: "Reveal The Beauty of Skin",
    description:
      "Beautyverse: A virtual universe revolutionizing beauty experiences through immersive technology and personalized solutions.",
    buttonText: "Quick Survey",
  },
  {
    image: kidshome,
    title: "Reveal The Beauty of Skin",
    description:
      "Beautyverse: A virtual universe revolutionizing beauty experiences through immersive technology and personalized solutions.",
    buttonText: "Quick Survey",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="hero-section" className="your-hero-section-styles">
      <section className="relative w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-screen">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-black/60 text-white px-12 py-12 rounded-lg h-[70vh] ml-10 flex flex-col justify-start">
                  <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    {slide.description}
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={() => navigate("/questionnaire")}
                      className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default HeroSection;
