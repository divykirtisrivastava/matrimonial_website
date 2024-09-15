import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations
import { FaBars, FaTimes } from 'react-icons/fa'
import img from '../assets/imglogo.jpeg'
import UserContext from '../context/UserContext';
import { User2Icon, UserCircle, UserCog, UserRound } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let {auth, clientLogout } = useContext(UserContext)
function handleLogout(){
  clientLogout()
  window.location.reload()
}
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div>
       <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <img src={img} alt="Logo" className="h-10" />
          <span className="ml-2">RaikwarRishtey</span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg hover:text-gray-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="text-white text-lg hover:text-gray-300 transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/contactus"
            className="text-white text-lg hover:text-gray-300 transition-colors duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="createprofile"
            className="text-white text-lg hover:text-gray-300 transition-colors duration-300"
          >
            Create Profile
          </Link>
        </nav>

        {/* Action Buttons */}
        {auth.userData ?<div className="hidden md:flex space-x-8 items-center">
          
         <h1 className='text-2xl text-white tracking-wider font-bold flex items-center gap-2'><UserCircle/> {auth.userData.name}</h1>
          <motion.button
          onClick={handleLogout}
            whileHover={{ scale: 1.05, backgroundColor: '#ffb74d' }}
            whileTap={{ scale: 0.95, backgroundColor: '#ff9800' }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-amber-600 to-amber-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-amber-700 hover:to-amber-800"
          >
            Log Out
          </motion.button>
        </div> : <div className="hidden md:flex space-x-4">
          <Link to='/sign'>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#ffb74d' }}
            whileTap={{ scale: 0.95, backgroundColor: '#ff9800' }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-amber-600 to-amber-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-amber-700 hover:to-amber-800"
          >
            Sign Up
          </motion.button>
          </Link>
          <Link to='/login'>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#ffb74d' }}
            whileTap={{ scale: 0.95, backgroundColor: '#ff9800' }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-amber-600 to-amber-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-amber-700 hover:to-amber-800"
          >
            Log In
          </motion.button>
          </Link>
        </div>  }
       

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
      </div>
      <div>
        {isMenuOpen && (
          <div  className='head'>
            <Link
              to="/"
              className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Gallery
            </Link>

            <Link
              to="/contactus"
              className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact us
            </Link>
            
            <Link
              to="/createprofile"
              className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Create Profile
            </Link>
            <div className="flex flex-col space-y-4">
            <Link to='/sign'>
              <motion.button
              
                whileHover={{ scale: 1.05, backgroundColor: '#ffb74d' }}
                whileTap={{ scale: 0.95, backgroundColor: '#ff9800' }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-amber-600 to-amber-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-amber-700 hover:to-amber-800"
              >
                Sign Up
              </motion.button>
              </Link>
              <Link to='/login'>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ffb74d' }}
                whileTap={{ scale: 0.95, backgroundColor: '#ff9800' }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-amber-600 to-amber-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-amber-700 hover:to-amber-800"
              >
                Log In
              </motion.button>
              </Link>
            </div>
           
       
          </div>
        )}
        </div>
    </header>
    </div>
  )
}
