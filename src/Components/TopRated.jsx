import React from 'react';
import usePlants from '../Hooks/usePlants';
import Loading from './Loading';
import TopRatedCard from './TopRatedCard';
import { Link } from 'react-router';

const TopRated = () => {
  const { plants, loading } = usePlants();

  const topPlants = plants.slice(0, 4);

  return (
    <div className="bg-green-50">
      <div className="w-11/12 mx-auto py-5">
        <div className="py-10 text-center">
          <h1 className="text-4xl text-green-950 font-semibold">
            Top Rated Indoor Plants
          </h1>
          <p className="text-gray-500 text-lg my-2">
            Bring Home the Best, Breathe the Freshest
          </p>
        </div>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {topPlants.map(plant => (
                  <TopRatedCard key={plant.plantId} plant={plant} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Link
                  to="/plants"
                  className="px-6 py-3 border-2 bg-[#E3B23C] hover:bg-[#B97C16]   text-white rounded-lg font-semibold   transition"
                >
                  See All Plants
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
