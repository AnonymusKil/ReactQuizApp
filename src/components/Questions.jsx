import { useState } from "react";

function CreateQuestions() {
  const questions = [
    {
      question: "What is JSX in React?",
      options: [
        "A) A JavaScript function",
        "B) A syntax extension for JavaScript",
        "C) A CSS framework",
        "D) A JavaScript method",
      ],
      correctAnswer: "B) A syntax extension for JavaScript",
    },
    {
      question: "How do you create a functional component in React?",
      options: [
        "A) function Component() {}",
        "B) class Component extends React.Component {}",
        "C) React.createElement(Component) {}",
        "D) const Component = React.Component()",
      ],
      correctAnswer: "A) function Component() {}",
    },
    {
      question: "What hook is used to manage state in functional components?",
      options: [
        "A) useEffect",
        "B) useState",
        "C) useContext",
        "D) useReducer",
      ],
      correctAnswer: "B) useState",
    },
    {
      question: "What is the purpose of the useEffect hook in React?",
      options: [
        "A) To manage component state",
        "B) To handle side effects like data fetching or DOM updates",
        "C) To create components",
        "D) To handle user input",
      ],
      correctAnswer:
        "B) To handle side effects like data fetching or DOM updates",
    },
    {
      question: "What is the difference between props and state in React?",
      options: [
        "A) props are used for managing component state, and state is used to pass data between components",
        "B) props are immutable and passed to a component, while state is mutable and managed within a component",
        "C) state is used for styling, and props are used for functionality",
        "D) There is no difference between props and state",
      ],
      correctAnswer:
        "B) props are immutable and passed to a component, while state is mutable and managed within a component",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [progress, setProgress] = useState(0); // To track progress
  const [color, setColor] = useState(false); // To toggle button color
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    const current = questions[currentQuestionIndex];
    setIsDisabled(true); // Disable buttons after selection

    if (selectedAnswer === current.correctAnswer) {
      setScore((prevScore) => prevScore + 1); // Increment score for correct answer
    } else {
      setScore((prevScore) => prevScore - 1); // Decrement score for incorrect answer
    }
  };

  // Show the next question and update progress
  const showNextQuestion = () => {
    setIsDisabled(false); // Enable buttons for the next question

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress((prevProgress) => {
        return currentQuestionIndex === questions.length - 2
          ? 100
          : prevProgress + 20;
      });
      setColor(!color); // Toggle button color
    } else {
      setFeedback("Quiz is over!");
      setProgress(100); // Ensure progress reaches 100% on last question
    }
  };

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center my-8 drop-shadow-lg">
        React Quiz Challenge 🚀
      </h1>
      <div>
        <h2>
          Question {currentQuestionIndex + 1} out of {questions.length}
        </h2>

        <h2>{questions[currentQuestionIndex].question}</h2>
        <div className="mt-4">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="block py-2 px-4 mb-2 bg-gray-700 text-white rounded-lg w-full"
              disabled={isDisabled} // Disable the options after an answer is selected
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={showNextQuestion}
          style={{ background: color ? "green" : "gray" }}
          disabled={!isDisabled} // Disable the continue button until an answer is selected
        >
          Continue
        </button>
      </div>

      <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {feedback && <p>{feedback}</p>}
      <h2 className="text-2xl font-bold mt-4">Your Score: {score}</h2>
    </div>
  );
}

export default CreateQuestions;
