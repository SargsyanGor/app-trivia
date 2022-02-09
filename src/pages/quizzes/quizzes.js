import React, { useEffect, useState } from "react";
import styles from "./quizzes.module.scss";

const Quizzes = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const questionsList = props.questionsData.results;

  useEffect(() => {
    const result = getCurrentQuestionData(questionIndex);
    setCurrentQuestion(result);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionIndex]);

  const answerHandle = (answer = null) => {
    if (answer === true) {
      setCorrectAnswersCount((previousIndex) => previousIndex + 1);
    }
    setQuestionIndex((previousIndex) => previousIndex + 1);
    setQuestionCount((previousCount) => previousCount + 1);
  };
  const getCurrentQuestionData = (questionIndex) => {
    return questionsList.filter((_, index) => {
      return questionIndex === index;
    });
  };

  const renderHTML = (rawHTML) =>
    React.createElement("p", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  // Sub-render
  const renderDifficultyBadge = (level) => {
    switch (level) {
      case "easy":
        return (
          <span
            className={
              `${styles.difficulty_level} ${styles.gs_green}` +
              ` tw__inline-flex tw__items-center tw__justify-center`
            }
          >
            easy
          </span>
        );
      case "medium":
        return (
          <span
            className={
              `${styles.difficulty_level} ${styles.gs_yellow}` +
              ` tw__inline-flex tw__items-center tw__justify-center`
            }
          >
            medium
          </span>
        );
      case "hard":
        return (
          <span
            className={
              `${styles.difficulty_level} ${styles.gs_orange}` +
              ` tw__inline-flex tw__items-center tw__justify-center`
            }
          >
            hard
          </span>
        );
      default:
        break;
    }
  };
  const renderAnswersBlock = (
    questionType,
    correctAnswer,
    incorrectAnswers
  ) => {
    let allAnswersArr = [];
    switch (questionType) {
      case "boolean":
        return (
          <>
            <button
              onClick={() => {
                answerHandle(correctAnswer === "True");
              }}
            >
              True
            </button>
            <button
              onClick={() => {
                answerHandle(correctAnswer === "False");
              }}
            >
              False
            </button>
          </>
        );
      case "multiple":
        // Sort array in alphabetical order(true answer will be in random places)
        allAnswersArr = [...incorrectAnswers, correctAnswer].sort();

        const allAnswersBlock = allAnswersArr.map((answer, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                answerHandle(answer === correctAnswer);
              }}
            >
              {answer}
            </button>
          );
        });

        return allAnswersBlock;
      default:
        break;
    }
  };

  return (
    <main className={styles.gs_quizzes}>
      {currentQuestion.map((d) => (
        <React.Fragment key={d.correct_answer}>
          <h2 className="gs_title tw__text-center tw__mb-2">
            Questions {questionCount > 9 ? questionCount : "0" + questionCount}
          </h2>
          <div className="tw__text-center">
            {renderDifficultyBadge(d.difficulty)}
          </div>
          <div className="tw__flex tw__justify-center">
            <div className={styles.gs_question + ` tw__text-center`}>
              {renderHTML(d.question)}
            </div>
          </div>
          <div
            className={styles.gs_answers_block + ` tw__flex tw__justify-center`}
          >
            {renderAnswersBlock(d.type, d.correct_answer, d.incorrect_answers)}
          </div>
        </React.Fragment>
      ))}
    </main>
  );
};

export default Quizzes;
