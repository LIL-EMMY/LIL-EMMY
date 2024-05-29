"use client"
import styles from "@/component/dashboardBigDaav/page.module.css";
import { TbEye } from "react-icons/tb";
import Link from "next/link";
import { BsSend } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { GoArrowUpRight } from "react-icons/go";
import { CgEditFlipH } from "react-icons/cg";
import BarChart from "@/component/chartBigDaav/page";
import React, { useEffect, useState } from "react";
import { GoEye } from "react-icons/go";
import { HiOutlineEyeOff } from "react-icons/hi";
import { PiDotsThreeOutlineBold } from "react-icons/pi";
import axios from "axios";
import { useSession } from "next-auth/react";







const Dashboard = (props) => {
      const [stateEmail,setStateEmail]=useState('')
      const [loader,setLoader]=useState(false)
//       // Make a get request to the api/db to  get user balance
      const session=useSession()
      console.log(session )
     const {data,status}=session
     const email=session?.data?.user.email

      // setStateEmail(email)
     
//       console.log('this is the state email ' + email)
      // console.log("this is the email " + email)
      // const [loader,setLoader]=useState(false)
      // const [balance,setBalance]=useState('')
      
      // const getBalance=async ()=>{
      //       setStateEmail(email)
      //       console.log(stateEmail)
      //       const res=await axios.get(`/api/checkAccount/${stateEmail}`)
      //       console.log(res)
      //       // setBalance(res.data)

      // }

      // // getBalance(email)
      // useEffect(()=>{
      //       try{
      //            getBalance()
                  

      //       }
      //       catch(err){
      //             console.log("server error " + err)
      //       }
      // },[])
     
     

      //call  get balance function if only email is set(true)
    
      
      const [flip, setFlip] = useState(true);
      const [eye, setEye] = useState(true);

      function flipCardNow() {
            setFlip((prev) => !prev);
      }

      function eyeOff() {
            setEye((prev) => !prev);
      }

      
    
            return (

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
                                          <span className={styles.heading3}> ${props.balance}</span>
                                          <span className={styles.heading4}><span className={styles.eyeCon}><TbEye className={styles.eye} /></span></span>
                                    </div>

                                    <div className={styles.section1Heading3}>
                                        <Link href="/transfer"> <span className={styles.iconGCon}> <span className={styles.iconCon}><BsSend className={styles.icon1} /></span> <span className={styles.iconWriteUp}>Send</span></span></Link> 
                                          <span className={styles.iconGCon}> <span className={styles.iconCon}><GoArrowDown className={styles.icon1} /></span> <span className={styles.iconWriteUp}>Receive</span></span>
                                          <span className={styles.iconGCon}> <span className={styles.iconCon}><FaMoneyBill className={styles.icon1} /></span><span className={styles.iconWriteUp}>Withdraw</span></span>
                                          <span className={styles.iconGCon}> <span className={styles.iconCon}><MdOutlinePayment className={styles.icon1} /></span><span className={styles.iconWriteUp}>Pay bill</span></span>
                                    </div>

                                    <div className={styles.section1Heading4}>
                                          <span className={styles.heading1}>Last Updated: Just Now</span>
                                          <span className={styles.heading4}><span className={styles.loadCon}><TfiReload className={styles.load} /></span></span>
                                    </div>

                              </div>

                              {/* flip card 2 */}
                              <div className={styles.fcardContainer}>
                                    <div className={styles.fcard}>

                                          {

                                                flip ?
                                                      <div className={` ${styles.front}  ${styles.backFlip}`}>

                                                            <div className={styles.front1}>
                                                                  <span className={styles.f1span}
                                                                        onClick={flipCardNow}
                                                                  > <span className={styles.f1Icon}>< CgEditFlipH className={styles.flippy} /> </span> <span className={styles.flippyText}>Flip Card</span></span>
                                                                  <span className={styles.f2span}>Eagle Bank</span>
                                                            </div>

                                                            <div className={styles.front2}>
                                                                  <span className={styles.f2balance}>Balance</span>
                                                                              {`$${props.balance}`}
                                                                  <div className={styles.f2con}>

                                                                        <div className={styles.cashCon}>
                                                                              {eye ?

                                                                                    <span className={styles.f2money}><PiDotsThreeOutlineBold /><PiDotsThreeOutlineBold /></span> :
                                                                                    <span className={styles.f2money}><span className={styles.dollar}></span>{`$${ new Intl.NumberFormat("en-US",{
                                                                                          minimumFractionDigits:2,
                                                                                         maximumFractionDigits:2,
                                                                                          
                                                      
                                                                                      }).format(props.balance)}`}</span>

                                                                              }
                                                                        </div>


                                                                        <div className={styles.eyeCon}>
                                                                              {eye ?
                                                                                    <span className={styles.f2eye} onClick={eyeOff}> <HiOutlineEyeOff /> </span> :
                                                                                    <span className={styles.f2eye} onClick={eyeOff}> <GoEye /> </span>
                                                                              }
                                                                        </div>

                                                                  </div>
                                                            </div>

                                                            <div className={styles.f3}>
                                                                  <input type="password" name="encrypt" id="encrypt" className={styles.encrypt} placeholder="2234, 2239, 0984, 3754" />
                                                                  <span className={styles.f3eye}>()</span>

                                                            </div>

                                                            <div className={styles.f4}>
                                                                  <span className={styles.name}>Anthony David</span>
                                                                  <div className={styles.date}>
                                                                        <span className={styles.date1}> Expires</span>
                                                                        <span className={styles.date2}>8/29</span>
                                                                  </div>
                                                                  <span className={styles.cardType}>Visa</span>
                                                            </div>

                                                      </div> :

                                                      <div className={`${styles.back} `}>
                                                            <div className={styles.b1}>
                                                                  <span className={styles.b1details}> More Details</span>
                                                                  <span className={styles.f1span} onClick={flipCardNow}> <span className={styles.f1Icon}>< CgEditFlipH className={styles.flippy} /> </span> <span className={styles.flippyText}>Flip Card</span></span>

                                                            </div>

                                                            <div className={styles.whiteSpace}></div>

                                                            <div className={styles.b3}>
                                                                  <span className={styles.b3Text}>Authorized Signature</span>

                                                                  <div className={styles.b3Sub}>
                                                                        <div className={styles.b3WhiteSpace}></div>
                                                                        <span className={styles.b3LastText}>223</span>
                                                                  </div>

                                                            </div>
                                                      </div>

                                          }

                                    </div>
                              </div>

                              {/* card 3 */}
                              <div className={`${styles.card1Section3} ${styles.card}`}>
                                    <span className={styles.card3Heading}>Income</span>
                                    <div className={styles.cardSec2}>
                                          <span className={styles.firstH}>
                                                <span className={styles.firstHPrice}>$1,800.00</span>
                                                <span className={styles.firstHPercentage}>90.00%</span>
                                          </span>
                                          <span className={styles.secondHIconCon}><GoArrowUpRight className={styles.secondHIcon} /></span>
                                    </div>

                                    <span className={styles.savingTarget}> target: <span className={styles.priceTarget}> $2,000.00</span></span>

                                    <div className={styles.progressBar}>
                                          <div className={styles.bar}></div>
                                    </div>
                              </div>

                        </div>

                        {/* segment 2 */}

                        <div className={styles.container2}>

                              <div className={styles.chart}>
                                    <BarChart />
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
                                                <span className={styles.secondHIconCon}><GoArrowUpRight className={styles.secondHIcon} /></span>
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
                                                <span className={styles.secondHIconCon}><GoArrowUpRight className={styles.secondHIcon} /></span>
                                          </div>

                                          <span className={styles.savingTarget}> Goal: <span className={styles.priceTarget}> $10,000.00</span></span>

                                          <div className={styles.progressBar}>
                                                <div className={styles.bar3}></div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                                          <div>
                                          <p>use session Session</p>
                                          <pre>{JSON.stringify(session)}</pre>
                                          </div>

                  </section>
            )
      }





export default Dashboard;