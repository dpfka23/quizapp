import { useState } from "react";
import quizData from "./data/quizData";
import Category from "./components/Category";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";
import './App.css';

const App = () => {
  const [category, setCategory] = useState(null);
  const [next, setNext] = useState(0);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleCategorySelect = (select) => {
    setCategory(select);
  };

  const handleNext = () => {
    setNext((prevNext) => prevNext + 1);
  };

  const handleFinish = (score) => {
    setFinished(true);
    setScore(score);
  };

  const handleRestart = () => {
    setCategory(null);
    setFinished(false);
    setNext(0);
    setScore(0);
  };

  return (
    <div>
      {!category && !finished && (
        <Category
          categories={quizData.categories}
          onSelect={handleCategorySelect}
        />
      )}
      {category && !finished && (
        <QuizPage
          category={category}
          quizdata={quizData.quizzes}
          currentQuestion={next}
          onNext={handleNext}
          onFinished={handleFinish}
        />
      )}
      {finished && <Results score={score} onRestart={handleRestart} />}
    </div>
  );
};

export default App;
