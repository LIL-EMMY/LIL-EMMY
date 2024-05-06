// components/ThemeToggle.js
"use client";
import React from "react";
import { useContext } from "react";
import ThemeContext from "./Context";
// import styles from '@/component/ThemeMode/page.module.css'
import { CgMoon, CgSun } from 'react-icons/cg'
import styles from '@/component/side-nav/page.module.css';


const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log(theme)

  return ( <div>
    <div className={styles.toggle}>
      <div className={styles.sun}><CgSun/></div>
          <div className={styles.ball} onClick={toggleTheme} style=
          {theme=="light" ? {up:'2px'}: {down:'2px',background:"white"}}>
          </div>
      <div className={styles.moon}><CgMoon/></div>
    </div>

     
  </div>
  );
};

export default ThemeToggle;
