import React from 'react';
import Hero from '../Components/Hero';
import TopRated from '../Components/TopRated';
import PlantCareTips from '../Components/StaticComponents/PlantCareTips';
import OurExperts from '../Components/StaticComponents/OurExperts';
import EcoDecorIdeas from '../Components/StaticComponents/EcoDecorIdeas';
import PlantOfTheWeek from '../Components/PlantOfTheWeek';

const Home = () => {
  return (
    <div className="">
      <title>GreenNest – Indoor Plant Care & Store</title>
      <Hero></Hero>
      <TopRated></TopRated>
      <PlantOfTheWeek></PlantOfTheWeek>
      <PlantCareTips></PlantCareTips>
      <OurExperts></OurExperts>
      <EcoDecorIdeas></EcoDecorIdeas>
    </div>
  );
};

export default Home;
