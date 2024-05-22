"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Barchart from "../Analytics/Barchart/page";
import Piechart from "../Analytics/Piechart/page";
import visacard from "../image/visacard.PNG";
import axios from "axios"

export default function Quicktransfer() {
  // take transfer values()acctnumber and amount
  const [acctNumber, setAcctNumber] = useState('')
  const [amount, setAmount] = useState('')
  const [showAmount, setShowAmount] = useState(false)
  const [err, setErr] = useState(false)
  const [name, setName] = useState('')
  const [loader,setLoader]=useState(false)
  const [balance,setBalance]=useState('')
console.log(acctNumber)
  const submitHandler =async(e) => {
    setLoader(true)
    e.preventDefault()
    if (!acctNumber || acctNumber.length < 10) {
      setErr('provide 10 digits acct number')
    }
    // handler the acct number not taking i any value if the length is greater than 10
    else if (acctNumber.length === 10) {
      try{
         // make request to chehck balance uisng axios instead of fectch 
         let accountNumber=acctNumber
         console.log(accountNumber)
     const res=await axios.post('/api/checkAccount',{accountNumber})
    //  await res.json();
     if(res.status==200){
      console.log(res)
      setName(res.data.fullname)
      setBalance(res.data.balance)
      setLoader(false)
      setErr('')
      // console.log(name)
      // make request to transfer


     }
      }
      catch(err){
        setErr('Invalid Eagle Account number')
        console.log(err)
        setLoader(false)
        setName('')
      }
     
    }
  }
 

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
          {err ? (<div className="err"> {err}</div> ): " "}
          <form action="" className={styles.form} onSubmit={submitHandler}>
            <div className={styles.formBody}>
              <h2>Quick Transfer</h2>
              <div>
                <label htmlFor="">Recipients Account</label>
                <input
                  type="text"
                  
                  placeholder="1234 1234 1234 1234"
                  onChange={(e) => (setAcctNumber(e.target.value))}
                />
                {loader && ( <div className="dotLoader" style={{color:"white"}}></div>)}
                {name ? ( <div style={{color:"white"}}> {name}</div> ): " "}
               
              {!name ? (<button type="submit">check</button>) : ""}  
              </div>
              {name && (
                <>
                   <div >           
                  <label htmlFor="">Amount</label>
                  <input type="text" name="amount" id="" placeholder="$1000" />
              </div>
                  <button  type="submit"  style={{backgroundColor : balance<=0 ? 'gray': "rgb(6, 177, 230);"}} disabled={balance<=  0 ? true : false} >{balance<=0 ? 'disabled' : "transfer"}</button>
                 
                </>
               
            
              )}
</div>
          </form>
          <div className={styles.graph}>
            <Piechart className={styles.pie} />
          </div>
        </div>
      </div>
    </div>
  );
}
