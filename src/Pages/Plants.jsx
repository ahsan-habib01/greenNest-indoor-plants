import React from 'react';
import Loading from '../Components/Loading';
import usePlants from '../Hooks/usePlants';
import PlantsCard from '../Components/PlantsCard';

const Plants = () => {
  const { plants, loading } = usePlants();

  return (
    <div className="bg-green-50 ">
      <div className="w-11/12 mx-auto py-5">
        <div className="text-center">
          <h1 className="text-4xl text-green-950 font-semibold">
            Our All Indoor Plants
          </h1>
          <p className="text-gray-500 my-2 px-2">
            GreenNest — Bringing Nature Home, One Plant at a Time.
          </p>
        </div>

        <div>
          {loading ? (
            <Loading></Loading>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
              {plants.map(plant => (
                <PlantsCard key={plant.id} plant={plant}></PlantsCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plants;
<h1>Plants page</h1>;
