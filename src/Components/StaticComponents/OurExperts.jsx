import React from 'react';

const experts = [
  {
    id: 1,
    name: 'Ariana Bloom',
    specialization: 'Indoor Plant Care Specialist',
    image:
      'https://images.unsplash.com/photo-1728027057050-7f106d4e9224?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
  },
  {
    id: 2,
    name: 'Noah Green',
    specialization: 'Soil & Fertilizer Expert',
    image:
      'https://images.unsplash.com/photo-1587213484111-0deb7cab670a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172',
  },
  {
    id: 3,
    name: 'Sofia Leaf',
    specialization: 'Air-Purifying Plant Consultant',
    image:
      'https://plus.unsplash.com/premium_photo-1681483723935-6b1a1415b943?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    id: 4,
    name: 'Liam Moss',
    specialization: 'Succulent & Cactus Specialist',
    image:
      'https://images.unsplash.com/photo-1619296331140-13c8711fb308?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
];

const OurExperts = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-900">
          Meet Our Green Experts
        </h2>
        <p className="text-green-700 mt-2">
          Passionate about helping your plants thrive naturally.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {experts.map(expert => (
          <div
            key={expert.id}
            className="bg-white shadow-lg rounded-2xl p-5 hover:scale-105 transition-transform duration-300 text-center"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-200"
            />
            <h3 className="text-lg font-semibold text-green-900">
              {expert.name}
            </h3>
            <p className="text-green-700 text-sm mt-1">
              {expert.specialization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurExperts;
