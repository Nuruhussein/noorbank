import React from "react";
import styles from "../style";
const Button = ({ style }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] ${styles.transit} outline-none ${style}`}>
    Get Started
  </button>
);

export default Button;
