import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './page.module.css'
import { IoIosArrowDown } from "react-icons/io";

const data = [
  {
    name: 'Jan',
    Expense: 2400,
    Income: 8500,
    amt: 2400,
  },
  {
    name: 'Feb',
    Expense: 3000,
    Income: 7600,
    amt: 2210,
  },
  {
    name: 'March',
    Expense: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    Expense: 2780,
    Income: 8200,
    amt: 2000,
  },
  {
    name: 'May',
    Expense: 1890,
    Income: 7800,
    amt: 2181,
  },
  {
    name: 'Jun',
    Expense: 2390,
    Income: 6900,
    amt: 2500,
  },
  {
    name: 'Jul',
    Expense: 3490,
    Income: 7800,
    amt: 2100,
  },
  {
    name: 'Aug',
    Expense: 3490,
    Income: 8800,
    amt: 2100,
  },
  {
    name: 'Sep',
    Expense: 3490,
    Income: 8700,
    amt: 2100,
  },
  {
    name: 'Oct',
    Expense: 3490,
    Income: 9000,
    amt: 2100,
  },
  {
    name: 'Nov',
    Expense: 3490,
    Income: 9300,
    amt: 2100,
  },
  {
    name: 'Dec',
    Expense: 3490,
    Income: 9800,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <>
      <div className={styles.body}>
        <h1>Overview</h1>
        <div><p>Yearly</p><IoIosArrowDown className={styles.down}/></div>
      </div>
      
      
      <ResponsiveContainer width="100%" height="100%">
      
        <BarChart
        
          width={300}
          height={200}
          data={data}
          margin={{
            top: 25,
            right: 0,
            left: 0,
            bottom: 35,
          }}
        >
          <Legend/>
            
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          
            <Bar dataKey="Income" fill="#03a3fffb" activeBar={<Rectangle fill="pink" stroke="blue" />} className={styles.income} width={200}/>
          <Bar dataKey="Expense" fill="#9dd7f8fb" activeBar={<Rectangle fill="gold" stroke="purple" />} />
           </BarChart >
      </ResponsiveContainer>
  
      </>
        
          
       
    );
  }
}
