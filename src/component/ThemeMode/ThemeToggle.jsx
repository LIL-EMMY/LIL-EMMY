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
      <CgSun style={{ fontSize: '1.5em',  marginBottom: '10px' }}/>
          <div className={styles.ball} onClick={toggleTheme} style={theme=="light" ? {left:'2px'}: {right:'2px',background:"white"}}></div>
      <CgMoon style={{ fontSize: '1.5em', marginBottom: '10px' }}/>
    </div>

     
  </div>
  );
};

export default ThemeToggle;
