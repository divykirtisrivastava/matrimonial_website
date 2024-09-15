import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Payments() {

      let [data,setData]=useState([])

      async function getProfile(){
        let result = await axios.get('http://localhost:3000/api/viewPayment')
        setData(result.data)
    }   
    
    useEffect(()=>{
      getProfile()
    },[data])

    async function handlependingStatus(id) {
       let flag = confirm('Are U Sure To Accept the Profile')
       if(flag){
        const response = await axios.put(`http://localhost:3000/api/updateProfile/${id}`,{
          status:'confirm'
        })
        getProfile()
       }
    }
    async function handledecineStatus(id) {
      let flag = confirm('Are U Sure To Reject the Profile')
      if(flag){
       const response = await axios.put(`http://localhost:3000/api/updateProfile/${id}`,{
         status:'pending'
       })
       getProfile()
      }
    }
    
  return (
    <div className='header'>
      
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Matrimonial User Panel
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-amber-500 to-indigo-500 text-white">
              <th className="px-4 py-3 text-sm uppercase tracking-wider">upi</th>
              <th className="px-4 py-3 text-sm uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-sm uppercase tracking-wider">amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data,key) => (
              <tr
                key={key}
                className="border-t hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <td className="px-4 py-4 text-gray-700 text-center">{data.upi}</td>
                <td className="px-4 py-4 text-gray-700 text-center">{data.email}</td>
                <td className="px-4 py-4 text-gray-700 text-center">{data.amount}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </div>
  )
}
