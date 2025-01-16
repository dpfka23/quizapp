import { useState } from "react";

const QuizPage = ({ category, quizdata, onFinished }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const quizArr = quizdata.filter((data) => data.category === category);
  const currentQuiz = quizArr[currentIdx];

  const handleAnswer = (answer) => {
    const result = (answer === currentQuiz.correct) ? score + 20 : score;
    setScore(result);
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizArr.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      onFinished(score);
    }
  };

  return (
    <div className="quiz-page">
      <p>{currentIdx + 1}/{quizArr.length}</p>
      <p>{currentQuiz.question}</p>
      <div className="choices">
        {currentQuiz.choices.map((txt, idx) => (
          <button key={idx} onClick={() => handleAnswer(txt)}>
            {txt}
          </button>
        ))}
      </div>
      <button className="next" onClick={handleNext}>다음</button>
    </div>
  );
};

export default QuizPage;
