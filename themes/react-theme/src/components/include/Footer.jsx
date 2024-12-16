import {NavLink, Link} from "react-router-dom";
import logo from "../../images/logo-footer.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-6">
                    <Link to="/" className="logo" data-aos="zoom-in">
                        <img src={logo} />
                    </Link>
                    <ul>
                        <li data-aos="fade-up"><NavLink exact="true" to="/">Home</NavLink></li>
                        <li data-aos="fade-up"><NavLink to="/about-us">About Us</NavLink></li>
                        <li data-aos="fade-up"><NavLink to="/services">Services</NavLink></li>
                        <li data-aos="fade-up"><NavLink to="/contact-us">Contact Us</NavLink></li>
                    </ul>
                    <p className="contacts">
                        <a href="mailto:info@demo.com" target="_blank" data-aos="fade-up">
                            <i className="icon">&#xf0e0;</i> info@demo.com
                        </a>
                        <a href="tel:+91-000-000-0000" target="_blank" data-aos="fade-up">
                            <i className="icon">&#xe804;</i> +91-000-000-0000
                        </a>
                        <a href="www.demo.com" target="_blank" data-aos="fade-up">
                            <i className="icon">&#xe808;</i> www.demo.com
                        </a>
                    </p>
                    <p className="contacts">
                        <a href="www.demo.com" target="_blank" data-aos="fade-up">
                            <i className="icon">&#xe808;</i> www.demo.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <img src={logo} className="footerIcon" />
        <i className="icon animate">&#xe802;</i>
      </footer>
      <section className="copyright">
          <div className="container">Copyright &copy; <span className="year"></span> - All rights reserved.</div>
      </section>
    </>
  );
}

export default Footer;
