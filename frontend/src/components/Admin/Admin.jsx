import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react'
import axios from 'axios'
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export  default function Admin() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
  
    // const handleEmailChange = (e) => setEmail(e.target.value);
    // const handlePasswordChange = (e) => setPassword(e.target.value);



    

   
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Handle form submission logic
    // };
  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold leading-tight text-black text-center sm:text-4xl">
          Sign in
        </h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Don&apos;t have an account?{' '}
          <a
            href="#"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create a free account
          </a>
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-base font-medium text-gray-900">
                Email address
              </label>
              <input
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="email"
                name='email'
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">
                Password
              </label>
              <input
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="password"
                name='password'
                value={password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <motion.button
            type="submit"
            onClick={validateAdmin}
            className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign in
          </motion.button>
        </form>
        <div className="mt-6 space-y-3">
          <motion.button
            type="button"
            className="w-full py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">🔵</span> Sign in with Google
          </motion.button>
          <motion.button
            type="button"
            className="w-full py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">🔵</span> Sign in with Facebook
          </motion.button>
        </div>
      </motion.div>
    </section>
    </>
  )
}
