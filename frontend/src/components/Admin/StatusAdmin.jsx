import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';


export default function StatusAdmin() {

  let [status, setStatus] = useState('');
let navigation = useNavigate()

// console.log(status)
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.put('http://localhost:3000/api/updateStatus', {
      message:status
    });
    alert("Status Update"); // Show success message
    navigation('/admin')
  } catch (error) {
    console.error("There was an error submitting the profile!", error);
    alert("Failed to submit profile.");
  }
};
  return (
    <div className='header'>
      
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-6">Add Status</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Status Message
            </label>
            <input
              type="text"
              value={status}
              onChange={(e)=>setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your status message"
            />
          </div>
          <div className="flex justify-between gap-2">
            <button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Submit
            </button>
           
          </div>
        </form>
      </div>
    </div>

  </div>
  )
}
