
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ProfileCard = ({ title, imageUrl, description }) => (
  <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
    <img className="w-full h-3/4 object-fill" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <h2 className="text-4xl text-center font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-lg text-center">{description}</p>
    </div>
  </div>
);

const images = [
  "https://www.nrimb.com/assets/images/couple-img1.jpg",
  "https://i0.wp.com/moviegalleri.net/wp-content/uploads/2022/06/director-vignesh-shivan-actress-nayanthara-marriage-photos-hd-wedding-photos.jpg?resize=2500%2C2500&ssl=1",
  "https://www.nrimb.com/assets/images/g-img5.jpg",
  "https://www.nrimb.com/assets/images/couple-img2.jpg",
  "https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg",
  "https://www.nrimb.com/assets/images/couple-img3.jpg",
  "https://i.pinimg.com/736x/f6/ac/fa/f6acfa98187ceb14dc5f7d7fcf5b2ce7.jpg",
  "https://5.imimg.com/data5/ANDROID/Default/2022/7/GI/NL/OS/41037327/product-jpeg-500x500.jpg",
];

export default function Home() {
  let [profile, setProfile] = useState('')
  let [status, setStatus] = useState('')

 // State for form inputs and errors
 const [formData, setFormData] = useState({
  First_Name: '',
  Email_Address: '',
  Phone_Number: '',
  Message: ''
});
let {First_Name, Email_Address,Phone_Number,Message}=formData;


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/api/enquirySave', formData);
    alert(response.data); // Display success message
  } catch (error) {
    console.error("There was an error submitting the enquiry!", error);
    alert("Failed to submit enquiry");
  }
};

const [formErrors, setFormErrors] = useState({});

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

async function handleFilter(gender) {
  if(gender == 'Male'){
    setProfile('Groom')
  }else{
    setProfile('Bride')
  }
  let result = await axios.get('http://localhost:3000/api/getProfile')
  let filerData  = result.data.filter((x)=> x.gender == gender)
  setData(filerData)
}

// Form validation logic
const validateForm = () => {
  let errors = {};

  if (!formData.First_Name) {
    errors.First_Name = "First name is required.";
  }
  if (!formData. Email_Address) {
    errors.Email_Address = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.Email_Address = "Email is invalid.";
  }
  if (!formData.phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    errors.phone = "Phone number must be 10 digits.";
  }
  if (!formData.Message) {
    errors.Message = "Message is required.";
  }
  return errors;
};

let [data,setData]=useState([])

