import React from 'react';
import './Home.css';

import Header from "../components/Home/Header"; 
import Slider from "../components/Home/Slider"; 
import Contents from "../components/Home/Contents";

const Home = () => {
  return (
    <div className='back'>
      <Header />
      <Slider  />
      <Contents />
    </div>
  );
};

export default Home;