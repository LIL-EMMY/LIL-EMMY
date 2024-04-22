import React from 'react'
import { FaRegBell } from "react-icons/fa";
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.dash}><h1>DASHBOARD</h1></div>
      
      <div className={styles.input}>
        <input type="text" placeholder='Search'/>
      </div>
      <div className={styles.bell}>
      <FaRegBell />
      </div>
      <div className={styles.profile}>
{/* get image from users input */}
<Link href='./profile'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjWvrX_TM4rwwrCuuy2C-wr0LZD6ywNC7uXQRCU4yFg&s" alt="user profile photo"  width={40} height={40}/></Link>
      </div>
    </div>
  )
}
