import React from 'react';
import Hero from '../Components/Hero';
import TopRated from '../Components/TopRated';
import PlantCareTips from '../Components/StaticComponents/PlantCareTips';
import OurExperts from '../Components/StaticComponents/OurExperts';

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <TopRated></TopRated>
      <PlantCareTips></PlantCareTips>
      <OurExperts></OurExperts>
    </div>
  );
};

export default Home;
