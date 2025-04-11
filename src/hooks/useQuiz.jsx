import { useState } from "react";
import questions from "../data/QuizQuestions"; // Example path for quiz data

function useQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [color, setColor] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  // Handle answer selection
  const handleAnswer = (selectedAnswer) => {
    const current = questions[currentQuestionIndex];
    setIsDisabled(true); // Disable buttons after selection

    if (selectedAnswer === current.correctAnswer) {
      setScore((prevScore) => prevScore + 1); // Increment score for correct answer
    } else {
      setScore((prevScore) => prevScore - 1); // Decrement score for incorrect answer
    }
  };

  // Handle showing the next question
  const showNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress((prevProgress) =>
        currentQuestionIndex === questions.length - 2 ? 100 : prevProgress + 20
      );
      setColor(!color); // Toggle button color
    } else {
      setProgress(100); // Ensure progress reaches 100% on last question
    }
    setSelectedAnswer(null); // Reset the selected answer for the next question
    setIsDisabled(false); // Enable buttons for the next question
  };

  return {
    currentQuestion,
    score,
    progress,
    selectedAnswer,
    isDisabled,
    color,
    handleAnswer,
    showNextQuestion,
  };
}

export default useQuiz;
