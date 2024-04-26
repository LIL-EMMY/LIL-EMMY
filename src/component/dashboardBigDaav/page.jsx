"use client"
import styles from "@/component/dashboardBigDaav/page.module.css";
import { TbEye } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { GoArrowUpRight } from "react-icons/go";
import Chart from 'chart.js/auto';

import React, {useEffect} from "react"

const BarChart = () => {
 
      return (
            <div><canvas className={styles.acquisitions}></canvas></div>
      )
}




const Dashboard = () => {
      return(
            <section className={styles.dashboardContainer}>

                  {/* card 1 container goes here */}
                  <div className={styles.dashboardContainer_card1}>
                        
                        {/* card 1 */}
                        <div className={`${styles.card1Section1} ${styles.card}`}>
                              <div className={styles.section1Heading}>
                                    <span className={styles.heading1}>Personal Account</span>
                                    <span className={styles.heading2}><span className={styles.heading2Icon}>+</span>  Add Card</span>
                              </div>

                              <div className={styles.section1Heading2}>
                                    <span className={styles.heading3}>$0.00</span>
                                    <span className={styles.heading4}><span className={styles.eyeCon}><TbEye className={styles.eye}/></span></span>
                              </div>

                              <div className={styles.section1Heading3}>
                                    <span className={styles.iconGCon}> <span className={styles.iconCon}><BsSend className={styles.icon1}/></span> <span className={styles.iconWriteUp}>Send</span></span>
                                    <span className={styles.iconGCon}> <span className={styles.iconCon}><GoArrowDown className={styles.icon1}/></span> <span className={styles.iconWriteUp}>Receive</span></span>
                                    <span className={styles.iconGCon}> <span className={styles.iconCon}><FaMoneyBill className={styles.icon1}/></span><span className={styles.iconWriteUp}>Withdraw</span></span>
                                    <span className={styles.iconGCon}> <span className={styles.iconCon}><MdOutlinePayment className={styles.icon1}/></span><span className={styles.iconWriteUp}>Pay bill</span></span> 
                              </div>

                              <div className={styles.section1Heading4}>
                                    <span className={styles.heading1}>Last Updated: Just Now</span>
                                    <span className={styles.heading4}><span className={styles.loadCon}><TfiReload className={styles.load}/></span></span>
                              </div>

                        </div>

                        {/* card 2 */}
                        <div className={`${styles.card1Section2} ${styles.card}`}>
                              <h1>pending...</h1>
                        </div>

                        {/* card 3 */}
                        <div className={`${styles.card1Section3} ${styles.card}`}>
                              <span className={styles.card3Heading}>Income</span>
                              <div className={styles.cardSec2}>
                                    <span className={styles.firstH}>
                                          <span className={styles.firstHPrice}>$1,800.00</span>
                                          <span className={styles.firstHPercentage}>90.00%</span>
                                    </span>
                                    <span className={styles.secondHIconCon}><GoArrowUpRight className={styles.secondHIcon}/></span>
                              </div>

                              <span className={styles.savingTarget}> target: <span className={styles.priceTarget}> $2,000.00</span></span>

                              <div className={styles.progressBar}>
                                    <div className={styles.bar}></div>
                              </div>
                        </div>

                  </div>

                  <div className={styles.container2}>
                        <div className={styles.chart}>
                                    <h1>Chart Pending...</h1>
                        </div>     

                        <div className={styles.SecondSegment}>
                        {/*SEGMENT 2 CARD 1 */}
                        <div className={`${styles.card1Section3} ${styles.card}`}>
                                    <span className={styles.card3Heading}>Expenses</span>
                                    <div className={styles.cardSec2}>
                                          <span className={styles.firstH}>
                                                <span className={styles.firstHPrice}>$1,200.00</span>
                                                <span className={styles.firstHPercentage2}>80.00%</span>
                                          </span>
                                          <span className={styles.secondHIconCon}><GoArrowUpRight className={styles.secondHIcon}/></span>
                                    </div>

                                    <span className={styles.savingTarget}> Max: <span className={styles.priceTarget}> $1,500.00</span></span>

                                    <div className={styles.progressBar}>
                                          <div className={styles.bar2}></div>
                                    </div>
                              </div>

                              {/* SEGMENT 2 CARD 2 */}

                              <div className={`${styles.card1Section3} ${styles.card}`}>
                                    <span className={styles.card3Heading}>Savings</span>
                                    <div className={styles.cardSec2}>
                                          <span className={styles.firstH}>
                                                <span className={styles.firstHPrice}>$1,280.00</span>
                                                <span className={styles.firstHPercentage3}>12.80%</span>
                                          </span>
                                          <span className={styles.secondHIconCon}><GoArrowUpRight className={styles.secondHIcon}/></span>
                                    </div>

                                    <span className={styles.savingTarget}> Goal: <span className={styles.priceTarget}> $10,000.00</span></span>

                                    <div className={styles.progressBar}>
                                          <div className={styles.bar3}></div>
                                    </div>
                              </div>
                        </div>
                  </div>

            
            
            </section>
      )
}


export default Dashboard;