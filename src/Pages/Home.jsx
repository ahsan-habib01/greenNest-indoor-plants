import React from 'react';
import Hero from '../Components/Hero';
import TopRated from '../Components/TopRated';
import PlantCareTips from '../Components/StaticComponents/PlantCareTips';
import OurExperts from '../Components/StaticComponents/OurExperts';
import EcoDecorIdeas from '../Components/StaticComponents/EcoDecorIdeas';

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <TopRated></TopRated>
      <PlantCareTips></PlantCareTips>
      <OurExperts></OurExperts>
      <EcoDecorIdeas></EcoDecorIdeas>
    </div>
  );
};

export default Home;
