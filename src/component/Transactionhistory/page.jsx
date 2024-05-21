'use client'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import './transactionhistory.css'

const Transactionhistory = () => {
    return (
        <>
            
            <table>
                <thead>
                    <tr>
                        <th>Transaction</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>   
                </thead>

                <tbody>
                    <tr>
                        <td> <FaRegUserCircle/> Black beauty</td>
                        <td>Feb 24, 2024</td>
                        <td>$2000</td>
                        <td><button id="status1">Success</button></td>
                        <td><button>Details</button></td>
                    </tr>

                    <tr>
                        <td> <FaRegUserCircle/> Kate Bishop</td>
                        <td>Feb 23, 2024</td>
                        <td>$2500</td>
                        <td><button id="status2">Pending</button></td>
                        <td><button>Details</button></td>
                    </tr>

                    <tr>
                        <td> <FaRegUserCircle/> Flying jack</td>
                        <td>Feb 23, 2024</td>
                        <td>$2500</td>
                        <td><button id="status2">Pending</button></td>
                        <td><button>Details</button></td>
                    </tr>

                    <tr>
                        <td> <FaRegUserCircle/> Psycho man</td>
                        <td>Feb 24, 2024</td>
                        <td>$2500</td>
                        <td><button id="status3">Failed</button></td>
                        <td><button>Details</button></td>
                    </tr>

                    <tr>
                        <td> <FaRegUserCircle/> Sakura useless</td>
                        <td>Feb 25, 2024</td>
                        <td>$2000</td>
                        <td><button id="status3">Failed</button></td>
                        <td><button>Details</button></td>
                    </tr>

                    <tr>
                        <td> <FaRegUserCircle/> Black beauty</td>
                        <td>Feb 25, 2024</td>
                        <td>$2000</td>
                        <td><button id="status1">Success</button></td>
                        <td><button>Details</button></td>
                    </tr>

                    
                </tbody>
            </table>

        </>
    )
}

export default Transactionhistory