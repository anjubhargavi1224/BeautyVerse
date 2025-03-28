import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Import images from assets
import Make1 from "../../assets/Make1.jpeg";
import Make2 from "../../assets/Make2.jpeg";
import Make3 from "../../assets/Make3.jpeg";
import Make4 from "../../assets/Make4.jpeg";
import Make5 from "../../assets/Make5.jpeg";
import Make6 from "../../assets/Make6.jpeg";

const images = [Make1, Make2, Make3, Make4, Make5, Make6];
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Makeupblog = () => {
  return (
    <div className="min-h-screen bg-[#F4ECE3]">
      <Navbar />

    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-[800px] mx-auto bg-[#F4ECE3] p-6 text-black"
    >
      {/* Header */}
      <motion.div
        variants={fadeIn}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-between items-center border-b border-black pb-2"
      >
        <h4 className="font-bold text-sm tracking-widest">BEAUTY TIPS</h4>
        <h4 className="font-bold text-sm tracking-widest">GLAM GUIDE</h4>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={fadeIn}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center text-3xl md:text-4xl font-bold mt-4"
      >
        MAKEUP TIPS FOR A FLAWLESS LOOK
      </motion.h1>

      {/* Images Grid */}
      <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Makeup ${index + 1}`}
            className="w-full h-28 object-cover rounded-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index * 0.1 } }
            }}
          />
        ))}
      </motion.div>

      {/* Content Sections */}
      <div className="mt-8 space-y-6">
        {[
          {
            title: "Base",
            points: [
              "Start with a hydrating primer for a smooth finish",
              "Use a color-correcting concealer to hide imperfections",
              "Apply foundation with a damp beauty blender for even coverage",
              "Set with a lightweight translucent powder",
            ],
          },
          {
            title: "Eyes",
            points: [
              "Prime your eyelids for long-lasting eyeshadow",
              "Blend eyeshadow in a gradient for depth and dimension",
              "Use eyeliner to define your lash line",
              "Finish with volumizing mascara for fuller lashes",
            ],
          },
          {
            title: "Lips",
            points: [
              "Exfoliate lips with a sugar scrub before applying lipstick",
              "Outline lips with a liner for a defined look",
              "Choose a matte or glossy finish depending on your preference",
              "Use a setting spray to keep lipstick in place",
            ],
          },
          {
            title: "Contour & Highlight",
            points: [
              "Apply bronzer to define your cheekbones and jawline",
              "Use a light highlighter on cheekbones, nose, and brow bones",
              "Blend well to avoid harsh lines",
              "Choose a cream or powder formula based on skin type",
            ],
          },
          {
            title: "Finishing Touches",
            points: [
              "Set makeup with a long-lasting setting spray",
              "Blot excess oil with a tissue or blotting paper",
              "Carry a compact powder for touch-ups throughout the day",
              "Opt for natural-looking false lashes for extra glam",
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col md:flex-row md:justify-between"
          >
            <h2 className="text-lg font-bold">{section.title}</h2>
            <ul className="list-disc list-inside text-sm md:w-[65%]">
              {section.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: i * 0.1 } },
                  }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <Footer />
    </div>
  );
};

export default Makeupblog;
