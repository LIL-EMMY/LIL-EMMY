import React from "react";
import Sidenav from "../component/side-nav/page";
import Navbar from "../component/navbar/page";
import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/component/dashboardBigDaav/page";
import ThemeToggle from "@/component/darkLightMode/ThemeToggle";
import { ThemeProvider } from "@/component/darkLightMode/Context";

export default function page() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <ThemeToggle />
      <Dashboard />
      <ThemeProvider />
    </>
  );
}
