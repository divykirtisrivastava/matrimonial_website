import React, { useState } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Sign() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  let {name,email,password}=formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  let navigator=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
      const result = await axios.get(`http://localhost:3000/api/getsignbyemail/${formData.email}`);
      console.log(result)
      if(result.data == true){
        alert('Email already Register !')
      }else{
        const response = await axios.post('http://localhost:3000/api/signSave', formData);
        navigator('/login')
      }
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              placeholder="Your Password"
            />
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
