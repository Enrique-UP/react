import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import Audio from "../components/include/Audio";
import VideoIcon from "../components/include/VideoIcon";
import Testimonials from "../components/include/Testimonials";
import WhyUs from "../components/include/WhyUs";

import aboutUs from "../images/aboutUs.webp";
import video from "../images/video.webp";
import benefits from "../images/benefits.png";

const Home = () => {
  return (
    <>
        <Carousel className="banner">
            <Carousel.Item>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-8 col-7">
                            <p className="head">Lorem ipsum dolor sit amet</p>
                            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, reprehenderit odio dicta dolore, itaque cupiditate sit ratione dolores quos similique perspiciatis repellat, commodi illum tenetur quasi id. Vero distinctio temporibus libero, exercitationem nisi explicabo.</p>
                            <div className="btn">
                                <Link to="/contact-us"><span>For more information <i className="icon">&#xf178;</i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-8 col-7">
                            <p className="head">Lorem ipsum dolor sit amet</p>
                            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, reprehenderit odio dicta dolore, itaque cupiditate sit ratione dolores quos similique perspiciatis repellat, commodi illum tenetur quasi id. Vero distinctio temporibus libero, exercitationem nisi explicabo.</p>
                            <div className="btn">
                                <Link to="/contact-us"><span>For more information <i className="icon">&#xf178;</i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-8 col-7">
                            <p className="head">Lorem ipsum dolor sit amet</p>
                            <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, reprehenderit odio dicta dolore, itaque cupiditate sit ratione dolores quos similique perspiciatis repellat, commodi illum tenetur quasi id. Vero distinctio temporibus libero, exercitationem nisi explicabo.</p>
                            <div className="btn">
                                <Link to="/contact-us"><span>For more information <i className="icon">&#xf178;</i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        <WhyUs />
        <section className="sectionTB aboutUs">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-6">
                        <div className="mainHead">
                            <p className="subHead" data-aos="fade-right">Lorem</p>
                            <h1 className="head" data-aos="fade-left">Lorem ipsum dolor</h1>
                            <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                        </div>{/* mainHead */}
                    </div>{/* cols */}
                    <div className="col-xs-12 col-sm-12 col-6">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi. Repudiandae nesciunt excepturi voluptatem necessitatibus voluptatibus pariatur iste odio.</p>
                    </div>{/* cols */}
                    <div className="col-12">
                        <div className="details">
                            <img src={aboutUs} alt="" className="bannerImg" data-aos="zoom-in"></img>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, numquam minus? Beatae quas veniam dolor porro facere voluptas dignissimos cupiditate assumenda corrupti nisi? Debitis nobis, fugiat possimus incidunt quia nulla alias at nemo unde ex repudiandae eum. Sequi repellat veritatis reiciendis, at amet neque et dolores cum, pariatur ad maiores! Odit ad pariatur fugit totam numquam dolore voluptatum voluptas, explicabo facilis, reiciendis odio quisquam. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae. Quas exercitationem, distinctio et dicta animi. Deleniti ad porro assumenda facilis quaerat neque ipsum cum reprehenderit, unde sed laboriosam aliquid, qui ut minus distinctio molestias, incidunt recusandae quas animi.</p>
                        </div>{/* details */}
                        <div className="btn center">
                            <a href="#" data-aos="zoom-in"><span>View more <i className="icon">&#xf178;</i></span></a>
                        </div>{/* btn */}
                    </div>{/* cols */}
                </div>{/* row */}
            </div>{/* container */}
        </section>
        <Audio />
        <VideoIcon />
        <section className="sectionTB vdo">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mainHead">
                            <p className="subHead" data-aos="fade-left">Lorem</p>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <h1 className="head" data-aos="fade-right">Lorem ipsum dolor</h1>
                                </div>{/* col */}
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                                </div>{/* col */}
                            </div>{/* row */}
                        </div>{/* mainHead */}
                    </div>{/* col */}
                </div>{/* row */}
            </div>{/* container */}
            <div className="container">
                <div className="row mb">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 col-4">
                        <a href="#" className="vdoArea" data-aos="fade-up">
                            <img src={video}></img>
                            <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                        </a>
                    </div>{/* col */}
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 col-8 mb">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-4">
                                <a href="#" className="vdoArea" data-aos="fade-up">
                                    <img src={video}></img>
                                    <p><i className="icon">&#xf1c8;</i> <span>Lorem</span></p>
                                </a>
                            </div>{/* col */}
                        </div>{/* row */}
                    </div>{/* col */}
                </div>{/* row */}
            </div>{/* container */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="btn center">
                            <a href="#" data-aos="zoom-in"><span>View more <i className="icon">&#xf178;</i></span></a>
                        </div>{/* btn */}
                    </div>{/* cols */}
                </div>{/* row */}
            </div>{/* container */}
        </section>
        <section className="sectionTB benefits">
            <div className="container">
                <div className="mainHead">
                    <p className="subHead" data-aos="fade-left">Lorem</p>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-6">
                            <h1 className="head" data-aos="fade-right">Lorem ipsum dolor {/* YOGA BENEFITS */}</h1>
                        </div>{/* col */}
                        <div className="col-xs-12 col-sm-12 col-6">
                            <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque. {/* Here's a list of why you should join this yoga course. */}</p>
                        </div>{/* col */}
                    </div>{/* row */}
                </div>{/* mainHead */}
            </div>{/* container */}
            <div className="container">
                <ul className="benefitsArea">
                    <li data-aos="fade-left">
                        <ul>
                            <li>Learn essential yoga</li>
                            <li>Spend 15 minutes a day</li>
                            <li>Develops and equlibra your chakras</li>
                            <li>Learn seven energy levels</li>
                            <li>Refreshens your body and soul</li>
                            <li>Learn meditation technique</li>
                        </ul>
                    </li>
                    <li data-aos="fade-up"><img src={benefits} alt=""></img></li>
                    <li data-aos="fade-right">
                        <ul>
                            <li>Heal your emotions, be happy</li>
                            <li>Transform your thinking habits</li>
                            <li>Strengthen your health and body</li>
                            <li>Learn about ayurvedic medicines</li>
                            <li>Studied and applied in everyday life</li>
                            <li>and much more...</li>
                        </ul>
                    </li>
                </ul>
            </div>{/* container */}
        </section>
        <Testimonials />
    </>
  );
}

export default Home;
