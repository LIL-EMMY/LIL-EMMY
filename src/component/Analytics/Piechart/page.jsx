import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import styles from './page.module.css';
import { IoIosArrowDown } from "react-icons/io";

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 1500 },
  { name: 'Group C', value: 1400 },
];
const COLORS = [ '#9dd7f8fb', '#0671affb', '#03a3fffb' ];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
        <h1>Analytics</h1>
        <div><p> This Month</p><IoIosArrowDown className={styles.down}/></div>
      </div>
        <PieChart width={362} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={180}
          cy={170}
          innerRadius={110}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
      </div>
      
    );
  }
}
