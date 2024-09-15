import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let {id} = useParams()
  const [formData, setFormData] = useState({
    paymen_status: 'pending',
    view_limit:''
  });
  let { paymen_status, view_limit}=formData;


//   async function editUser(id){
//     let result = await axios.get(`http://localhost:3000/api/getsignbyid/${id}`)
//     setFormData(result.data[0])
// }
// useEffect(()=>{
//     editUser()
// }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  let navigator=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
        const response = await axios.put(`http://localhost:3000/api/upadteSign/${id}`, formData);
        navigator('/admin/users')
      
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[url('https://www.shutterstock.com/image-photo/gold-light-bokeh-background-diwali-260nw-2290136961.jpg')] bg-cover bg-center bg-blur-sm bg-brown-500">
      <motion.div
        className="w-full max-w-md p-8 bg-white bg-opacity-80 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form 
        onSubmit={handleSubmit}
        className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Payment Status
            </label>
            <select name="paymen_status" value={paymen_status} onChange={handleChange} id="" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'>
                <option value="pending">Pending</option>
                <option value="confirm">Confirm</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              View Limit
            </label>
            <input name="view_limit" value={view_limit} onChange={handleChange} id="" type='number' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'/>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-amber-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-amber-700 hover:to-amber-800 transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
    </div>
  )
}
