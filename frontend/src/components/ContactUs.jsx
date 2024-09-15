import React, { useState } from "react";
import axios from 'axios'
export default function ContactUs() {

  // State for form inputs and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let {name,email,message}=formData;

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/contactSave',formData)
  }

  const [formErrors, setFormErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Form validation logic
  const validateForm = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required.";
    }
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.message) {
      errors.message = "Message is required.";
    }
    return errors;
  };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const errors = validateForm();
  //   setFormErrors(errors);

  //   // If no errors, display alert and log data
  //   if (Object.keys(errors).length === 0) {
  //     alert("Form submitted successfully!");
  //     console.log("Form Data:", formData);
  //     // Clear form after submission
  //     setFormData({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //   } else {
  //     alert("Please correct the highlighted errors.");
  //     console.log(formData)
  //   }
  // };

  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-96 bg-cover bg-center " style={{ backgroundImage: 'url(https://raikwarrishtey.com/img/about-us.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 class="text-2xl sm:text-3xl md:text-[4rem] text-white font-bold font-serif">Contact Us</h1>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 ">
        {/* Header Section */}
        <h1 className="text-5xl font-bold mb-6 text-center font-serif">Get in Touch</h1>
        
        {/* Contact Form and Image Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="md:w-3/4">
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src="https://www.wedgatematrimony.com/wp-content/uploads/2022/01/wedding-women-bride.jpg"
              alt="Contact Us"
            />
          </div>
          
          {/* Contact Form Section */}
          <div className="md:w-3/4 bg-[#301909] p-8 rounded-lg shadow-lg">
          <form method="post">
      {/* Name Field */}
      <div className="mb-6">
        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
            formErrors.name ? "border-red-500" : ""
          }`}
          id="name"
          type="text"
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        {formErrors.name && (
          <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
            formErrors.email ? "border-red-500" : ""
          }`}
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={handleInputChange}

        />
        {formErrors.email && (
          <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
            formErrors.message ? "border-red-500" : ""
          }`}
          id="message"
          rows="5"
          placeholder="Your Message"
          name="message"
          value={message}
          onChange={handleInputChange}
        ></textarea>
        {formErrors.message && (
          <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
          type="submit"
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </div>
    </form>
</div>

        </div>
      </div>
    </>
  );
}
