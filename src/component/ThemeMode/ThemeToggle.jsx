// components/ThemeToggle.js
"use client";
import React from "react";
import { useContext } from "react";
import ThemeContext from "./Context";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import styles from "./page.module.css";
import styles from '@/component/side-nav/page.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.toggle}>
      <button className={<GoSun onClick={toggleTheme} />}>
        {theme === "light" ? "Dark" : "Light"}
        <FaMoon onClick={toggleTheme} style={{ backgroundColor: "black" }} />
        <FaSun onClick={toggleTheme} style={{ backgroundColor: "white" }} />
      </button>
    </div>
  );
};

export default ThemeToggle;
