import React from 'react';
import Banner from './Banner';
import imgsrc from "../src/images/banner2.jpg";
const About =() => {
  return ( <>
    <Banner name="Welcome to About Page" imgsrc={imgsrc} visit="/" btname="Home" />
  </>)
}
export default About;
