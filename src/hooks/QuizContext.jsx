import { createContext, useContext, useState } from "react";
import questions from "../data/QuizQuestions";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [color, setColor] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selectedAnswer) => {
    const current = questions[currentQuestionIndex];
    setIsDisabled(true);
    setSelectedAnswer(selectedAnswer);

    if (selectedAnswer === current.correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
  };

  const showNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress((prev) =>
        currentQuestionIndex === questions.length - 2 ? 100 : prev + 20
      );
      setColor(!color);
    } else {
      setProgress(100);
    }

    setSelectedAnswer(null);
    setIsDisabled(false);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        score,
        progress,
        selectedAnswer,
        isDisabled,
        color,
        handleAnswer,
        showNextQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
