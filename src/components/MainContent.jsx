import { motion } from "framer-motion";
import { useQuiz } from "../hooks/QuizContext";

function MainContent() {
  const {
    currentQuestion,
    selectedAnswer,
    isDisabled,
    color,
    handleAnswer,
    showNextQuestion,
    labeledOptions,
  } = useQuiz();

  return (
    <section className="mx-auto px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-purple-800 my-8 drop-shadow-lg text-start lg:text-center leading-tight"
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
        <aside className="flex flex-col rounded-xl p-4 gap-4 lg:w-[40%] lg:mx-auto border border-gray-200">
          {labeledOptions.map(({ letter, text, fullOption }, index) => {
            const isCorrect = fullOption === currentQuestion.correctAnswer;
            const isSelected = fullOption === selectedAnswer;

            let bgColor = "bg-white text-gray-800";
            if (isDisabled) {
              if (isCorrect) bgColor = "bg-green-500 text-white";
              else if (isSelected) bgColor = "bg-red-500 text-white";
              else bgColor = "bg-gray-100 text-gray-700";
            }

            return (
              <button
                key={index}
                className={`py-3 px-5 rounded-md flex items-center justify-between gap-2 border hover:bg-gray-100 transition duration-300 ${bgColor}`}
                onClick={() => handleAnswer(fullOption)}
                disabled={isDisabled}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="font-bold">{letter})</span>
                  <span>{text}</span>
                </div>
                {isDisabled && isCorrect && <span>✅</span>}
                {isDisabled && isSelected && !isCorrect && <span>❌</span>}
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
          onClick={showNextQuestion}
          style={{ background: color ? "green" : "gray" }}
          disabled={!isDisabled}
        >
          CONTINUE
        </button>
      </motion.div>
    </section>
  );
}

export default MainContent;
