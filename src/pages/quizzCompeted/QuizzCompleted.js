import React from "react";
import styles from "./quizzCompleted.module.scss";
import { useNavigate, useParams } from "react-router-dom";

const QuizCompleted = () => {
  const param = useParams();
  const navigate = useNavigate();
  return (
    <main className={styles.gs_quizz_completed}>
      <h2 className="gs_title tw__text-center">Thank You</h2>
      <div className="tw__text-center">
        <p className={styles.gs_score_board}>
          Your Score {param.answers_count} / {param.total_questions}
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className={styles.gs_back_home}
        >
          Back to home
        </button>
      </div>
    </main>
  );
};

export default QuizCompleted;
