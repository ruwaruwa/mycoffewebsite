import React from 'react'
import { FaGoogle, FaSquareFacebook, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa6'

export default function Fouter() {
  return (
    <div className='bg-my mt-3 px-2 py-2'>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8'>
<div className='px-4 gap-2 b'>
    <span className='font-sans text-3xl p-6 px-1 py-4'>Contact Info</span>
    <div className='p-4'>
        <span className='text-white font-serif text-2xl'>
        Adress: wartanabada/np
           </span>
           <div>
            <span className='text-white font-mono px-2'>Phone: 06138776376</span>
           </div>
           <div>
            <span className='text-white font-mono px-2'>Email:Buris@gmail.com</span>
           </div>
           <div className='flex gap-3 py-4 mt-4'>
        <div className='p-4 bg-bluedark rounded-md'>
        <FaSquareFacebook className='text-2xl  text-white '/>
        </div>
           <div className='p-4 bg-gr rounded-lg'>
        <FaGoogle className='text-2xl  text-white '/>
           </div>
           <div className='p-4 bg-bluedark rounded-lg'>
        <FaTelegram className='text-2xl  text-white '/>
           </div>
           <div className='p-4 bg-red rounded-lg'>
        <FaYoutube className='text-2xl  text-white '/>
           </div>
           <div className='p-4 bg-bluedark rounded-lg'>
        <FaTwitter className='text-2xl  text-white '/>
           </div>
           </div>
    </div>
</div>
<div className='px-4'>
    <span className='font-sans text-3xl p-6 py-4 px-1'>Information</span>
    <div className='p-4'>
        <span className='text-white font-sans text-2xl'>
      About Us
           </span>
           <div>
            <span className='text-white font-sans text-2xl px-2'>Delivery information</span>
           </div>
           <div>
            <span className='text-white font-sans text-2xl px-2'>Privacy Policy</span>
           </div>
           <div>
            <span className='text-white font-sans text-2xl px-2'>Terms & condions</span>
           </div>
          
    </div>
</div>
<div className='px-4'>
    <span className='font-sans text-3xl p-6 py-4 px-1'>My Acount</span>
    <div className='p-4'>
        <span className='text-white font-sans text-2xl'>
      My Account
           </span>
           <div>
            <span className='text-white font-sans text-2xl px-2'>Order History</span>
           </div>
           <div>
            <span className='text-white font-sans text-2xl px-2'>wish list</span>
           </div>
           <div>
            <span className='text-white font-sans text-2xl px-2'>newsleter</span>
           </div>
           <div>
            <span className='text-white font-sans text-2xl px-2'>Returns</span>
           </div>
          
    </div>
</div>
<div className='px-4'>
    <span className='font-sans text-3xl p-6 py-4 px-1'>My Acount</span>
    <div className='p-4 px-3'>
        <span className='text-white font-sans text-2xl '>
      My Account
           </span>
           <div>
            <span className='text-white font-sans text-2xl  px-2'>Order History</span>
           </div>
           <div>
            <span className='text-white font-sans text-2xl  px-2'>wish list</span>
           </div>
           <div>
            <span className='text-white font-sans text-2xl  px-2'>newsleter</span>
           </div>
           <div>
            <span className='text-white font-sans  text-2xl px-2'>Returns</span>
           </div>
          
    </div>
</div>
            </div>
        </div>
    </div>
  )
}
