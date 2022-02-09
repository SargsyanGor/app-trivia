import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Quizzes from "./pages/quizzes/Quizzes";
import QuizCompleted from "./pages/quizzCompeted/QuizzCompleted";

function App() {
  const [questionsList, setListOfQuestions] = useState([]);
  const navigate = useNavigate();

  const setDataCallback = (childData) => {
    setListOfQuestions(childData);
    navigate("/quizzes");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage dataReceivedSuccess={setDataCallback} />}
      />
      <Route
        path="quizzes"
        element={<Quizzes questionsData={questionsList} />}
      />
      <Route
        path="/quizz-completed/:answers_count/:total_questions"
        element={<QuizCompleted />}
      />
    </Routes>
  );
}

export default App;
