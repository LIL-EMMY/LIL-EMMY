import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/component/dashboardBigDaav/page";
import Login from "@/component/Login/login";
import Register from "@/component/register/register";
import Resetpassword from "@/component/resetpassword/restpassword";
import Confirmemail from "@/component/confirmemail/confirmemail";

export default function Home() {
  return (
    <div>
    <Register/>
    <Login/>
    <Confirmemail/>
    <Resetpassword/>
    </div>
   
    
  );
}
