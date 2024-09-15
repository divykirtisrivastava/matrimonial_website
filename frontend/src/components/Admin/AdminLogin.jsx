import React, { useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';

export default function AdminLogin() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  let {email,password}=formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  let navigator=useNavigate()
  let {setAdminFlag} = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post('http://localhost:3000/api/adminLogin', formData);
      if(result.data == true){
        navigator('/admin')
        setAdminFlag(true)
        // window.location.reload()
      }else{
        alert("You Entered the Wrong Details")
      }
  };
  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-900">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://www.shutterstock.com/image-photo/bokeh-light-background-beautiful-wedding-260nw-266083019.jpg')` }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div ref={formRef} className="relative w-full max-w-md p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
            className="w-full bg-gradient-to-r from-amber-600 to-amber-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-amber-800 transition-transform transform hover:scale-105"
          >
            Log In
          </button>
        </form>
        <h1 className='mt-2' href="">if you don't have an account ? <Link className='text-blue-700 underline cursor-pointer' to='/sign'>click here</Link> </h1>
      </div>
    </div>
    </div>
  )
}