async function getProfile(){
  let responce = await axios.get('http://localhost:3000/api/getStatus')
  setStatus(responce.data[0])
  let result = await axios.get('http://localhost:3000/api/getProfile')
  let final = result.data.filter((x)=> x.status == 'confirm')
  setData(final)
}  
useEffect(()=>{
  getProfile()
},[])

  return (
    <>
    <div>
      <div>
      <div className="relative w-full h-[950px] md:h-scree lg:h-screen n bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg?cs=srgb&dl=pexels-ankur-kumar-2067233-3872626.jpg&fm=jpg'}}>
      <div className="absolute inset-0 bg-black opacity-25"></div>
      {/* Banner with Heading */}
      <div className="absolute  inset-0 flex flex-col items-start justify-start md:justify-center z-10 left-5 top-[160px]">
  <div className="relative z-10 text-white">
    <h2 className="relative text-[8vw] md:text-[60px] font-extrabold font-[Georgia,serif] left-[10vw] md:left-[100px] bottom-[5vw] md:bottom-[60px]">
      World's No.1 <br />
      Matrimony
    </h2>
    <h4 className="relative text-[4vw] md:text-[25px] left-[10vw] md:left-[100px] bottom-[5vw] md:bottom-[60px]">
      Millions have found their perfect Partner <br />
      through us! Next can be you...
    </h4>
  </div>

  
 
</div>

      {/* form */}
        <div className="relative h-32 flex items-center justify-end top-[590px] md:top-[300px] px-4 py-8">
          <div className="w-full max-w-md bg-transparent backdrop-blur-md border-2 rounded-lg shadow-lg px-6 py-2 z-10 opacity-85">
            <h2 className="text-3xl font-bold text-white text-center">Enquiry Now</h2>
            <form action="#" method="POST" className="mt-4 space-y-4" onSubmit={handleSubmit}>
      {/* First Name Field */}
      <div>
        <label htmlFor="name" className="text-xl font-medium text-white">First Name</label>
        <input
          className={`mt-2 w-full bg-transparent rounded-md border px-3 py-1 text-sm placeholder:text-white focus:outline-none focus:ring-1 ${
            formErrors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-400"
          }`}
          type="text"
          name="First_Name"
          placeholder="First Name"
          id="First_Name"
          value={First_Name}
          onChange={handleInputChange}
        />
        {formErrors.First_Name && <p className="text-red-500 text-sm mt-1">{formErrors.First_Name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="text-xl font-medium text-white">Email Address</label>
        <input
          className={`mt-2 w-full bg-transparent rounded-md border px-3 py-1 text-sm placeholder:text-white focus:outline-none focus:ring-1 ${
            formErrors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-400"
          }`}
          type="email"
          name="Email_Address"
          id="Email_Address"
          placeholder="Email"
          value={Email_Address}
          onChange={handleInputChange}
        />
        {formErrors.Email_Address && <p className="text-red-500 text-sm mt-1">{formErrors.Email_Address}</p>}
      </div>

      {/* Phone Number Field */}
      <div>
        <label htmlFor="phone" className="text-xl font-medium text-white">Phone Number</label>
        <input
          className={`mt-2 w-full bg-transparent rounded-md border px-3 py-1 text-sm placeholder:text-white focus:outline-none focus:ring-1 ${
            formErrors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-400"
          }`}
          type="tel"
          placeholder="Phone Number"
          name="Phone_Number"
          id="Phone_Number"
          value={Phone_Number}
          onChange={handleInputChange}
        />
        {formErrors.Phone_Number && <p className="text-red-500 text-sm mt-1">{formErrors.Phone_Number}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="text-xl font-medium text-white">Message</label>
        <textarea
          className={`mt-2 w-full bg-transparent rounded-md border px-3 py-1 text-sm placeholder:text-white focus:outline-none focus:ring-1 ${
            formErrors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-400"
          }`}
          name="Message"
          id="Message"
          rows="4"
          value={Message}
          onChange={handleInputChange}
        />
        {formErrors.Message && <p className="text-red-500 text-sm mt-1">{formErrors.Message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-[#df5e55] px-4 py-2 text-white font-semibold flex items-center justify-center hover:bg-[#e79090]"
        >
          Submit
        </button>
      </div>
    </form>
          </div>
        </div>
      </div>
      </div>
      <div className='w-full h-12 bg-gradient-to-r from-amber-600 to-amber-900 flex items-center justify-center uppercase text-white text-2xl tracking-wider font-bold'>
          <marquee behavior="alternate" direction="" scrollAmount="12">{status.message}</marquee>
      </div>
    {/* addstatus */}




     {/* addstatus */}
      {/* profile card */}
      <div className="flex flex-wrap justify-center gap-16 p-6">
  <button onClick={()=>handleFilter("Female")} className="transform transition-transform duration-300 hover:scale-105">
    <ProfileCard
      title="Bride"
      imageUrl="https://media.weddingz.in/images/04167d9ff92fc110cba566214de26d2c/South-Indian-brides-who-rocked-the-South-Indian-bridal-look42.jpg"
      description="Meet our lovely bride. She brings joy and elegance to the occasion."
      className="hover:bg-gray-100 transition-all duration-300 ease-in-out"
    />
  </button>
  
  <button onClick={()=>handleFilter("Male")} className="transform transition-transform duration-300 hover:scale-105">
    <ProfileCard
      title="Groom"
      imageUrl="https://thumbs.dreamstime.com/b/hindu-groom-wedding-day-stage-wearing-maroon-dress-turban-indian-photography-rajputana-style-venue-smiling-marriage-images-185735916.jpg"
      description="Meet our dashing groom. He embodies charm and sophistication."
      className="hover:bg-gray-100 transition-all duration-300 ease-in-out"
    />
  </button>
</div>


      {/* card */}
      {/* <div className="container mx-auto p-6">
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-slate-100">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mb-4">
              <img
                src="https://i.pinimg.com/736x/4a/13/f5/4a13f5095f0a3a6037f55126d0c4a28b.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Age: 28</p>
            <p className="text-gray-600">Occupation: Software Engineer</p>
            <p className="text-gray-600">Location: New York, USA</p>

            <Link to="/profile" className="mt-4 bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 transition-colors duration-200">
              View Profile
            </Link>
          </div>
        </div>

        
      </div>
    </div> */}

{/* 2card */}

<div className="h-auto w-screen bg-[#df5e5514] ">
  <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 4, x: 0 }}
          transition={{ duration: 5 }}
        >
          <h1 className="text-4xl py-3 text-white bg-black tracking-wider text-center md:text-5xl lg:text-6xl font-extrabold">
           {profile}  Profiles
          </h1>
    </motion.div>
  <div className="container mx-auto px-4 py-8">

    {/* Card Grid Container */}
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((data, key) => (
        <div
          key={key}
          className="bg-amber-900 border border-amber-700 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out p-6 flex flex-col"
        >
          {/* Circular Image */}
          <div className="flex justify-center mb-4">
            <img
              src={`http://localhost:3000/${data.image}`} // Mapped image from data
              alt={`${data.first_name} ${data.last_name}`} 
              className="w-24 h-24 rounded-full object-cover border-4 border-amber-600 shadow-md"
            />
          </div>

          {/* Card Content */}
          <div className="flex-1 text-center">
            {/* Card Details */}
            <h3 className="text-xl font-bold text-white mb-2">{data.first_name} {data.last_name}</h3>
            <p className="text-gray-300 mb-2">Marital Status: {data.marital_status}</p>
            <p className="text-gray-300 mb-2">Working Profile: {data.working_profile}</p>
            <p className="text-gray-300 mb-2">Gender: {data.gender}</p>
            <p className="text-gray-300 mb-4">Country: {data.country}</p>

            {/* Action Button */}
            <Link
              to={`/profile/${data.id}`}
              className="inline-block bg-gray-500 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-gray-600 transition-transform duration-300 transform hover:scale-110"
            >
              View More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    
      {/* stories */}




    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        {/* Title Section with Animation */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 4, x: 0 }}
          transition={{ duration: 5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Thousands of
            <br />
            <span className="text-[#df5e55]">Success</span> Stories
          </h1>
        </motion.div>

        {/* Description Section with Animation */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 4, y: 0 }}
          transition={{ duration: 4, delay: 3 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            We take pride in publishing the most inspiring couple's success stories as we can motivate other members who are looking forward to finding the most ideal match through NRI Marriage Bureau. You can browse our happily married life stories of the couples.
          </p>
        </motion.div>
      </div>
    </div>


{/* image gallery */}
<div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={image}
              alt={`Matrimony ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}
