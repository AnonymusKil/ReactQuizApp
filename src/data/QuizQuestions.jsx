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
    options: ["A) useEffect", "B) useState", "C) useContext", "D) useReducer"],
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
export default questions;
