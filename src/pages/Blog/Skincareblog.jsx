import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Skin1 from "../../assets/Skin1.jpeg";
import Skin2 from "../../assets/Skin2.jpeg";
import Skin3 from "../../assets/Skin3.jpeg";
import Skin4 from "../../assets/Skin4.jpeg";
import Skin5 from "../../assets/Skin5.jpeg";
import Skin6 from "../../assets/Skin6.jpeg";

const images = [Skin1, Skin2, Skin3, Skin4, Skin5, Skin6];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Skincareblog = () => {
  return (
    <div className="min-h-screen bg-[#F4ECE3]">
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-[1000px] mx-auto p-6 text-black  "
      >
        {/* Header */}
        <motion.div
          variants={fadeIn}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-between items-center border-b border-black pb-2"
        >
          <h4 className="font-bold text-sm tracking-widest">SELF CARE</h4>
          <h4 className="font-bold text-sm tracking-widest">IRENE</h4>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeIn}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center text-3xl md:text-4xl font-bold mt-4"
        >
          AT HOME SPA DAY
        </motion.h1>

        {/* Images Grid */}
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Spa ${index + 1}`}
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
              title: "Body",
              points: [
                "Exfoliate with a coffee scrub",
                "Try a moisturizing body mask",
                "Take a warm bath with Epsom salts and essential oils",
                "Moisturize with a rich body butter",
                "Use a dry brush to boost circulation",
              ],
            },
            {
              title: "Face",
              points: [
                "Cleanse thoroughly and exfoliate",
                "Apply a soothing face mask (like a clay or hydrating mask)",
                "Use a jade roller or gua sha for a facial massage",
                "Moisturize and apply a serum",
              ],
            },
            {
              title: "Relaxation",
              points: [
                "Light candles",
                "Brew chamomile or mint tea",
                "Play calming music",
                "Read a book or meditate",
              ],
            },
            {
              title: "Hair",
              points: [
                "Apply a deep conditioning mask",
                "Gently massage scalp with fingertips",
                "Rinse with cool water to seal in shine",
                "Try a coconut or argan oil mask",
              ],
            },
            {
              title: "Hand & Foot",
              points: [
                "Soak hands and feet in warm, soapy water",
                "Exfoliate with a gentle scrub",
                "Moisturize and massage in a rich cream or oil",
                "Finish with a nail and cuticle care routine",
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

export default Skincareblog;
