import React from 'react';
import { Helmet } from 'react-helmet'
import './index.css';
class Home extends React.Component {
  
   render() {
      const name='Shashi';
      return (
         <div className="main">
         <Helmet>
        <title>React Demo | Home</title>
      </Helmet>
         <h1>Hello {name} </h1>
         <div className='images'>
         <img src="./images/img1.jpg" alt='img'></img>
         <img src="./images/img4.jpg" alt='img'></img>
         </div>
         <footer>
          <p>Copyright © 2021 SNVA. All Rights Reserved.</p>
     </footer>
         </div>
      )
   }
}
export default Home;