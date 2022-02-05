import React, { useState } from 'react';
import styles from './homepage.module.scss';
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        height: 56,
        minHeight: 56,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: state.isFocused ? '#95B6A9' : '#E7EBF1',
        backgroundColor: '#F6F7F8',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#95B6A9'
        }
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        display: 'none'
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: '2px 8px 2px 16px'
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        marginRight: 16,
        transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: "all 200ms"
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: '#9EA0A4',
        fontSize: 18
    })
};

const Homepage = () => {
    const [disable, setDisabled] = useState(true)
    const selectHandle = (selectedCategory) => {
        console.log(selectedCategory)
        setDisabled(false)
    }
    return (
        <main className={styles.gs_homepage}>
            <h1 className={styles.gs_title + ` tw__text-center`}>Trivia App</h1>
            <p className={styles.gs_pick_category + ` tw__text-center`}>Pick a Category</p>
            <div className={styles.gs_select_wrapper}>
                <Select onChange={(selectedCategory) => { selectHandle(selectedCategory)} } styles={customStyles} className={styles.gs_react_select} options={options} defaultValue={{ label: "Category", value: 0 }}/>
                <div className="tw__text-center">
                    <button className={styles.gs_start_btn} type="button" disabled={disable}>Start</button>
                </div>
            </div>
        </main>
    );
};

export default Homepage;
