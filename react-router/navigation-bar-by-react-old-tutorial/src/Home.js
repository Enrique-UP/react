import React from 'react';
import Banner from './Banner';
import imgsrc from "../src/images/banner1.jpg";
const Home =() => {
  return ( <>
    <Banner name="Welcome to Home Page" imgsrc={imgsrc} visit="/about" btname="About Us" />
  </>)
}
export default Home;
