import React from 'react'
import Logo from '../assets/Logo.jpeg'

const About = () => {
  return (
    <div id="about" className="px-8 md:px-16 py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="about-us"
            className="w-full max-w-md rounded-2xl  object-cover"
          />
        </div>

        
        <div className="flex flex-col justify-center text-green-700">
          <h2 className="text-4xl font-bold mb-6">Light Collections</h2>
          <p className="text-green-600 mb-4 leading-relaxed">
            Welcome to <span className="font-semibold">Light Clothing</span>, your number one source for all things fashion. We're dedicated to providing you the very best of clothing, with an emphasis on quality, style, and affordability.
          </p>
          <p className="text-green-600 mb-4 leading-relaxed">
            Founded in 2023, Light Clothing has come a long way from its beginnings. Our passion for stylish and comfortable clothing drove us to start our own brand that blends elegance with comfort.
          </p>
          <p className="text-green-600 mb-4 leading-relaxed">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="text-green-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maiores eveniet illum dolores numquam sunt earum autem ea, veritatis a voluptas labore, reiciendis aut enim non quaerat iure debitis officia necessitatibus quo tenetur cumque nostrum, dicta rem?
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
