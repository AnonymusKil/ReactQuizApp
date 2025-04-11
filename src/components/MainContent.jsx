import React from "react";
import { motion } from "framer-motion";
import useQuiz from "../hooks/useQuiz"; // Import your custom hook

function MainContent() {
  const {
    currentQuestion,
    score,
    progress,
    selectedAnswer,
    isDisabled,
    color,
    handleAnswer,
    showNextQuestion,
  } = useQuiz(); // Use the custom hook

  return (
    <section className="mx-auto px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-purple-500 my-8 drop-shadow-lg text-start lg:text-center leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {currentQuestion.question}
      </motion.h1>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <aside className="flex flex-col rounded-xl p-4 gap-4 lg:w-[40%] mx-auto border border-gray-200">
          {/* Dynamically render options */}
          {currentQuestion.options.map((option, index) => {
            return (
              <button
                key={index}
                className={`py-3 px-5 rounded-md hover:bg-gray-200 transition duration-300 ${
                  selectedAnswer === option
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
                onClick={() => handleAnswer(option)}
                disabled={isDisabled}
              >
                {option}
              </button>
            );
          })}
        </aside>
      </motion.div>

      <motion.div
        className="text-center lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md w-full max-w-xs mx-auto shadow-md transition duration-300"
          onClick={showNextQuestion} // Go to next question
          style={{ background: color ? "green" : "gray" }}
          disabled={!isDisabled} // Disable the button until an option is selected
        >
          CONTINUE
        </button>
      </motion.div>
    </section>
  );
}

export default MainContent;
