import { Inter } from "next/font/google";
// import "./globals.css";
import { useContext } from "react";
import { ThemeProvider } from "@/component/ThemeMode/Context";
import "./globals.css";
import Navbar from "@/component/navbar/page";
import Sidenav from "@/component/side-nav/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} main`}>
        <ThemeProvider>

          <Navbar/>
          <Sidenav/>
          {/* {children} */}
          
        </ThemeProvider>

        

      </body>
      <body className={inter.className}>
       <Navbar/> 
        {children}
        
        </body>
    </html>
  );
}
