"use client";
import React from "react";
import Sidenav from "../component/side-nav/page";
import Navbar from "../component/navbar/page";
import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/component/dashboardBigDaav/page";
import { ThemeProvider } from "@/component/ThemeMode/Context";
import ThemeToggle from "@/component/ThemeMode/ThemeToggle";

export default function Page() {
  function MyApp({ Component, pageProps }) {
    return (
      <>
        <ThemeToggle>
          <Component {...pageProps} />
          <Navbar />
          <Sidenav />
          <Dashboard />
        </ThemeToggle>

        <ThemeToggle />
      </>
    );
  }
}
