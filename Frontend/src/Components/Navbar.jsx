import React from 'react';
import logo from '../assets/logo.png';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ onMenuClick }) => {
  return (
    <div className='bg-[#0F172A] h-4 w-full px-6 py-12 flex justify-between items-center'>
    <Link to={"/"}>  <img src={logo} className='w-40' alt="" /></Link>
      <ul className='hidden md:flex gap-10 justify-center items-center font-normal text-xl capitalize text-white '>
       <Link to={"/"}> <li className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'>Home</li></Link>
        <Link to={"/services"}><li className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'>Services</li></Link>
       <Link to={"/about-us"}> <li className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'>About Us</li></Link>
       <Link to={"/contact-us"}> <li className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'>
          Contact Us
        </li></Link>
      </ul>
      <div className='hidden md:flex gap-3 justify-between items-center'>
        <button className='bg-[#48BAFC] hover:bg-[#1B98E0] cursor-pointer px-8 py-2 text-lg font-semibold rounded-3xl hover:scale-95 text-white transition-all ease-in duration-150' >Log In </button>
        <button className='border-2 text-white  border-[#48BAFC] hover:bg-[#48BAFC] cursor-pointer px-8 py-2 text-lg font-semibold rounded-3xl hover:scale-95 transition-all ease-in duration-150'>Sign Up</button>
      </div>
      <div className='md:hidden'>
        <button onClick={onMenuClick} className="text-white">
          <Menu size={28} />
        </button>
      </div>
    </div>
  )
}

export default Navbar;