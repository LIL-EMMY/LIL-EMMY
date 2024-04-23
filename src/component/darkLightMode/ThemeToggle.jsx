"use client";
import React, { useContext } from "react";
import { CgMoon, CgSun } from "react-icons/cg";
import styles from "./page.module.css";
import { ThemeContext } from "./Context";

export default function ThemeToggle() {
  const { theme, toggleMode } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div>
      <div className="toggle hii">
        <CgSun />
        <div
          className="ball"
          onClick={toggleMode}
          style={
            theme == "light"
              ? { left: "2px" }
              : { right: "2px", background: "white" }
          }
        ></div>
        <CgMoon />
      </div>
    </div>
  );
}
