


import React from 'react'
import Carousel from '../Component/Carousel'
import Back from '../Image/Back.jpeg'
const Header = () => {
  return (
    <header className="w-full bg-white"
   >
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-8 md:px-16 py-12 sm:py-16 md:py-24"
       style={{backgroundImage:`url(${Back})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-green-700">
            SHINE <br /> DIFFERENTLY.
          </h1>
          <p className="text-gray-800 mt-4 sm:mt-6 text-base sm:text-lg">
            Streetwear that carries energy, faith, and culture.
          </p>
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition-all">
            SHOP NOW
          </button>
        </div>

      
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src=""
            alt=""
            className="w-64 sm:w-80 md:w-[420px] rounded-lg object-cover"
          />
          {/* <Carousel /> */}
        </div>

      </section>
    </header>
  )
}

export default Header
