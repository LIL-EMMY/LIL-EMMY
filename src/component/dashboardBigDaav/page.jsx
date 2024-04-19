import styles from "@/component/dashboardBigDaav/page.module.css";
import { TbEye } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { GoArrowUpRight } from "react-icons/go";
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
                              <span className={styles.card3Heading}>income</span>
                              <div className={styles.cardSec2}>
                                    <span className={styles.firstH}>
                                          <span className={styles.firstHPrice}>$1,800.00</span>
                                          <span className={styles.firstHPercentage}>90.00%</span>
                                    </span>
                                    <span className={styles.secondHIconCon}><GoArrowUpRight className={styles.secondHIcon}/></span>
                              </div>

                        </div>

                  </div>
            
            
            </section>
      )
}


export default Dashboard;