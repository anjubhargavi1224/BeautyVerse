import React, { useState } from "react";

const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });

  const faqs = [
    { question: "What is Beautyverse?", answer: "Beautyverse is a personalized beauty platform that uses advanced AI and dermatologist-backed insights to recommend skincare products, create tailored routines, and suggest makeup looks based on your skin type, concerns, and preferences." },
    { question: "How does Beautyverse analyze my skin?", answer: "Our platform uses AI-powered analysis to evaluate your skin type, conditions (like acne or dryness), and overall needs. You can provide details through a questionnaire or upload photos for more accurate recommendations." },
    { question: "Are the recommendations backed by experts?", answer: "Yes, all skincare and makeup recommendations are developed with insights from dermatologists and beauty professionals to ensure they are safe, effective, and suited to your unique needs." },
    { question: "Can Beautyverse adapt to changes in my skin over time?", answer: "Absolutely! Beautyverse updates your recommendations and routines based on changes in your skin condition, lifestyle, or environment, ensuring your care evolves with you." },
    { question: "Does Beautyverse offer makeup recommendations for specific occasions?", answer: "Yes, Beautyverse curates makeup suggestions for various events, such as casual outings, professional meetings, and special occasions like weddings, tailored to your skin tone, features, and preferences." },
    { question: "Are the products recommended by Beautyverse easy to find?", answer: "All recommended products are sourced from trusted brands and are widely available online or in stores, making it easy for you to access them." },
    { question: "Does Beautyverse offer a skincare routine?", answer: "Yes, we create personalized morning and evening routines, guiding you on which products to use and when for optimal results." },
    { question: "Can I track my progress with Beautyverse?", answer: "Yes, our platform allows you to monitor your skin's progress over time, helping you see how your personalized routine improves your skin." },
    { question: "Is Beautyverse suitable for all skin types?", answer: "Absolutely! Beautyverse caters to all skin types, including sensitive, oily, dry, and combination skin, offering customized solutions for everyone." },
    { question: "How can I get started with Beautyverse?", answer: "Simply sign up, complete a quick questionnaire about your skin or provide a picture of your face to analyze and preferences, and let Beautyverse create a personalized beauty plan just for you!" }
];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setFormData({ name: "", email: "", question: "" });
    }, 2000);
  };

  return (
    <section id="faq-section" className="max-w-10xl mx-auto p-6 py-20">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
        
        {/* FAQ List */}
        {faqs.map((faq, index) => (
          <details key={index} className="border-b py-3">
            <summary className="text-lg font-semibold cursor-pointer flex justify-between items-center">
              {faq.question}
              <span className="text-gray-600">+</span>
            </summary>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </details>
        ))}

        {/* Ask Your Query Button at the Bottom */}
        <div className="w-full p-3 border border-gray-300 rounded-lg mt-6 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-600 w-full text-lg font-semibold"
          >
            Ask Your Query
          </button>
        </div>
      </div>

      {/* Ask Question Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 mt-10 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transition transform scale-100">
            <h3 className="text-2xl font-semibold text-center mb-4">
              {isSubmitted ? "Query Received" : "Ask Your Query"}
            </h3>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="question"
                  placeholder="Your Question"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="3"
                  value={formData.question}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-lg font-semibold text-green-600">🎉 Thank you for your question!</p>
                <p className="text-gray-600">We will get back to you soon. 😊</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQ;