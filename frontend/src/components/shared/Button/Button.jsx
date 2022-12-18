import React from "react";
import styles from "./Button.module.css";

const Button = ({ buttonTitle, buttonLogo }) => {
  return (
    <button className={styles.button}>
      <span>{buttonTitle}</span>
      <img
        className={styles.arrow}
        src="/images/arrow_right.png"
        alt="right arrow"
      />
    </button>
  );
};

export default Button;
