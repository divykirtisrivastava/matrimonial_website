import { CheckCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Packages() {
    return (
      <div className='h-[80vh] bg-gray-400 relative'>
        <div className='mt-[120px] absolute w-full text-center'>
          <h1 className='text-5xl uppercase font-bold tracking-wider text-white'>Packages</h1>
          <div className='flex w-full justify-evenly mt-12'>
              <div className='h-[500px] w-[400px] rounded-xl bg-gradient-to-r from-amber-600 to-amber-900'>
                  <h1 className='text-3xl text-white uppercase font-semibold py-5 border-b-2 border-white '>Standard Package</h1>
                  <div className='w-full flex flex-col items-center gap-5 mt-8'>
                  <h1 className='flex text-2xl font-semibold items-center gap-5 text-white'><CheckCircle color='white'/> 25 Contact</h1>
                  <h1 className='flex text-2xl font-semibold items-center gap-5 text-white'><CheckCircle color='white'/> 25 Emails</h1>
                  <h1 className='flex text-2xl font-semibold items-center gap-5 text-white'><CheckCircle color='white'/> 25 WhatsApp <br /> Number</h1>
                  <h1 className='flex text-2xl font-semibold items-center gap-5 text-white'><CheckCircle color='white'/> 25 Contact</h1>
                  <Link to='/payment'  className='px-5 py-2 bg-slate-200 text-xl font-semibold rounded-xl mt-8 block'>Buy Now</Link>
                  </div>
  
              </div>
              <div className='h-[500px] w-[400px] rounded-xl bg-gradient-to-r from-amber-600 to-amber-900'>
              <h1 className='text-3xl text-white uppercase font-semibold py-5 border-b-2 border-white '>Standard Package</h1>
                  <div className='w-full flex flex-col items-center gap-5 mt-8'>
                  <h1 className='flex text-2xl font-semibold items-center gap-5 text-white'><CheckCircle color='white'/> 50 Contact</h1>
                  <h1 className='flex text-2xl font-semibold items-center gap-5 text-white'><CheckCircle color='white'/> 50 Emails</h1>
                  <h1 className='flex text-2xl font-semibold items-center gap-5 text-white'><CheckCircle color='white'/> 50 WhatsApp <br /> Number</h1>
                  <h1 className='flex text-2xl font-semibold items-center gap-5 text-white'><CheckCircle color='white'/> 50 Contact</h1>
                  <Link to='/payment' className='px-5 py-2 bg-slate-200 text-xl font-semibold rounded-xl mt-8'>Buy Now</Link>
                  </div>
  
              </div>
          </div>
        </div>
      </div>
    )
  }
  



