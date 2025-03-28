import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Import images from assets (Keeping spa images)
import Derma1 from "../../assets/Derma1.jpeg";
import Derma2 from "../../assets/Derma2.jpeg";
import Derma3 from "../../assets/Derma3.jpeg";
import Derma4 from "../../assets/Derma4.jpeg";
import Derma5 from "../../assets/Derma5.jpeg";
import Derma6 from "../../assets/Derma6.jpeg";



const images = [Derma1, Derma2, Derma3, Derma4, Derma5, Derma6];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  
  const Dermatologyblog = () => {
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
          <h4 className="font-bold text-sm tracking-widest">SKIN HEALTH</h4>
          <h4 className="font-bold text-sm tracking-widest">DR. SMITH</h4>
        </motion.div>
  
        {/* Title */}
        <motion.h1
          variants={fadeIn}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center text-3xl md:text-4xl font-bold mt-4"
        >
          EXPERT DERMATOLOGY CONSULTATIONS
        </motion.h1>
  
        {/* Images Grid */}
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Dermatology ${index + 1}`}
              className="w-full h-28 object-cover rounded-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              }}
            />
          ))}
        </motion.div>
  
        {/* Content Sections */}
        <div className="mt-8 space-y-6">
          {[
            {
              title: "Initial Consultation",
              points: [
                "Schedule an appointment with a board-certified dermatologist.",
                "Discuss your skin concerns and medical history.",
                "Undergo a comprehensive skin examination.",
                "Receive personalized recommendations based on your skin type.",
              ],
            },
            {
              title: "Diagnosis & Treatment Plan",
              points: [
                "Obtain a clear diagnosis of any skin conditions.",
                "Review tailored treatment options.",
                "Learn about both medical and cosmetic solutions.",
                "Develop a long-term skincare plan with expert guidance.",
              ],
            },
            {
              title: "Advanced Procedures",
              points: [
                "Explore laser treatments for skin resurfacing.",
                "Consider chemical peels and microdermabrasion for exfoliation.",
                "Review minimally invasive anti-aging procedures.",
                "Receive post-procedure care instructions.",
              ],
            },
            {
              title: "Ongoing Care & Follow-Up",
              points: [
                "Schedule regular check-ups to monitor progress.",
                "Adjust treatment plans as your skin improves.",
                "Stay informed about new skincare technologies.",
                "Maintain a personalized at-home skincare routine.",
              ],
            },
            {
              title: "Expert Tips & Advice",
              points: [
                "Adopt proven skincare habits recommended by professionals.",
                "Emphasize sun protection and daily SPF use.",
                "Understand the role of nutrition and lifestyle on skin health.",
                "Get guidance on managing sensitive or reactive skin.",
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
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.6, delay: i * 0.1 },
                      },
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
  
  export default Dermatologyblog;


