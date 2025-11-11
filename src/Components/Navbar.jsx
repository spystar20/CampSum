import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='bg-[#0F172A] h-4 w-full px-6 py-12 flex justify-between items-center'>
        <img src={logo} className='w-40' alt="" />
        <ul className='flex gap-10 justify-center items-center font-normal text-xl capitalize text-white '>
            <li className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'>Home</li>
            <li className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'>About </li>
            <li className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'>services</li>
            <li className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'>
                contact us 
            </li>
        </ul>
        <div className='flex gap-3 justify-between items-center'>
            <button className='bg-[#48BAFC] hover:bg-[#1B98E0] cursor-pointer px-8 py-2 text-lg font-semibold rounded-3xl hover:scale-95 text-white transition-all ease-in duration-150' >Log In </button>
            <button className='border-2 text-white  border-[#48BAFC] hover:bg-[#48BAFC] cursor-pointer px-8 py-2 text-lg font-semibold rounded-3xl hover:scale-95 transition-all ease-in duration-150'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar