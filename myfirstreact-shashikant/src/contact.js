import React from 'react';
import { Helmet } from 'react-helmet'
import './index.css';
class Contact extends React.Component {
    render() {
       return (
         <React.Fragment>
             <Helmet>
        <title>React Demo | Contact us</title>
      </Helmet>
             <h1>Contact us on below address given</h1>
           
         <div className="row">
  <div className="column" >
    <h2>Address</h2>
    <p>B-44,Noida Sector-59</p>
    <p>Uttar Pradesh, 201301, India</p>
  </div>
  <div className="column" >
    <h2>Phone</h2>
    <p>9999999999</p>
  </div>
   <div className="column"  >
    <h2>Email</h2>
    <p>info@snva.com</p>
  </div>
</div>
      <footer>
      <p>Copyright © 2021 SNVA. All Rights Reserved.</p>
     </footer>    
            </React.Fragment>
       )
    }
 }
 export default Contact;