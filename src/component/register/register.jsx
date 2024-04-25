'use client'
import React from "react";
import { useState } from "react";
import style from "./page.module.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [err, setErr] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!firstName) {
      setErr('Provide Firstname');
    } else if (!lastName) {
      setErr('Provide Lastname');
    } else if (!email) {
      setErr('Provide Email');
    } else if (!phone) {
      setErr('Provide Phone number');
    } else if (!username) {
      setErr('Provide Username');
    } else if (!password) {
      setErr('Provide Password');
    } else if (!confirmPassword) {
      setErr('Confirm password to proceed!..');
    } else if (password !== confirmPassword) {
      setErr('Passwords do not match');
    } else {
      setErr(''); // Reset error state if there are no errors
      // Registration logic here...
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.side}>
        <h1><span className={style.etext}>E</span>AGLE BANK</h1>
            <p className={style.motor}>Soar higher...</p>

            <p className={style.link}> Have an account? <Link href="/">Login now!..</Link></p> 
           
        </div>
        <div className={style.form}>
          <h2>Create a new account</h2>
          <form onSubmit={submitHandler}>
            <div className={style.formGroup}>
              {/* <label htmlFor="" className={style.label}>
                Firstname:
              </label> */}
              <input
                type="text"
                placeholder="Firstname"
                className={style.formControl}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {err === 'Provide Firstname' && <p className={style.err}>{err}</p>}
            </div>
            <div className={style.formGroup}>
              {/* <label htmlFor="" className={style.label}>
                Lastname:
              </label> */}
              <input
                type="text"
                placeholder="Lastname"
                className={style.formControl}
                onChange={(e) => setLastName(e.target.value)}
              />
              {err === 'Provide Lastname' && <p className={style.err}>{err}</p>}
            </div>
            <div className={style.formGroup}>
              {/* <label htmlFor="" className={style.label}>
                Email:
              </label> */}
              <input
                type="email"
                placeholder="Email"
                className={style.formControl}
                onChange={(e) => setEmail(e.target.value)}
              />
              {err === 'Provide Email' && <p className={style.err}>{err}</p>}
            </div>
            <div className={style.formGroup}>
              {/* <label htmlFor="" className={style.label}>
                Phone:
              </label> */}
              <input
                type="text"
                placeholder="Phone number"
                className={style.formControl}
                onChange={(e) => setPhone(e.target.value)}
              />
              {err === 'Provide Phone number' && <p className={style.err}>{err}</p>}
            </div>
            <p className={style.ptext}>Create a username and password to login account</p>
            <div className={style.formGroup}>
              {/* <label htmlFor="" className={style.label}>
                Username:
              </label> */}
              <input
                type="text"
                placeholder="Username"
                className={style.formControl}
                onChange={(e) => setUsername(e.target.value)}
              />
              {err === 'Provide Username' && <p className={style.err}>{err}</p>}
            </div>
            <div className={style.formGroup}>
              {/* <label htmlFor="" className={style.label}>
                Password:
              </label> */}
              <input
                type="password"
                placeholder="Password"
                className={style.formControl}
                onChange={(e) => setPassword(e.target.value)}
              />
              {err === 'Provide Password' && <p className={style.err}>{err}</p>}
            </div>
            <div className={style.formGroup}>
              {/* <label htmlFor="" className={style.label}>
                Confirm password:
              </label> */}
              <input
                type="password"
                placeholder="Re-enter password"
                className={style.formControl}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {err === 'Confirm password to proceed!..' && <p className={style.err}>{err}</p>}
              {err === 'Passwords do not match' && <p className={style.err}>{err}</p>}
            </div>
            
           
            <button className={style.btn}>
              Create Account <MdOutlineArrowForwardIos className={style.icon} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
