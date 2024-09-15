// Footer.js
import React from 'react';
import image from '../assets/logo.png'
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
      <div>

<footer className="bg-cover relative bottom-0 bg-center text-white py-4" style={{ backgroundImage: "url('https://png.pngtree.com/background/20230618/original/pngtree-bride-and-groom-standing-in-front-of-a-room-full-of-picture-image_3711960.jpg')" }}>
    <div className="container mx-auto px-4">
         {/* Row 1: Logo and Description */}
         <div className="flex flex-col md:flex-row md:justify-between mb-8">
           <div className="mb-4 md:mb-0">
             <h1 className="text-3xl font-bold">
               <img src={image} alt="Logo" className="relative h-[60px] w-[60px] rounded-full" />
            </h1>
             <p className="mt-2">Matrimonial services</p>
           </div>
          <div className="flex space-x-4 justify-center md:justify-start">
             <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400">
    <FaFacebookF size={24} />
             </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
               <FaTwitter size={24} />
             </a>
           <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400">
               <FaInstagram size={24} />
    </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

      {/* Row 2: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  ABC matrimonial is personalized matching service for Rishtey (bride and grooms).
               </a>
             </li>
           </ul>
         </div>

          <div className="relative md:bottom-[55px] md:left-[130px]">
            <h2 className="text-lg font-semibold">Explore</h2>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About</a></li>
              <li><a href="/contactus" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

         <div className="relative md:bottom-[55px] md:left-[130px]">
            <h2 className="text-lg font-semibold">Services</h2>
           <ul>
              <li><a href="/blog" className="hover:text-gray-400">Blog</a></li>
              
             <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
           </ul>
          </div>

          <div className="relative md:bottom-[55px] md:left-[130px]">
          <h2 className="text-lg font-semibold">Legal</h2>
           <ul>
              <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Row 3: Contact Information */}
        <div className="flex flex-col md:flex-row justify-between gap-5">
           <p>&copy; {new Date().getFullYear()} ABC Matrimonial. All rights reserved.</p>
         </div>
       </div>
    </footer>
    </div>
    );
};

export default Footer;
