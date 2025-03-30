import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  { id: "gender", question: "What Is Your Gender?", options: ["Male", "Female"] },
  { id: "age", question: "What Is Your Age Group?", options: ["Teen", "20s", "30s", "40+"] },
  { id: "skinType", question: "What Is Your Skin Type?", options: ["Oily", "Dry", "Combination", "Normal"] },
  { id: "sensitivity", question: "Is Your Skin Sensitive?", options: ["Yes", "No"] },
  { id: "skinIssues", question: "Do You Have Any Skin Issues?", options: ["Acne", "Dark Spots", "Wrinkles", "None"] },
  { id: "hydration", question: "How Does Your Skin Feel Most of the Time?", options: ["Oily", "Dry", "Balanced"] },
  { id: "pores", question: "How Visible Are Your Pores?", options: ["Large", "Small", "Barely Visible"] },
  { id: "texture", question: "How Would You Describe Your Skin Texture?", options: ["Smooth", "Rough", "Uneven"] },
  { id: "routine", question: "How Often Do You Follow a Skin Routine?", options: ["Daily", "Occasionally", "Rarely", "Never"] },
  { id: "sunExposure", question: "How Often Are You Exposed to the Sun?", options: ["Daily", "Occasionally", "Rarely"] },
  { id: "oiliness", question: "Do You Experience Oiliness During the Day?", options: ["Yes", "No"] },
  { id: "tightness", question: "Does Your Skin Feel Tight After Washing?", options: ["Yes", "No"] },
  { id: "breakouts", question: "Do You Experience Breakouts?", options: ["Often", "Sometimes", "Rarely", "Never"] },
  { id: "concern", question: "What’s Your Biggest Skincare Concern?", options: ["Aging", "Hydration", "Brightening", "None"] },
  { id: "products", question: "How Does Your Skin React to Skincare Products?", options: ["Sensitive", "Normal", "Resistant"] },
];

export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState({ skinType: "Normal", skinCondition: "Healthy" });

  const totalQuestions = questions.length;
  const progressPercentage = (currentStep / (totalQuestions - 1)) * 100;

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      determineSkinType();
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelect = (option) => {
    setAnswers({ ...answers, [questions[currentStep].id]: option });
  };

  const determineSkinType = () => {
    let skinType = "Normal";
    let skinCondition = "Healthy";

    const oilyIndicators = ["Oily", "Large", "Yes", "Often"];
    const dryIndicators = ["Dry", "Tight", "Rarely"];
    const sensitiveIndicators = ["Sensitive", "Yes"];
    const acneIndicators = ["Acne", "Breakouts", "Often"];

    const answerValues = Object.values(answers);

    if (oilyIndicators.some((val) => answerValues.includes(val))) {
      skinType = "Oily";
    } else if (dryIndicators.some((val) => answerValues.includes(val))) {
      skinType = "Dry";
    } else if (answerValues.includes("Balanced") && answerValues.includes("Combination")) {
      skinType = "Combination";
    }

    if (sensitiveIndicators.some((val) => answerValues.includes(val))) {
      skinCondition = "Sensitive";
    } else if (acneIndicators.some((val) => answerValues.includes(val))) {
      skinCondition = "Acne-Prone";
    } else if (answerValues.includes("Aging")) {
      skinCondition = "Aging";
    }

    setResult({ skinType, skinCondition });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Progress Bar */}
      <div className="w-full max-w-lg relative mb-6">
        <div className="flex justify-between text-gray-600 text-sm">
          <span>Skin Issues</span>
          <span>Skin Care</span>
          <span>Skin Type</span>
          <span>Complete</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Question Box */}
      {!submitted ? (
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-xl font-semibold text-center mb-4 text-blue-600">
            Welcome To Skin Quiz
          </h2>
          <p className="text-lg font-medium text-center mb-4">
            {questions[currentStep].question}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {questions[currentStep].options.map((option) => (
              <button
                key={option}
                className={`w-full p-3 border rounded-lg text-lg transition-all duration-200 ${
                  answers[questions[currentStep].id] === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-blue-600">Thank You!</h2>
          <p className="mt-4 text-lg">
            Your Skin Type: <strong>{result.skinType}</strong>
          </p>
          <p className="text-lg">
            Your Skin Condition: <strong>{result.skinCondition}</strong>
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      {!submitted && (
        <div className="flex justify-between w-full max-w-md mt-6">
          <button
            className={`p-3 px-6 rounded-lg text-white bg-gray-400 transition-all duration-200 ${
              currentStep === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500"
            }`}
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </button>
          <button
            className="p-3 px-6 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleNext}
          >
            {currentStep === totalQuestions - 1 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
