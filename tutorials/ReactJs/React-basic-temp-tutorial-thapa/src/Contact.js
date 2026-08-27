import React from 'react';
import Banner from './Banner';
import imgsrc from "../src/images/banner4.jpg";
const Contact =() => {
  return ( <>
    <Banner name="Welcome to Contact Page" imgsrc={imgsrc} visit="/service" btname="Service" />
  </>)
}
export default Contact;
