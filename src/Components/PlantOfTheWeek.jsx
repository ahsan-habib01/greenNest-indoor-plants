import React from 'react';
import { Leaf } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const PlantOfTheWeek = () => {
  const plant = {
    plantId: 4,
    plantName: 'Peace Lily',
    category: 'Air Purifier',
    price: 28,
    rating: 4.6,
    availableStock: 12,
    careLevel: 'Easy',
    description:
      'Elegant plant with white blooms that removes toxins from the air and thrives in shade.',
    image:
      'https://images.unsplash.com/photo-1646297670075-f2097a5281e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlYWNlJTIwbGlseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
    providerName: 'Bloom & Beyond',
  };

  return (
    <div className="bg-green-50 py-20">
      <section className="w-11/12 mx-auto rounded-3xl bg-gradient-to-r from-green-100 via-green-200 to-green-300 shadow-lg flex flex-col md:flex-row items-center gap-8 p-8 transition-transform duration-500 hover:scale-[1.01] relative">
        <div className="flex-1">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-72 object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className=" flex-1  text-green-900">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="text-green-700" size={24} />
            <h2 className="text-4xl font-extrabold">Plant of the Week</h2>
          </div>

          <h3 className="text-3xl font-semibold text-green-800 mb-3">
            {plant.plantName}
          </h3>

          <p className="text-green-700 leading-relaxed mb-4">
            {plant.description}
          </p>

          <div className="flex items-center gap-6 text-sm mb-6">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" size={18} />
              <span>{plant.rating} / 5</span>
            </div>
            <p>
              <span className="font-semibold">Care Level:</span> {plant.care}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${plant.price}
            </p>
          </div>

          <div className=" flex-1 flex justify-center items-center">
            {/* Animated Ring Badge */}
            <div className="absolute top-2 right-10 z-10">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-green-600 animate-ping opacity-40"></div>
                <div className="absolute inset-0 rounded-full border-4 border-green-600 animate-spin-slow"></div>
                <div className="absolute inset-1 rounded-full bg-green-600 flex items-center text-center justify-center text-white text-xs font-bold">
                  🌿 WEEKLY PICK
                </div>
              </div>
            </div>
          </div>

          <Link
            to={`/plant/${plant.plantId}`}
            className="bg-[#E3B23C] hover:bg-[#B97C16] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PlantOfTheWeek;
