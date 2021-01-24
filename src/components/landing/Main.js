import React from 'react';
import Naka from '../../assets/image/naka-white.svg';
import { Link } from 'react-router-dom';
import '../../scss/Main.scss'

const Main = () => {
    return (
      <React.Fragment>

        
        <header>

          <div className="header-top"> 
          <div className="header-top-content"> 
           
              <h1>Invest in crypto and obtain financial freedom</h1>
              <p>This landing page design example has a beautiful color scheme, appealing imagery, and dual CTAs. Nonprofits often struggle to get people to sign up for</p>

              <div className="btn">
                 <button id="sign-up" >Sign up</button> <button id="sign-in">Sign In</button>
              </div>
                
            </div>
          </div>
          <div className='header-content ' >
            <div className="image"> 
            <img src={Naka}  alt=''/>
            <h2>Invest right at home</h2>
            <p>Your bitcoin connect by the tip of the finger. While Bitcoin uses private key encryption to verify owners and register transactions, fraudsters and scammers may attempt to sell false bitcoins</p>
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
               <Link to={""}> <button type="button"> Get in touch</button></Link>
            </div>
          </section>

          <section className="container">
             <div className="wave">
             </div>
          </section>
          
        </header>

        <main>
          <section className="services">
            <h2>Why we should work together?</h2>
            <hr/>
            <div className="service-content">
            <div className="service-container">
              <div className="services-card service-one"></div>
              <div className="service-description">
                <h3>SEO Friendly Apps.</h3>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci
                  bibendum pellentesque ut nec dolor. Quisque metus ipsum,
                  pulvinar quis ipsum quis, consequat cursus leo. Suspendisse
                  fermentum, nisl et ultricies blandit, mauris metus accumsan
                  mauris, sit amet vulputate elit nunc id libero. Vivamus porta
                  lacus libero, et ullamcorper est volutpat ac. Maecenas eros
                  urna, interdum in lectus nec, tristique semper mauris. Duis
                  finibus nunc sed nulla bibendum, ut ornare tellus finibus.
                  Donec id magna risus.
                </div>
              </div>
            </div>

            <div className="service-container">
              <div className="services-card service-two"></div>
              <div className="service-description">
                <h3>Clear &amp; Optimized Code.</h3>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci
                  bibendum pellentesque ut nec dolor. Quisque metus ipsum,
                  pulvinar quis ipsum quis, consequat cursus leo. Suspendisse
                  fermentum, nisl et ultricies blandit, mauris metus accumsan
                  mauris, sit amet vulputate elit nunc id libero. Vivamus porta
                  lacus libero, et ullamcorper est volutpat ac. Maecenas eros
                  urna, interdum in lectus nec, tristique semper mauris. Duis
                  finibus nunc sed nulla bibendum, ut ornare tellus finibus.
                  Donec id magna risus.
                </div>
              </div>
            </div>

            <div className="service-container">
              <div className="services-card service-three"></div>
              <div className="service-description">
                <h3>Support 24 hours.</h3>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci
                  bibendum pellentesque ut nec dolor. Quisque metus ipsum,
                  pulvinar quis ipsum quis, consequat cursus leo. Suspendisse
                  fermentum, nisl et ultricies blandit, mauris metus accumsan
                  mauris, sit amet vulputate elit nunc id libero. Vivamus porta
                  lacus libero, et ullamcorper est volutpat ac. Maecenas eros
                  urna, interdum in lectus nec, tristique semper mauris. Duis
                  finibus nunc sed nulla bibendum, ut ornare tellus finibus.
                  Donec id magna risus.
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* <section>
            <h2>Join our newsletter to get the latest trends.</h2>

            <form className="newsletter" onSubmit={join}>
              <input
                type="email"
                placeholder="Your email goes here"
                onChange={(e) => setJoined(e.target.value)}
              />
              <input type="submit" value="Join Now!" />
            </form>
          </section> */}
        </main>
      </React.Fragment>
    );
}

export default Main;