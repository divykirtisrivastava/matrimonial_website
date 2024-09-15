import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

export default function ViewMore() {

let [view,setView]=useState([])

let {id} = useParams()

async function viewProfile(){
    let result = await axios.get(`http://localhost:3000/api/viewProfile/${id}`)
    setView(result.data)
    // console.log(result.data)
}
useEffect(()=>{
viewProfile()
}, [view])
    
  return (
    

    <>
  {view.map((data, key) => (
  <div key={key} className="flex flex-col md:flex-row w-full max-w-4xl mx-auto mb-10 border rounded-lg overflow-hidden shadow-lg">
    
    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center items-center">
  <img
    src={`http://localhost:3000/${data.image}`}
    alt="Profile Image"
    className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
  />
</div>



    {/* Details Section */}
    <div className="p-6 flex flex-col justify-between bg-white md:w-1/2">
      <div>
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          {data.first_name} {data.last_name}
        </h1>
      
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         gotra:- <span className='font-bold'>{data.gotra}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         birth_time:- <span className='font-bold'>{data.birth_time}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         marital_status:- <span className='font-bold'>{data.marital_status}</span>
       </h1>

       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
        body_height:- <span className='font-bold'>{data.body_height}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         working_profile:- <span className='font-bold'>{data.working_profile}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         Father_occupation:- <span className='font-bold'>{data.Father_occupation}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         mother_occupation:- <span className='font-bold'>{data.mother_occupation}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         no_of_sister:- <span className='font-bold'>{data.no_of_sister}</span>
       </h1> <br/>

       
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
       whatsapp_number:- <span className='font-bold'>{data.whatsapp_number}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         email:- <span className='font-bold'>{data.email}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         about_myself:- <span className='font-bold'>{data.about_myself}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         caste:- <span className='font-bold'>{data.caste}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         sub_caste:- <span className='font-bold'>{data.sub_caste}</span>
       </h1> <br/>

       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
       gender:- <span className='font-bold'>{data.gender}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         date_of_birth:- <span className='font-bold'>{data.date_of_birth}</span>
       </h1>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         manglik:- <span className='font-bold'>{data.manglik}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         education:- <span className='font-bold'>{data.education}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         color:- <span className='font-bold'>{data.color}</span>
       </h1> <br/>

       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
       father_name:- <span className='font-bold'>{data. father_name}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         mother_name:- <span className='font-bold'>{data.mother_name}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         no_of_brother:- <span className='font-bold'>{data.no_of_brother}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         phone_no:- <span className='font-bold'>{data.phone_no}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         password:- <span className='font-bold'>{data.password}</span>
       </h1> <br/>

       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         address:- <span className='font-bold'>{data.address}</span>
       </h1> <br/>
       <h1 className="inline-flex items-center text-lg font-semibold text-gray-600">
         country:- <span className='font-bold'>{data.country}</span>
       </h1> <br/>
        
        {/* Add additional details as needed */}
      </div>

      {/* Back Button */}
      <div className="mt-6 flex justify-center">
        <Link
          to="/admin"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          Back
        </Link>
      </div>
    </div>
  </div>
))}
   </>
  )
}
