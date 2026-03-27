import React from 'react';
import { NavLink } from 'react-router-dom';
const Card =(prosp) => {
  return ( <>
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="cart">
            <img src={prosp.imgsrc} alt={prosp.imgsrc} />
            <p className="head">{prosp.title}</p>
            <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/contact" className="btn btn-primary">Lorem</NavLink>
        </div>
    </div>
  </>)
}
export default Card;
