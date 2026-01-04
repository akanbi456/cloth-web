import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram,FaMapMarkerAlt,FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white p-10 flex flex-col md:flex-row justify-between items-center md:items-center gap-4">
      
      
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl font-bold">Light Collection</h2>
        <h4 className="text-sm text-gray-200 mt-1">
          &copy; {new Date().getFullYear()} light collection. All rights reserved.
        </h4>
        <div className="flex items-center gap-2 text-gray-200 text-sm">
          <FaMapMarkerAlt className="text-white" />
          <p>11 lane ebute metta (west), Lagos, Nigeria</p>
        </div>
        <div className="flex items-center gap-2 text-gray-200 text-sm mt-1">
          <FaPhoneAlt className="text-white" />
          
          <p></p>
        </div>
      </div>

      
      <div className="flex gap-4">
        <FaFacebookF className="hover:text-gray-200 cursor-pointer" size={24} />
        <FaTwitter className="hover:text-gray-200 cursor-pointer" size={24} />
        <FaPinterestP className="hover:text-gray-200 cursor-pointer" size={24} />
        <a href="https://www.instagram.com/light_leads0.1?igsh=MXI1MWt6YjA3MmI1Mw==">
                <FaInstagram className="hover:text-gray-200 cursor-pointer" size={24} />
                

        </a>
      </div>

     
    </footer>
  )
}

export default Footer
