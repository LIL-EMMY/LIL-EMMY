"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Barchart from "../Analytics/Barchart/page";
import Piechart from "../Analytics/Piechart/page";
import visacard from "../image/visacard.PNG";

export default function Quicktransfer() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <div>
              <h1>Cards</h1>
              <div className={styles.visacards}>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjz_ZDEuJSIvzdEF_IK4A2dHYLaJLYLgCvvD80zCg5LzajNMrcm0ZLB7Vx4AanLt75x64&usqp=CAU"
                  width={420}
                  height={235}
                />
              </div>
            </div>
            <div>
              <button type="button">
                <FiPlus />
                Add Cards
              </button>
              <div className={styles.emptycard}>
                <FiPlus className={styles.plus} />
                <p>Add Card</p>
              </div>
            </div>
          </div>
          <div className={styles.radio}>
            <Barchart />
          </div>
        </div>
        <div className={styles.card2}>
          <form action="" className={styles.form}>
            <div className={styles.formBody}>
              <h2>Quick Transfer</h2>
              <div>
                <label htmlFor="">Recipients Account</label>
                <input
                  type="text"
                  name="accnt number"
                  id=""
                  placeholder="1234 1234 1234 1234"
                />
              </div>
              <div>
                <label htmlFor="">Amount</label>
                <input type="text" name="amount" id="" placeholder="$1000" />
              </div>
              <button type="submit">Continue</button>
            </div>
          </form>
          <div className={styles.graph}>
            <Piechart className={styles.pie}/>
          </div>
        </div>
      </div>
    </div>
  );
}
