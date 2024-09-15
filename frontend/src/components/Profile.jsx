import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import UserContext from '../context/UserContext';

export default function Profile() {
  let navigation = useNavigate()
  let [view, setView] = useState([])
  let { auth } = useContext(UserContext)
  let [show, setShow] = useState(false)
  let [button, setButton] = useState('Please Select The Package')
  let [data, setData] = useState('')
  let { id } = useParams()

  async function getData() {
    if(auth.userData){
      let result = await axios.get(`http://localhost:3000/api/getsignbyid/${auth.userData.id}`)
    if(result.data.paymen_status == 'confirm'){
      setData(result.data)
      setButton('view')
    }else{
      console.log(false)
      setButton('Please Select The Package')
    }

    }

  }
  useEffect(() => {
    getData()
  }, [auth.userData])
  async function viewProfile() {
    let result = await axios.get(`http://localhost:3000/api/viewProfile/${id}`)
    setView(result.data)
  }
  useEffect(() => {
    viewProfile()
  }, [view])


  async function handleShow() {
    if ((data.paymen_status == 'confirm') && (data.current_limit < 22)) {
      await axios.put(`http://localhost:3000/api/upadteSign/${data.id}`, {
        current_limit: +data.current_limit + 1
      })
      setShow(true)
    } else{
      navigation('/packages')
    }
  }
  return (
    <>
      <div className="relative h-[72px] w-full bg-gradient-to-r from-amber-700 to-red-950"></div>

      {view.map((data, key) => (
        <div key={key} className="flex flex-col md:flex-row w-3/4 mx-auto mb-10 border rounded-lg overflow-hidden shadow-lg p-4 bg-gray-300">

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center pt-4 pr-6 pb-4 pl-8 rounded-lg">
            <img
              src={`http://localhost:3000/${data.image}`}
              alt="Profile Image"
              className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
            />
          </div>
          {/* Details Section */}
          <div className="p-6 bg-white md:w-3/4 rounded-md text-center">
            <h1 className="text-2xl font-bold mb-4 text-red-800 uppercase">
              {data.first_name} {data.last_name}
            </h1>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <tbody>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">GOTRA:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.gotra}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">BIRTH TIME:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.birth_time}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">MARITAL STATUS:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.marital_status}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">BODY HEIGHT:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.body_height}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">WORKING PROFILE:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.working_profile}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">FATHER OCCUPATION:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.Father_occupation}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">MOTHER OCCUPATION:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.mother_occupation}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">NO. OF SISTER:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.no_of_sister}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">PHONE NO.:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">
                      {show ? data.phone_no :
                        <button className="px-4 py-1 bg-blue-500 text-white rounded-xl" onClick={handleShow}>
                          {button}
                        </button>
                      }
                    </td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">WHATSAPP NUMBER:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{show ? data.whatsapp_number :
                        <button className="px-4 py-1 bg-blue-500 text-white rounded-xl" onClick={handleShow}>
                          {button}
                        </button>
                      }</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">EMAIL:</td>
                    <td className="px-4 py-2 text-gray-600 font-bold text-left border border-gray-300">{show ? data.email :
                        <button className="px-4 py-1 bg-blue-500 text-white rounded-xl" onClick={handleShow}>
                          {button}
                        </button>
                      }</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">ABOUT MYSELF:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.about_myself}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">CASTE:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.caste}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">SUB CASTE:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.sub_caste}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">GENDER:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.gender}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">DATE OF BIRTH:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.date_of_birth.split('T')[0]}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">MANGLIK:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.manglik}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">EDUCATION:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.education}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">COLOR:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.color}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">FATHER NAME:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.father_name}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">MOTHER NAME:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.mother_name}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">NO OF BROTHER:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.no_of_brother}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">PASSWORD:</td>
                    <td className="px-4 py-2 text-gray-600 font-bold text-left border border-gray-300">{data.password}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">ADDRESS:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.address}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="px-4 py-2 font-bold text-black text-left border border-gray-300">COUNTRY:</td>
                    <td className="px-4 py-2 text-gray-600 uppercase font-bold text-left border border-gray-300">{data.country}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Back Button */}
            <div className="mt-6 flex justify-center p-4">
              <Link
                to="/"
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