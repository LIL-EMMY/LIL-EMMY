'use client'
import React, {useState} from 'react'
import './withdrawal.css'
import { BsBank } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";

const page = () => {

    const[show, setShow]=useState(false)
    const hidefunc=()=>{
         setShow(false)
    }
    const showfunc=()=>{
         setShow(true)
    }
  return (
    <div>
     <div className='WithdrawalModal' onClick={hidefunc}>
     <div className='WithdrawalPopUp'>
     <div className='WithdrawText'>
     <h4>Withdraw</h4>
     <p><IoCloseSharp /></p>
     </div>

    <div className='AvailableText'>
         <p>Available</p>
         <h3>$20,000.00</h3>
     </div>

    <div className='AmountText'>
          <p>Enter Amount</p>
         <input type="text" 
         placeholder='$5000'/>
     </div>

                    <div className='WithdrawToText'>
                        <div className='Withdrawicon'>
                        <p id='WithMoneyIcon'><BiMoneyWithdraw /></p>
                        <p>Withdraw To</p>
                        </div>
                
                      <p id='Benefi'>Add Beneficiary</p>
                        
                    
                    </div>
                    <div className='Beneficiary'>
                        <p id='Bankicon'><BsBank /></p>

                        <div className='BeneficiaryDetails'>
                        <p>Sam Keane</p>
                        <p>**********1234</p>
                        </div>
            
                    </div>
                    <div className='Btn'>
                    <button className='WithdrawalBtn'>Continue Withdraw</button>
                    </div>
                
                

                </div>



    </div> 

   {show==true &&(
      <div className='WithdrawalSuccess' >
            <div className='WithdrawSuccesText'>
                <h4>Withdraw</h4>
                <p><IoCloseSharp /></p>
                </div>

                <div className='SuccessIcon'>

                    <p>Withdrawal Success</p>
                </div>

                <div>
                    <button>Done</button>

                </div>
     </div>

   )}
  
    </div>
  
  )
}

export default page