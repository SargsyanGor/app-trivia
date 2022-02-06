import React, { useState } from "react";
import styles from "./homepage.module.scss";
import Select from "react-select";
import { getQuestions } from "../../services/questionsService";

const options = [
  { value: 11, label: "Entertainment: Films" },
  { value: 10, label: "Entertainment: Books" },
  { value: 21, label: "Sports" },
  { value: 23, label: "History" },
  { value: 25, label: "Art" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: 56,
    minHeight: 56,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: state.isFocused ? "#95B6A9" : "#E7EBF1",
    backgroundColor: "#F6F7F8",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#95B6A9",
    },
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: "2px 8px 2px 16px",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    marginRight: 16,
    transform: state.isFocused ? "rotate(180deg)" : "rotate(0deg)",
    transition: "all 200ms",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.children === "Category" ? "#9EA0A4" : "#354153",
    fontSize: 18,
  }),
  menu: (provided, state) => ({
    ...provided,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
    borderRadius: 18,
    padding: "10px",
    background: "#F6F7F8",
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: 18,
    fontWeight: 500,
    color: state.isFocused ? "#3A7859" : "#354153",
    transition: "background-color 700ms, color 700ms",
    backgroundColor: state.isFocused ? "#EFF2F7" : null,
    borderRadius: 18,
    marginBottom: 2,
    padding: "12px 14px",
  }),
};

const Homepage = (props) => {
  const [btnDisable, setBtnDisableState] = useState(true);
  const [selectedCategory, setCategory] = useState(null);

  const selectHandle = (categoryitem) => {
    setBtnDisableState(false);
    setCategory(categoryitem.value);
  };

  const startBtnHandle = () => {
    getQuestions(selectedCategory).then((data) => {
      props.dataReceivedSuccess(data);
    });
  };

  return (
    <main className={styles.gs_homepage}>
      <h1 className={styles.gs_title + ` tw__text-center`}>Trivia App</h1>
      <p className={styles.gs_pick_category + ` tw__text-center`}>
        Pick a Category
      </p>

      <div className={styles.gs_select_wrapper}>
        <Select
          onChange={(selectedCategory) => {
            selectHandle(selectedCategory);
          }}
          styles={customStyles}
          options={options}
          defaultValue={{ label: "Category", value: 0 }}
        />
        <div className="tw__text-center">
          <button
            onClick={startBtnHandle}
            className={styles.gs_start_btn}
            type="button"
            disabled={btnDisable}
          >
            Start
          </button>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
