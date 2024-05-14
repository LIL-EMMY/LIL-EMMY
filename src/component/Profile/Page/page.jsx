import React from "react";
import styles from "./page.module.css";
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";

import { CgProfile } from "react-icons/cg";
import { FaKey } from "react-icons/fa6";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { MdOutlineLogout } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { LuKeyRound } from "react-icons/lu";



export default function Page() {
  return (
    <div className={styles.container}>

      <div className={styles.navbar}>
        <div className={styles.dashboard}>
          <h2>Dashboard</h2>
        </div>

        <div className={styles.search}>
          <CiSearch />
          <input type="text" placeholder="Search" />
        </div>

        <div className={styles.navend}>
          <VscBell className={styles.bellicon} />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>

      <div className={styles.profileContainer}>

        <div className={styles.optionList}>
          <div className={styles.myProfile}>
            <CgProfile />
            <p>My Profile</p>
          </div>
          <div className={styles.security}>
            <LuKeyRound />
            <p>Security</p>
          </div>
          <div className={styles.notification}>
            <VscBell />
            <p>Notification</p>
          </div>
          <div className={styles.verification}>
            <HiOutlineCheckBadge />
            <p>Verification</p>
          </div>
          <div className={styles.logout}>
            <MdOutlineLogout />
            <p>Logout</p>
          </div>
        </div>

        <div className={styles.profileSection}>

          <div className={styles.profile}>

            <div><h3>Profile</h3></div>

            <div className={styles.imgName}>
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />

              <div className={styles.name}>
                <p>Lisandro Schuster</p>
                <span>@LisandroSchuster</span>
              </div>
            </div>
            
            <div className={styles.editBtn}>
              <button>
                <p>Edit</p>
                <FiEdit3 />
              </button>
            </div>

          </div>

          <div className={styles.accountDetails}>
            <div>
              <h3 className={styles.h}>Account Details</h3>
            </div>
            <div className={styles.accNmNu}>
              <div>
                <p>Account Name</p>
                <h3>Lisandro Schuster</h3>
              </div>
              <div>
                <p>Account Number</p>
                <h3>85840956</h3>
              </div>
            </div>
          </div>

          <div className={styles.psnlInfo}>
            <div>
              <h3 className={styles.h}>Personal Information</h3>
            </div>
            <div className={styles.fstLstNm}>
              <div>
                <p>First Name</p>
                <h3>Lisandro</h3>
              </div>
              <div>
                <p>Last Name</p>
                <h3>Schuster</h3>
              </div>
            </div>
            <div className={styles.emlPhn}>
              <div>
                <p>Email Address</p>
                <h3>Rahul_Goodwin@Hotmail.Com</h3>
              </div>
              <div>
                <p>Phone Number</p>
                <h3>1-961-631-2238 X3172</h3>
              </div>
            </div>
            <div>
              <p>Address</p>
              <h3>58769 Ash Road Apt 619</h3>
            </div>

            <div className={styles.editBtn}>
              <button>
                <span>Edit</span>
                <FiEdit3 />
              </button>
            </div>

            
          </div>
        </div>

      </div>


    </div>
  );
}
