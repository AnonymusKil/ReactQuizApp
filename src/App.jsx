import "./App.css";
import Main from "./components/Main"; // Assuming Main uses the Quiz context
import { QuizProvider } from "./hooks/QuizContext"; // Import QuizProvider

function App() {
  return (
    <QuizProvider>
      {" "}
      {/* Wrap your components with QuizProvider */}
      <Main />
    </QuizProvider>
  );
}

export default App;
