import React from 'react'

const Home = () => {
  return (
    <div className='w-full  font-[Poppins]'>
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
    <h1 className="text-5xl font-bold">Your one-stop solution for all University needs
</h1>
    <p className="mt-4 w-1/2 text-white/80">From finding the perfect accommodation to connecting with roommates, CampSum makes your student life easier and more connected.
</p>
 <div className="flex flex-wrap mt-6 gap-4 justify-center md:justify-start">
      <button className="bg-[#48BAFC] hover:bg-[#1B98E0] px-6 py-3 rounded-xl font-semibold transition-all">
        Get Started
      </button>
      <button className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all">
        Learn More
      </button>
      </div>
  </div>
  <div>
    
  </div>
</div>


    </div>
{/* services section */}
<div className='w-full py-20 px-10 bg-[#F8FAFF] flex flex-col items-center justify-center gap-10'>
  <div className='flex flex-col items-center justify-center max-w-xl gap-4'>
  <h2 className='text-gray-800 text-3xl font-bold'>
    Everything you need for student life
  </h2>
  <p className='text-gray-500 text-lg text-center '>Discover our comprehensive range of services designed specifically for university students
</p>
  <div>
    </div>

  </div>
  <div className='grid grid-cols-3 gap-10'>
    <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out  duration-200'>
 <div className='row-start-1 col-start-1'>  <img className='rounded-2xl' src="https://i.pinimg.com/736x/b8/1b/96/b81b96971350293fbe63e96f57087588.jpg" alt="" /></div>
   <div className='flex justify-between items-center gap-4 row-start-1 col-start-1   text-white  relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-6 px-3 shadow-lg capitalize'>
    <span className='text-left capitalize flex flex-col gap-1 '>
    <h6 className='text-lg font-semibold'>accommodation</h6>
    <p className='text-sm'>Find perfect housing options near your campus</p>
</span>
<span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
   </div>
    </div>
  <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out  duration-200'>
 <div className='row-start-1 col-start-1'>  <img className='rounded-2xl' src="https://i.pinimg.com/736x/b8/1b/96/b81b96971350293fbe63e96f57087588.jpg" alt="" /></div>
   <div className='flex justify-between items-center gap-4 row-start-1 col-start-1   text-white  relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-6 px-3 shadow-lg capitalize'>
    <span className='text-left capitalize flex flex-col gap-1 '>
    <h6 className='text-lg font-semibold'>accommodation</h6>
    <p className='text-sm'>Find perfect housing options near your campus</p>
</span>
<span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
   </div>
    </div>

  <div className='grid items-end capitalize hover:-translate-y-2 transition-all ease-out  duration-200'>
 <div className='row-start-1 col-start-1'>  <img className='rounded-2xl' src="https://i.pinimg.com/736x/b8/1b/96/b81b96971350293fbe63e96f57087588.jpg" alt="" /></div>
   <div className='flex justify-between items-center gap-4 row-start-1 col-start-1   text-white  relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-6 px-3 shadow-lg capitalize'>
    <span className='text-left capitalize flex flex-col gap-1 '>
    <h6 className='text-lg font-semibold'>accommodation</h6>
    <p className='text-sm'>Find perfect housing options near your campus</p>
</span>
<span><button className='border border-white/30 capitalize hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer'> explore </button></span>
   </div>
    </div>


  </div>


</div>
<section className="py-20 bg-gradient-to-r from-[#48BAFC] via-[#2C8EE8] to-[#1B6CC9] text-white text-center">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Ready to Simplify Your Student Life?</h2>
    <p className="text-lg mb-8 text-white/90">
      Join thousands of students using Campsum to access 14 services — all in one place.
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
  )
}

export default Home