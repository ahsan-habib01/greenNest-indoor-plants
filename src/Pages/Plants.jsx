import React, { useState } from 'react';
import Loading from '../Components/Loading';
import usePlants from '../Hooks/usePlants';
import PlantsCard from '../Components/PlantsCard';

const Plants = () => {
  const { plants, loading } = usePlants();

  const [sortType, setSortType] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterCare, setFilterCare] = useState('');

  const categories = [...new Set(plants.map(p => p.category))];
  const careLevels = [...new Set(plants.map(p => p.careLevel))];

  const filteredSortedPlants = [...plants]
    .filter(p => (filterCategory ? p.category === filterCategory : true))
    .filter(p => (filterCare ? p.careLevel === filterCare : true))
    .sort((a, b) => {
      if (sortType === 'price-asc') return a.price - b.price;
      if (sortType === 'price-desc') return b.price - a.price;
      if (sortType === 'rating-asc') return a.rating - b.rating;
      if (sortType === 'rating-desc') return b.rating - a.rating;
      return 0;
    });

  return (
    <section className="bg-green-50 min-h-screen py-10">
      <title>GreenNest - All Plants</title>
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 tracking-wide">
            Explore All Indoor Plants
          </h1>
          <p className="text-gray-600 mt-2">
            Nature, delivered to your home — browse, sort, and filter with ease.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/5 bg-white p-5 rounded-xl shadow-md sticky top-20 h-max">
            <h2 className="text-green-800 font-semibold mb-4">Filter & Sort</h2>

            {/* Category Filter */}
            <div className="mb-4">
              <label className="block text-green-700 font-medium mb-2">
                Category
              </label>
              <select
                onChange={e => setFilterCategory(e.target.value)}
                className="w-full border p-2 rounded-lg"
              >
                <option value="">All Categories</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Care Level Filter */}
            <div className="mb-4">
              <label className="block text-green-700 font-medium mb-2">
                Care Level
              </label>
              <select
                onChange={e => setFilterCare(e.target.value)}
                className="w-full border p-2 rounded-lg"
              >
                <option value="">All Levels</option>
                {careLevels.map((lvl, idx) => (
                  <option key={idx} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-green-700 font-medium mb-2">
                Sort By
              </label>
              <select
                onChange={e => setSortType(e.target.value)}
                className="w-full border p-2 rounded-lg"
              >
                <option value="">Default</option>
                <option value="price-asc">Price (Low → High)</option>
                <option value="price-desc">Price (High → Low)</option>
                <option value="rating-asc">Rating (Low → High)</option>
                <option value="rating-desc">Rating (High → Low)</option>
              </select>
            </div>
          </aside>

          {/* Plants Grid */}
          <main className="flex-1">
            {loading ? (
              <Loading />
            ) : filteredSortedPlants.length === 0 ? (
              <h2 className="text-center text-xl text-gray-600 py-20">
                No plants matched your filters.
              </h2>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
                {filteredSortedPlants.map(plant => (
                  <PlantsCard key={plant.plantId} plant={plant} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default Plants;
