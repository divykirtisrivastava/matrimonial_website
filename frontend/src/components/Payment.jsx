import { CheckCircle } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import pay from '../assets/logoPayment.jpeg'
import axios from 'axios'


export default function Payment() {
    let [amount, setAmount] = useState('')
    let [upi, setUpi] = useState('')
    let [email, setEmail] = useState('')
    let navigation = useNavigate()
    async function handleClick(e) {
        e.preventDefault()
        await axios.post('http://localhost:3000/api/paymentSave', { amount, upi, email })
        alert('Request Submitted.. !, wait for the responce')
        navigation('/')
    }
    return (
        <div className='h-[80vh] bg-gray-400 relative'>
            <div className='mt-[120px] absolute w-full text-center'>
                <h1 className='text-5xl uppercase font-bold tracking-wider text-white'>Payment</h1>
                <div className='flex w-full justify-center mt-12'>
                    <div className='h-[500px] w-[400px] bg-gradient-to-r from-amber-600 to-amber-900'>
                        <h1 className='text-3xl text-white uppercase font-semibold py-5 border-b-2 border-white '>Pay With Any UPI</h1>

                        <div className=''>
                            <form action="" onSubmit={handleClick} method='post' className='flex flex-col text-2xl justify-center items-center mt-8 text-white'>
                                <h1>Enter Your Amount:-</h1>
                                <input type="text" className='rounded px-2 w-3/4 h-8 mt-2 mb-4 text-sm text-black' placeholder='Enter Your Amount' onChange={(e) => setAmount(e.target.value)} />
                                <h1>Enter Your Email:-</h1>
                                <input type="text" className='rounded px-2 w-3/4 h-8 mt-2 mb-4 text-sm text-black' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                                <h1>Enter Your UPI Id:-</h1>
                                <input type="text" className='rounded px-2 w-3/4 h-8 mt-2 text-sm text-black' placeholder='Enter Your UPI Id' onChange={(e) => setUpi(e.target.value)} />
                                <button type='submit' className='px-5 py-2 text-black bg-slate-200 text-xl font-semibold rounded-xl mt-8 block'>Submit</button>
                            </form>

                        </div>

                    </div>
                    <div className='h-[500px] w-[400px] bg-gradient-to-r from-amber-600 to-amber-900'>

                        <img src={pay} alt="" className='w-full h-full' />

                    </div>

                </div>
            </div>
        </div>
    )
}