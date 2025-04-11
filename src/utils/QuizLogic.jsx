// utils/quizLogic.js

// Function to check if the answer is correct or incorrect
export const checkAnswer = (selectedAnswer, correctAnswer) => {
    return selectedAnswer === correctAnswer;
  };
  
  // Function to calculate the new score
  export const calculateScore = (prevScore, isCorrect) => {
    return isCorrect ? prevScore + 1 : prevScore - 1;
  };
  
  // Function to calculate progress
  export const calculateProgress = (currentQuestionIndex, totalQuestions) => {
    return currentQuestionIndex === totalQuestions - 1 ? 100 : (currentQuestionIndex / totalQuestions) * 100;
  };
  