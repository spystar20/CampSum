import React from 'react';
import logo from '../assets/logo.png';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ onMenuClick }) => {
  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className='bg-[#0F172A] h-16 w-full px-6 py-10 flex justify-between items-center'
      initial='hidden'
      animate='visible'
      variants={itemVariants}
      transition={{ duration: 0.5 }}
    >
      <Link to={"/"}>
        <motion.img
          src={logo}
          className='w-40'
          alt=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </Link>
      <ul className='hidden md:flex gap-10 justify-center items-center font-normal text-xl capitalize text-white '>
        <Link to={"/"}>
          <motion.li
            className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.li>
        </Link>
        <Link to={"/services"}>
          <motion.li
            className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Services
          </motion.li>
        </Link>
        <Link to={"/about-us"}>
          <motion.li
            className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About Us
          </motion.li>
        </Link>
        <Link to={"/contact-us"}>
          <motion.li
            className='hover:text-[#48BAFC] cursor-pointer transition-all  ease-in duration-100 hover:-translate-y-1 translate-y-0'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.li>
        </Link>
      </ul>
      <div className='hidden md:flex gap-3 justify-between items-center'>
        <Link to={"/login"}>
          <motion.button
            className='bg-[#48BAFC] hover:bg-[#1B98E0] cursor-pointer px-8 py-2 text-lg font-semibold rounded-3xl text-white transition-all ease-in duration-150'
            variants={buttonVariants}
            whileHover='hover'
            whileTap='tap'
          >
            Log In
          </motion.button>
        </Link>
        <Link to={"/signup"}>
          <motion.button
            className='border-2 text-white  border-[#48BAFC] hover:bg-[#48BAFC] cursor-pointer px-8 py-2 text-lg font-semibold rounded-3xl transition-all ease-in duration-150'
            variants={buttonVariants}
            whileHover='hover'
            whileTap='tap'
          >
            Sign Up
          </motion.button>
        </Link>
      </div>
      <div className='md:hidden'>
        <button onClick={onMenuClick} className="text-white">
          <Menu size={28} />
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;