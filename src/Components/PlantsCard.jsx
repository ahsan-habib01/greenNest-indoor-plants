import React from 'react';
import { Star } from 'lucide-react';

const PlantsCard = ({ plant }) => {
  const { plantName, image, price, rating } = plant;

  // Render stars (all fully yellow)
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.round(rating); // round to nearest star

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="text-yellow-400 inline-block" size={18} />
      );
    }

    return stars;
  };

  return (
    <div className="bg-green-50 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={plantName} className="w-full h-120 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-green-900">{plantName}</h2>
        <div className="flex items-center mt-1 mb-2">
          {renderStars()}
          <span className="text-green-700 font-semibold ml-2">
            {rating.toFixed(1)}
          </span>
        </div>
        <p className="text-green-800 font-medium mb-3">${price}</p>
        <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PlantsCard;
