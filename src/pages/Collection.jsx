
import React, { useState } from "react";
import { Product } from "../data/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Collections = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <section id="product" className="px-8 md:px-16 py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tighter text-green-600 sm:text-5xl text-center">
          Our Collections
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Product.map((collection) => (
            <div
              key={collection.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="rounded-lg w-full h-64 object-cover cursor-pointer"
                onClick={() => setSelectedProduct(collection)}
              />
              <h3 className="text-2xl font-semibold text-green-700 mt-4 text-center">
                {collection.name}
              </h3>
              <div className="flex justify-center mt-4">
                <a
                  href="https://wa.me/2347047017978?text=%F0%9F%92%A1%20Hi%2C%20I%27m%20_________.%0A%0AI%20just%20checked%20out%20LIGHT%20and%20I%20felt%20the%20vibe%20instantly.%20This%20is%20more%20than%20clothing%2C%20and%20I%27m%20ready%20to%20wear%20that%20energy.%20I%20want%20to%20order%20a%20cloth%20that%20matches%20my%20light."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300">
                    Shop Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      {selectedProduct && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-2xl w-full relative shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-4 text-gray-700 text-2xl hover:text-red-600"
            >
              ×
            </button>

            <h3 className="text-xl font-semibold mb-4 text-center text-green-700">
              {selectedProduct.name}
            </h3>

            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {selectedProduct.gallery?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${selectedProduct.name}-${index}`}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Collections;

