import React from 'react';
import logo from "../src/images/logo.png";
import { NavLink } from 'react-router-dom';
const Navbar =() => {
    return ( <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <NavLink exact to="/" className="logo_area" activeClassName="active"><img src={logo} alt={logo} /></NavLink>
            </div>
            <i className="fa fa-bars"></i>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <ul className="nav">
                <li><NavLink exact to="/" className="link" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" className="link" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/service" className="link" activeClassName="active">Service</NavLink></li>
                <li><NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>)
  }
  export default Navbar;
  