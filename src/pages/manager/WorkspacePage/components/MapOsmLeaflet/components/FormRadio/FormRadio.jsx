import React, { useState } from "react";
import styles from "./FornRadio.module.scss";

function FormRadio({ selectedOption, setSelectedOption }) {
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className={styles.wrapper}>
      <div>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            value="москва"
            checked={selectedOption === "москва"}
            onChange={handleOptionChange}
          />
          Москва и МО
        </label>
      </div>
      {/* <div>
        <label>
          <input
            type="radio"
            value="СПБ"
            checked={selectedOption === "СПБ"}
            onChange={handleOptionChange}
          />
          СПБ
        </label>
      </div> */}
      <div>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            value=""
            checked={selectedOption === ""}
            onChange={handleOptionChange}
          />
          Вся Россия
        </label>
      </div>
    </form>
  );
}

export default FormRadio;
