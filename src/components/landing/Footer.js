import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneSquareAlt, FaAddressCard } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import "../../scss/Footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <main>
        {/* <section className="main-footer">
          <div className="footer-content">
            <div className="footer-container">
                
            </div>
            <div className="footer-container"></div>
            <div className="footer-container"></div>
          </div>
          <div className="social-icon"></div>
        </section> */}

        <section className="main-footer">
          <footer class="footer-distributed">
            <div class="footer-left">
              <h3>
                Talk<span>Coin</span>
              </h3>

              <p class="footer-links">
                <Link to="#">Home</Link>·<Link to="#">Blog</Link>
              </p>
            </div>

            <div class="footer-center">
              <div>
                <span className="footer-icons">
                  <FaAddressCard />
                </span>
                <p>
                  <span>21 Revolution Street</span> Imo, NIgeria
                </p>
              </div>

              <div>
                <span className="footer-icons">
                  <FaPhoneSquareAlt />
                </span>
                <p>08099445345</p>
              </div>

              <div>
                <span className="footer-icons">
                  <FiMail />
                </span>
                <p>
                  <a href="mailto:support@company.com">contact@talk-coin.com</a>
                </p>
              </div>
            </div>

            <div class="footer-right">
              <p class="footer-company-about">
                <span>About the company</span>
                talk-coin is a bitcoin for web site, designed for investment,
                and safety &amp; SEO Learner.
              </p>

              <div class="footer-icons">
                <Link to={""}>
                  <p>
                    <FaFacebookSquare />
                  </p>
                </Link>
                <Link to={""}>
                  <p>
                    <FaTwitterSquare />
                  </p>
                </Link>
                <Link to={""}>
                  <p>
                    <FaWhatsappSquare />
                  </p>
                </Link>
                <Link to={""}>
                  <p>
                    <FaInstagramSquare />
                  </p>
                </Link>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Footer;
