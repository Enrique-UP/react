import React from 'react';
import { NavLink } from 'react-router-dom';
import imgsrc from "../src/images/banner1.jpg";
const Banner =(props) => {
  return ( <>
    <section className="banner">
      <img className="img" src={imgsrc} alt="Banner" />
      <div className="text">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="head">{props.name} <span>Enrique Brave</span></h1>
              <p>We are the team of talented developer making websites.</p>
              <NavLink exact to={props.visit} className="btn-1">{props.btname}</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}
export default Banner;
