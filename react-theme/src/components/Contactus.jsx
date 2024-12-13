import Banner from "../components/include/Banner";
import Audio from "../components/include/Audio";
import VideoIcon from "../components/include/VideoIcon";
import Vsee from "../images/vsee.png";
const Contactus = () => {
    return (
      <>
        <Banner pageName="Contact Us" />
        <section className="sectionTB contactUs">
          <div className="container">
              <div className="row">
                  <div className="col-xl-6 col-xxl-6">
                      <div className="mainHead">
                          <p className="subHead" data-aos="fade-right">Lorem</p>
                          <h1 className="head" data-aos="fade-left">Lorem ipsum dolor</h1>
                          <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                      </div>{/* mainHead */}
                  </div>{/* cols */}
                  <div className="col-12">
                    <div className="row conLink">
                      <div className="col-md-4">
                          <a href="#" target="_blank">
                            <i className="icon">&#xe804;</i>
                            <span>Phone Number</span>
                          </a>
                      </div>{/* cols */}
                      <div className="col-md-4">
                          <a href="#" target="_blank">
                            <i className="icon">&#xf232;</i>
                            <span>Whatsapp Number</span>
                          </a>
                      </div>{/* cols */}
                      <div className="col-md-4">
                          <a href="#" target="_blank">
                            <img src={Vsee}></img>
                            <span>Video Call</span>
                          </a>
                      </div>{/* cols */}
                    </div>{/* row */}
                  </div>{/* cols */}
                </div>{/* row */}
          </div>{/* container */}
        </section>
        <Audio />
        <VideoIcon />
      </>
    );
  }
  
  export default Contactus;
  