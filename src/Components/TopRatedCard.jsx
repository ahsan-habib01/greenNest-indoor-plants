import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';
import { FaStar } from 'react-icons/fa';

const TopRatedCard = ({ plant }) => {
  const { plantId, plantName, image, price, rating } = plant;

  return (
    <div className="bg-green-50 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={plantName} className="w-full h-96 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-green-900">{plantName}</h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating) ? 'text-yellow-500' : 'text-gray-300'
              }
            />
          ))}
          <span className="ml-1 font-medium">{rating}</span>
        </div>

        <p className="text-green-800 font-medium mb-3">${price}</p>
        <Link
          to={`/plant/${plantId}`}
          className="btn w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TopRatedCard;
