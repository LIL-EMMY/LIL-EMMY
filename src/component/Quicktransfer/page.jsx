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
import SetPin from "../pin/pin";
import { useSession } from "next-auth/react";

export default function Quicktransfer() {
  // take transfer values()acctnumber and amount
  const [acctNumber, setAcctNumber] = useState('')
  const [amount, setAmount] = useState('')
  const [showAmount, setShowAmount] = useState(false)
  const [err, setErr] = useState(false)
  const [name, setName] = useState('')
  const [loader, setLoader] = useState(false)
  const [balance, setBalance] = useState('')
  const [pin, setPin] = useState('')
  const [showPin, setShowPin] = useState('')
  const [transferAmount,setTransferAmount]=useState('')
  const [transferPin,setTransferPin]=useState('')
  // session email

  const {data}=useSession()
  const email=data?.user?.email
  console.log(acctNumber)
  const submitHandler = async (e) => {
    setLoader(true)
    e.preventDefault()
    if (!acctNumber || acctNumber.length < 10) {
      setErr('provide 10 digits acct number')
    }
    // handler the acct number not taking i any value if the length is greater than 10
    else if (acctNumber.length === 10) {
      try {
        // make request to check balance uisng axios instead of fetch
        let accountNumber = acctNumber
        console.log(accountNumber)
        const res = await axios.post('/api/checkAccount', { accountNumber })
        //  await res.json();
        if (res.status == 200) {
          console.log(res, res.data.transferPin)
          setName(res.data.fullname)
          setBalance(res.data.balance)
          setPin(res.data.transferPin)
          // if the user have already changed default pin, he should proceed
          if (res.data.transferPin !== 1111) {
            setShowPin(true)
          }
          setLoader(false)



          setErr('')
          // console.log(name)
          // make request to transfer


        }
      }
      catch (err) {
        setErr('Invalid Eagle Account number')
        console.log(err)
        setLoader(false)
        setName('')
      }

    }
  }

  const transferHandler=async (e)=>{
    // to prevent default form refresh
    e.preventDefault()
    if(!transferAmount && !transferPin){
    return  setErr("Transfer pin and amount should be provided")
    }
    try {
      // make a request to getTransfer
      const res= await axios.post('/api/transfer',{email,acctNumber,transferAmount,transferPin})
      console.log(res)
      
    } catch (error) {
      console.error("error is -  " +  error)
    }

  }

  console.log("this is pin " + pin, typeof (pin))

  return (
    <>

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
            {err ? (<div className="err"> {err}</div>) : " "}
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
                  {loader && (<div className="dotLoader" style={{ color: "white" }}></div>)}
                  {name ? (<div style={{ color: "white" }}> {name}</div>) : " "}

                  {!name ? (<button type="submit">check</button>) : ""}
                </div>
                <form action="">

                {name && (
                  <>
                    <div >
                      <label htmlFor="">Amount</label>
                      <input type="text" id="" placeholder="$1000" onChange={(e)=>{setAmount(e.target.transferAmount)}}/>
                    </div>
                </>
                    )}
                    
                   {showPin && (
                    <>
                    
                     <div >
                        <label htmlFor="">Pin</label>
                        <input type="text" name="amount" id="" placeholder="Enter pin" onChange={(e)=>setTransferPin(e.target.value)} />
                      </div>
                    <button type="submit" style={{ backgroundColor: balance <= 0 ? 'gray' : "rgb(6, 177, 230);" }} disabled={balance <= 0 ? true : false} >{balance <= 0 ? 'disabled' : "transfer"}</button>
                    </>
                    )}
                    
                    </form>

                  


              
              </div>
            </form>
            <div className={styles.graph}>
              <Piechart className={styles.pie} />
            </div>
          </div>
        </div>
      </div>
      {pin == 1111 && (<SetPin />) || ""}




    </>

  )
}
