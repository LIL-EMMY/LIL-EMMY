'use client'
import React from 'react'
import { useState } from 'react';
import styles from './page.module.css'
import { FaWindows } from "react-icons/fa";
import Link from 'next/link';
import { IoCardSharp } from "react-icons/io5";
import { IoCashOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaFileInvoice } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { MdRectangle } from "react-icons/md";
import ThemeToggle from '../ThemeMode/ThemeToggle';
// import styles from '../ThemeMode/page.module.css'


export default function Sidenav() {
    const [showNames, setShowNames] = useState(false);

    const toggleNames = () => {
      setShowNames(!showNames);
    };


    return (
        <div className={styles.side}>
           <div className={styles.logo}><MdRectangle /></div>

             <div onClick={toggleNames}className={styles.handle} ><FaArrowsLeftRight /></div>



            <div className={styles.sidebar}>
                
               <div className={styles.icon}><FaWindows /></div>
               {showNames && <div className={styles.name}>Home</div>}
               
            </div>
            <div className={styles.sidebar}>
               <div className={styles.icon}><IoCardSharp /></div>
               {showNames && <div className={styles.name}>card</div>}
               
            </div>
            <div className={styles.sidebar}>
               <div className={styles.icon}><IoCashOutline /></div>
               {showNames && <div className={styles.name}>cash</div>}
               
            </div>
            <div className={styles.sidebar}>
               <div className={styles.icon}><FaFileInvoice /></div>
               {showNames && <div className={styles.name}>invoices</div>}
               
            </div>
            <div className={styles.sidebar}>
               <div className={styles.icon}><FiTarget /></div>
               {showNames && <div className={styles.name}>goals</div>}
               
            </div>
            <div className={styles.sidebar}>
               <div className={styles.icon}><CgProfile /></div>
               {showNames && <div className={styles.name}>profile</div>}
               
            </div>


{/* import lightmode and darkmode here */}
<ThemeToggle/>




            <div className={styles.sidebar}>
               <div className={styles.icon}><MdHeadsetMic /></div>
               {showNames && <div className={styles.name}>customer care</div>}
               
            </div>
        </div>
    )
        }
    
