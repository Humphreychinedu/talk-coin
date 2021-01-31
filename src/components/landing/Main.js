import React from 'react';
import Naka from '../../assets/image/naka-white.svg';
import Peep from '../../assets/image/peep-bitcoin.png';
import ServicMG from '../../assets/image/portfolio.svg';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/Paths";
import '../../scss/Main.scss'

const Main = () => {
    return (
      <React.Fragment>
        <header>
          <div className="header-top">
            <div className="header-top-content">
              <h1>Invest in crypto and obtain financial freedom</h1>
              <p>
                This landing page design example has a beautiful color scheme,
                appealing imagery, and dual CTAs. Nonprofits often struggle to
                get people to sign up for
              </p>

              <div className="btn">
                <Link to={ROUTES.SIGN_UP}>
                  <button id="sign-up" type="button">
                    Sign up
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_IN}>
                  <button id="sign-in" type="button">Sign In</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-content ">
            <div className="image">
              <img src={Naka} alt="" />
              <h2>Invest right at home</h2>
              <p>
                Your bitcoin connect by the tip of the finger. While Bitcoin
                uses private key encryption to verify owners and register
                transactions, fraudsters and scammers may attempt to sell false
                bitcoins
              </p>
            </div>
            <div className="content">
              <h1>
                We build &amp; design <br /> web applications.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                luctus congue dignissim. Vestibulum et ex nisl. Vestibulum eu
                luctus nisi. Fusce sit amet vehicula nisl.{" "}
              </p>
            </div>
          </div>

          <section>
            <div className="btn-container">
              <Link to={""}>
                {" "}
                <button type="button"> Get in touch</button>
              </Link>
            </div>
          </section>

          <section className="wave-container">
            <div className="wave"></div>
          </section>
        </header>

        <main>
          <section className="services">
            <h2>Why we should work together?</h2>
            <hr />
            <div className="service-content">
              <div className="service-container">
                <div className="services-card service-one"></div>
                <div className="service-description">
                  <img src={ServicMG} alt="" />
                  <h3>SEO Friendly Apps.</h3>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse tincidunt massa sem. Vestibulum quis augue ac
                    orci bibendum pellentesque ut nec dolor. Quisque metus
                    ipsum, pulvinar quis ipsum quis, consequat cursus leo.
                  </div>
                  <Link to={""}>
                    <button type="button">Learn More</button>
                  </Link>
                </div>
              </div>

              <div className="service-container">
                <div className="services-card service-two"></div>
                <div className="service-description">
                  <img src={ServicMG} alt="" />
                  <h3>Clear &amp; Optimized Code.</h3>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse tincidunt massa sem. Vestibulum quis augue ac
                    orci bibendum pellentesque ut nec dolor. Quisque metus
                    ipsum, pulvinar quis ipsum quis, consequat cursus leo.
                  </div>
                  <Link to={""}>
                    <button type="button">Learn More</button>
                  </Link>
                </div>
              </div>

              <div className="service-container">
                <div className="services-card service-three"></div>
                <div className="service-description">
                  <img src={ServicMG} alt="" />
                  <h3>Support 24 hours.</h3>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse tincidunt massa sem. Vestibulum quis augue ac
                    orci bibendum pellentesque ut nec dolor. Quisque metus
                    ipsum, pulvinar quis ipsum quis, consequat cursus leo.
                  </div>
                  <Link to={""}>
                    <button type="button">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
            <section class="curved"></section>

            <section className="info">
              <div className="info-content ">
                <div className="content">
                  <h1>
                    We build &amp; design <br /> web applications.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin luctus congue dignissim. Vestibulum et ex nisl.
                    Vestibulum eu luctus nisi. Fusce sit amet vehicula nisl.{" "}
                  </p>
                </div>
                <div className="image">
                  <img src={Peep} alt="" />
                  <h2>Invest right at home</h2>
                  <p>
                    Your bitcoin connect by the tip of the finger. While Bitcoin
                    uses private key encryption to verify owners and register
                    transactions, fraudsters and scammers may attempt to sell
                    false bitcoins
                  </p>
                </div>
              </div>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
}

export default Main;