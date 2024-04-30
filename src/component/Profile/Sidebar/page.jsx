"use client"
import React, { useState } from "react";
import styles from "./sidebar.module.css";

import { RiArrowRightSLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCardOutline } from "react-icons/io5";
import { PiMoneyLight } from "react-icons/pi";
import { TiDocument } from "react-icons/ti";
import { FiTarget } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import ToggleTextBtn from "./toggleBtn";

export default function Sidebar() {

  

  return (
    <aside className={styles.container}>
      <div className={styles.asideCont}>
        <div className={styles.btn}>

          <button >
            <RiArrowRightSLine className={`${styles.btnIcon} arrowBtn`} />
            
            
          </button>
        </div>

        <div className={styles.logo}>
          <img
            src="https://img.freepik.com/premium-photo/best-logo-template-vector-icon-illustration-design_966797-19158.jpg?size=626&ext=jpg&ga=GA1.1.392460359.1713341755&semt=ais"
            alt="logo"
          />
        </div>

        <div className={styles.catIcons}>
          <div className={styles.icons}>
            <div>
              <LuLayoutDashboard className={styles.icon} />
              <p>text</p>
            </div>
            <div>
              <IoCardOutline className={styles.icon} />
            </div>
            <div>
              <PiMoneyLight className={styles.icon} />
            </div>
            <div>
              <TiDocument className={styles.icon} />
            </div>
            <div>
              <FiTarget className={styles.icon} />
            </div>
            <div>
              <CgProfile className={`${styles.icon} ${styles.profile}`} />
            </div>
          </div>


          <div className={styles.headphone}>
            <TfiHeadphoneAlt className={styles.headIcon}/>
            
          </div>
        </div>
      </div>
    </aside>
  );
}
