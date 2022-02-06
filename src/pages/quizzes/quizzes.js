import React from "react";
import styles from "./quizzes.module.scss";

const Quizzes = (props) => {
  console.log(props.questionsData);

  return (
    <main className={styles.gs_quizzes}>
      <h2 className="gs_title tw__text-center tw__mb-2">Questions 01</h2>
      <div className="tw__text-center">
        <span
          className={
            `${styles.difficulty_level} ${styles.gs_green}` +
            ` tw__inline-flex tw__items-center tw__justify-center`
          }
        >
          Easy
        </span>
      </div>
      <div className="tw__flex tw__justify-center">
        <p className={styles.gs_question + ` tw__text-center`}>
          What common name is given to the medial condition, tibial stress
          syndrome (MTSS)?
        </p>
      </div>
      <div className={styles.gs_answers_block + ` tw__flex tw__justify-center`}>
        <button>Carpal Tunnel</button>
        <button>Knee</button>
        <button>Shin splints</button>
        <button>Tennis Elbow</button>
      </div>
    </main>
  );
};

export default Quizzes;
