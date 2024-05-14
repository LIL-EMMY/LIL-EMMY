// components/MyLineChart.tsx
"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { defaultMaxListeners } from "events";
import { Bar, Line } from "chart.js/auto";


// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

ChartJS.register(CategoryScale)
const TheChart = () => {
      return (
            <div>
              <Bar
              
                data={{
                  labels: [
                    "2023-01",
                    "2023-02",
                    "2023-03",
                    "2023-04",
                    "2023-05",
                    "2023-06",
                    "2023-07",
                  ],
                  datasets: [
                    {
                      data: [100, 120, 115, 134, 168, 132, 200],
                      backgroundColor: "purple",
                    },
                  ],
                }}
              />
            </div>
          );
};

export default TheChart;