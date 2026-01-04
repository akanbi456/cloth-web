import React from 'react'
import { useState,useEffect } from 'react';
import {Image} from '../data/Image';
const Carousel = () => {
    const [carousel, setCarousel] = useState(0);
     useEffect(() => {
    const render = setInterval(() => {
      setCarousel((count) => (count + 1) % ImageData.length);
    }, 3000);
    return () => clearInterval(render);
  }, []);
  return (
    <div>
        <img
        src={Image[carousel].Image}
        alt=""
        className="w-full h-64 md:h-96 object-cover rounded-lg"
      />
      

    </div>
  )
}

export default Carousel