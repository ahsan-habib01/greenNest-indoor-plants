import React from 'react';
import { plantTips } from '../StaticComponents/plantTips';

const PlantCareTips = () => {
  return (
    <section className="bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-8">
          Plant Care Tips
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {plantTips.map(tip => (
            <div
              key={tip.id}
              className="bg-green-200 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-green-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCareTips;
