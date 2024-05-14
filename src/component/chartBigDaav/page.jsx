"use client"
import styles from "@/component/chartBigDaav/page.module.css"

import React, {useRef, useEffect} from "react";
import {Chart} from "chart.js/auto"
import { userAgent } from "next/server";

const BarChart = () =>{
      const chartRef = useRef(null);

      useEffect(()=>{
            if(chartRef.current) {
                  if(chartRef.current.chart) {
                    chartRef.current.chart.destroy()
                  }

              const context = chartRef.current.getContext("2d")
              const newChart = new Chart(context, {
                  type: "bar",
                  data: {
                        labels: ["january", "february", "March", "April", "may", "june", "july", "August", "September", "October", "November", "December"],
                        datasets: [
                              {
                               label: "Income",
                               data: [  0, 5000, 2000, 3000, 1000, 3000, 4000,  6000, 7000, 2000, 9000, 10000, 11000, 12000, 13000, 14000, 15000],
                               backgroundColor: ["#444cf7"],
                               borderWidth: 1,
                              },

                              {
                               data: [ -11000, -2000, -3000, -7000, -5000, -6000, -2000, -8000, -9000, -2000, -11000, -12000, -7000, -14000, -15000],
                               label: "Expenses",
                               backgroundColor: ["rgba(18, 18, 41, 0.5)"],
                               borderWidth: 1,
                              }
                  ],

                  },
                        options: {
                              scales: {
                                    y: {
                                          beginAtZero: true,
                                    },
                                    x: {
                                          type: "category"
                                    }
                              }
                        }
              })

              chartRef.current.chart = newChart;
            }
      }, [])

      return (
            
            
                  <canvas  ref={chartRef}></canvas>
            

      )
}

export default BarChart;