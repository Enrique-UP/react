import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "./logo.png";

export default () => (
  <>
    <style>
      {`
        .sliderArea{
          max-width:600px;
          margin:auto;
        }

        .sliderArea img{
          width:100%;
          object-fit:cover;
        }

        .legend{
          background:rgba(0,0,0,0.6);
          color:#fff;
          font-size:18px;
          padding:10px;
        }
      `}
    </style>
    <div className="sliderArea">
      <Carousel autoPlay infiniteLoop interval="5000" transitionTime="1000" showArrows={true}>
        <div>
          <img alt="" src={Image} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
        <img alt="" src={Image} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
        <img alt="" src={Image} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
        <img alt="" src={Image} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
        <img alt="" src={Image} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
        <img alt="" src={Image} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
        <img alt="" src={Image} />
          <p className="legend">Legend 6</p>
        </div>
        <div>
        <img alt="" src={Image} />
          <p className="legend">Legend 7</p>
        </div>
        <div>
        <img alt="" src={Image} />
          <p className="legend">Legend 8</p>
        </div>
      </Carousel>
    </div>
  </>
);
