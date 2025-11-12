import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#001F3F] text-gray-300 py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
    
    <div>
        <img src={logo} alt="" className='w-1/2'/>
      <p className="text-sm text-gray-400">
        One platform offering 14 essential student services — smart, simple, and accessible.
      </p>
      <div >
      <h3 className="text-lg font-semibold text-white mt-6 mb-3">Follow Us</h3>
      <div className="flex space-x-4 text-2xl rounded-full">
        <a href="#" className="hover:text-[#48BAFC] transition"><FaInstagram/></a>
        <a href="#" className="hover:text-[#48BAFC] transition"><FaFacebook/></a>
        <a href="#" className="hover:text-[#48BAFC] transition"><FaTwitter/></a>
      </div>
    </div>

   
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-[#48BAFC] transition">About Us</a></li>
        <li><a href="#" className="hover:text-[#48BAFC] transition">Contact</a></li>
        <li><a href="#" className="hover:text-[#48BAFC] transition">Careers</a></li>
        <li><a href="#" className="hover:text-[#48BAFC] transition">FAQs</a></li>
      </ul>
    </div>

 
  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Campsum. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer