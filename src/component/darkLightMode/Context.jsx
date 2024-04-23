"use client"
import React, { createContext, useState } from 'react'

export const ThemeContext=createContext()

export const ThemeProvider= ({children})=> {
    const [theme,setTheme]=useState('dark')
    const toggleMode=()=>{
        setTheme((prev)=> (prev=='dark'?'light':"dark"))

        
    }
    
  return (
    <ThemeContext.Provider value={{theme,toggleMode}}>
       <div className={`${theme} mode`}> {children}</div>
    </ThemeContext.Provider>
      
    
  )
}


