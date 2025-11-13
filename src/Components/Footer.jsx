import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#001F3F] text-gray-300  p-6">
 
    

      <div className='flex flex-col items-center '>
        <img src={logo} alt="" className='max-w-1/12'/>
      <p className="text-sm text-gray-400">
       Making student life easier, one service at a time
      </p>
      </div>
   

 
<div className='flex justify-between items-center border-t border-gray-700 mt-5 pt-6 '>

  <div className="text-center text-sm text-gray-500">
    © 2025 Campsum. All rights reserved.
  </div>
      <div className="flex space-x-5  text-2xl rounded-full">
        <a href="#" className="hover:text-[#48BAFC] transition"><FaInstagram/></a>
        <a href="#" className="hover:text-[#48BAFC] transition"><FaFacebook/></a>
        <a href="#" className="hover:text-[#48BAFC] transition"><FaTwitter/></a>
      </div>
      </div>
</footer>

    </div>
  )
}

export default Footer