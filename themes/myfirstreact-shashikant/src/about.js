import React from 'react';
import { Helmet } from 'react-helmet'
import './index.css';
class Contact extends React.Component {
    render() {
       return (
          <div>
              <Helmet>
        <title>React Demo | About us</title>
      </Helmet>
             <h1>About Us</h1>
            <div className='about-us'>
             
             <p>
             SNVA Ventures. , which was started with the purpose and mission of online education has now turned out to be one of the best IT companies. Our company started expanding rapidly shortly after its establishment and has now diversified across sectors such as Travel and Hospitality, Education, Healthcare, Fashion, Technology, Government, and Retail.SNVA Ventures. is a leading IT solution provider for Software Development, Website Design, and many other fields. It is devoted to providing web-based solutions to small as well as medium sized businesses across the globe. We experiment with the latest technologies, development methodologies, and design approaches to build cutting-edge software products.In its dealings with different industries, SNVA Ventures. aims to deliver measurable improvements in business productivity and performance. 
             <p>
             The eye-catching designs and personalized look and feel produced by us give us a magnetic quality with regard to attracting new clients towards us. We help our valuable clients in achieving their final targets by offering them user-friendly IT services and increasing their customer base and profit margins. It is made possible by our superlative and striking web portals, websites, web-based E-learning platforms etc. We are proud of our friendly and flexible approach which ensures long-term, mutually beneficial, and rewarding relationships with our clients. We empower our clients by providing them direct control over their projects and by standing by them with full support in every situation.Our main focus is to achieve high levels of customer satisfaction by delivering cost-effective, high-quality, and timely solutions. We will make every last effort to attain it while at the same time maintaining financial, technical, and moral excellence.
             </p>
             </p>
            </div>
            <footer>
            <p>Copyright © 2021 SNVA. All Rights Reserved.</p>
     </footer>
          </div>
       )
    }
 }
 export default Contact;