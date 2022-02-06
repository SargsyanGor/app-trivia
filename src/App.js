import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Quizzes from "./pages/quizzes/quizzes";

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
    </Routes>
  );
}

export default App;
