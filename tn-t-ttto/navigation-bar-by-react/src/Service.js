import React from 'react';
import Banner from './Banner';
import imgsrc from "../src/images/banner3.jpg";
import Servicedata from './Servicedata';
import Card from "./Card";
const Service =() => {
  return ( <>
    <Banner name="Welcome to Service Page" imgsrc={imgsrc} visit="/contact" btname="Contact Us" />
    <section className="services">
      <div className="container">
        <h1>Services</h1>
        <div className="row">
            {
              Servicedata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
              })
            }
        </div>
      </div>
    </section>
  </>)
}
export default Service;
