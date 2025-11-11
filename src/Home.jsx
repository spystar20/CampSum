import React from 'react'

const Home = () => {
  return (
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
 <div class="flex flex-wrap mt-6 gap-4 justify-center md:justify-start">
      <button class="bg-[#48BAFC] hover:bg-[#1B98E0] px-6 py-3 rounded-xl font-semibold transition-all">
        Get Started
      </button>
      <button class="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all">
        Learn More
      </button>
      </div>
  </div>
  <div>
    
  </div>
</div>


    </div>
  )
}

export default Home