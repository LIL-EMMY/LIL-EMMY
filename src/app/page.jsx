import React from 'react'
import Sidenav from '../component/side-nav/page'
import Navbar from '../component/navbar/page'
import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/component/dashboardBigDaav/page";


export default function Home() {
  return (
    <>
<div className="body">
      <Dashboard/>

</div>
      
    </>
    
  );
}
