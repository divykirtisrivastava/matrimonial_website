import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Users() {

      let [data,setData]=useState([])

      async function getProfile(){
        let result = await axios.get('http://localhost:3000/api/viewSign')
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
              <th className="px-4 py-3 text-sm uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-sm uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-sm uppercase tracking-wider">Password</th>
              <th className="px-4 py-3 text-sm uppercase tracking-wider">Payment Status</th>
              <th className="px-4 py-3 text-sm uppercase tracking-wider">View Limit</th>
              <th className="px-4 py-3 text-sm uppercase tracking-wider">Current Limit</th>
              <th className="px-4 py-3 text-sm uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data,key) => (
              <tr
                key={key}
                className="border-t hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <td className="px-4 py-4 text-gray-700 text-center">{data.name}</td>
                <td className="px-4 py-4 text-gray-700 text-center">{data.email}</td>
                <td className="px-4 py-4 text-gray-700 text-center">{data.password}</td>
                <td className="px-4 py-1 text-gray-700 text-center bg-green-400 uppercase">{data.paymen_status}</td>
                <td className="px-4 py-4 text-gray-700 text-center">{data.view_limit}</td>
                <td className="px-4 py-4 text-gray-700 text-center">{data.current_limit}</td>
                <td className="px-4 py-4 text-center">
                  <div className="flex justify-center space-x-2">
                   
                   
                   
                    <Link
                    to={`/admin/edituser/${data.id}`}
                      className="px-3 py-2 bg-gray-500 text-white text-xs font-bold rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </div>
  )
}
