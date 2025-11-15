import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='w-full font-[Poppins]'>
      {/* hero section */}
      <div style={{
        backgroundImage: "url('https://i.pinimg.com/736x/52/fb/5d/52fb5d9391eb956d6391abcbb24a43a5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="relative min-h-[90vh] flex items-center justify-center text-center text-white bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[#0A0E27]/70"></div>
          <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold">Your one-stop solution for all University needs</h1>
            <p className="mt-4 w-full md:w-1/2 text-white/80">From finding the perfect accommodation to connecting with roommates, CampSum makes your student life easier and more connected.</p>
            <div className="flex flex-wrap mt-6 gap-4 justify-center">
              <button className="bg-[#48BAFC] hover:bg-[#1B98E0] px-6 py-3 rounded-xl font-semibold transition-all">
                Get Started
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* services section */}
      <div className='w-full py-20 px-4 md:px-10 bg-[#F8FAFF] flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-center justify-center max-w-xl gap-4 text-center'>
          <h2 className='text-gray-800 text-3xl font-bold'>
            Everything you need for student life
          </h2>
          <p className='text-gray-500 text-lg'>Discover our comprehensive range of services designed specifically for university students</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {/* {accomendation} */}
          <Link to={"/accomendation"}>
            <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
              <div className='row-start-1 col-start-1'>
                <img className='rounded-2xl w-full h-full object-cover' src="https://i.pinimg.com/736x/b8/1b/96/b81b96971350293fbe63e96f57087588.jpg" alt="" />
              </div>
              <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
                <span className='text-left capitalize flex flex-col gap-1'>
                  <h6 className='text-lg font-semibold'>accommodation</h6>
                  <p className='text-xs'>Find perfect housing options near your campus</p>
                </span>
                <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
              </div>
            </div>
          </Link>
           {/* {tiffin services} */}
        <Link to={"/tiffinservices"}>  <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
            <div className='row-start-1 col-start-1'>
              <img className='rounded-2xl aspect-3/2 w-full h-full object-cover' src="https://i.pinimg.com/736x/cb/73/85/cb73854cb56a4afd0ef0e118bd1f440a.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
              <span className='text-left capitalize flex flex-col gap-1'>
                <h6 className='text-lg font-semibold'>Tiffin Services</h6>
                <p className='text-xs'>Healthy, affordable meal delivery to your doorstep</p>
              </span>
              <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'>Explore </button></span>
            </div>
          </div></Link>
          <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
            <div className='row-start-1 col-start-1'>
              <img className='rounded-2xl aspect-3/2 w-full h-full object-cover' src="https://i.pinimg.com/736x/f5/98/37/f598376ed7baf8eba373ad9def70c2e7.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
              <span className='text-left capitalize flex flex-col gap-1'>
                <h6 className='text-lg font-semibold'>Marketplace</h6>
                <p className='text-xs'>Buy, sell, and exchange items with fellow students</p>
              </span>
              <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
            </div>
          </div>
          <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
            <div className='row-start-1 col-start-1'>
              <img className='rounded-2xl aspect-3/2 w-full h-full object-cover' src="https://i.pinimg.com/736x/73/16/97/731697342b5b04cba8ca116028bf6012.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
              <span className='text-left capitalize flex flex-col gap-1'>
                <h6 className='text-lg font-semibold'>Mental Health Support</h6>
                <p className='text-xs'>Professional counseling and wellness resources</p>
              </span>
              <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
            </div>
          </div>
          <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
            <div className='row-start-1 col-start-1'>
              <img className='rounded-2xl aspect-3/2 w-full h-full object-cover' src="https://i.pinimg.com/1200x/1e/a2/6d/1ea26dc520337a320781557786eb2597.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
              <span className='text-left capitalize flex flex-col gap-1'>
                <h6 className='text-lg font-semibold'>Lost and Found</h6>
                <p className='text-xs'>Recover lost items or help others find theirs</p>
              </span>
              <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
            </div>
          </div>
          <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
            <div className='row-start-1 col-start-1'>
              <img className='rounded-2xl aspect-3/2 w-full h-full object-cover' src="https://i.pinimg.com/1200x/a2/c3/0d/a2c30db5b264b69e7583cf64838fbfec.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
              <span className='text-left capitalize flex flex-col gap-1'>
                <h6 className='text-lg font-semibold'>Roommate Finder</h6>
                <p className='text-xs'>Connect with compatible roommates and flatmates</p>
              </span>
              <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
            </div>
          </div>
          <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
            <div className='row-start-1 col-start-1'>
              <img className='rounded-2xl aspect-3/2 w-full h-full object-cover' src="https://i.pinimg.com/1200x/a2/c3/0d/a2c30db5b264b69e7583cf64838fbfec.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
              <span className='text-left capitalize flex flex-col gap-1'>
                <h6 className='text-lg font-semibold'>Blogs & Articles</h6>
                <p className='text-xs'>Read Wide Range of Blogs and Articles</p>
              </span>
              <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
            </div>
          </div>
          <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
            <div className='row-start-1 col-start-1'>
              <img className='rounded-2xl aspect-3/2 w-full h-full object-cover' src="https://i.pinimg.com/1200x/c9/d3/de/c9d3deb19915ad48a363a460f2a9bd76.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
              <span className='text-left capitalize flex flex-col gap-1'>
                <h6 className='text-lg font-semibold'>Rakt Connect</h6>
                <p className='text-xs'>Book Blood Donation Appointment</p>
              </span>
              <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
            </div>
          </div>
          <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
            <div className='row-start-1 col-start-1'>
              <img className='rounded-2xl aspect-3/2 w-full h-full object-cover' src="https://i.pinimg.com/1200x/12/22/31/122231d3137e5eb5c804b13465d208f2.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
              <span className='text-left capitalize flex flex-col gap-1'>
                <h6 className='text-lg font-semibold'>Student Discount</h6>
                <p className='text-xs'>Exclusive deals and offers for university students</p>
              </span>
              <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'>explore</button></span>
            </div>
          </div>
          <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out duration-200'>
            <div className='row-start-1 col-start-1'>
              <img className='rounded-2xl aspect-3/2 w-full h-full object-cover' src="https://i.pinimg.com/1200x/cb/7b/c9/cb7bc9d4fffcfac5aef3c6bb35f7c118.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center gap-4 row-start-1 col-start-1 text-white relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-5 px-3 shadow-lg capitalize'>
              <span className='text-left capitalize flex flex-col gap-1'>
                <h6 className='text-lg font-semibold'>Events & Updates</h6>
                <p className='text-xs'>Stay updated with campus events and important notices</p>
              </span>
              <span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20 bg-linear-to-r from-[#48BAFC] via-[#2C8EE8] to-[#1B6CC9] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Student Life?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of students using CampSum to access 14 services — all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#1B6CC9] font-semibold rounded-full shadow-md hover:scale-105 hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="px-8 py-3 border border-white/70 text-white font-semibold rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;