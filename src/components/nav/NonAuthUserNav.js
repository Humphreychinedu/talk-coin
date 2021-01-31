import React from 'react';
import { Link } from 'react-router-dom';
import  * as ROUTES  from '../../constants/Paths'
import '../../scss/Navigation.scss';
import { FaHome } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { RiLoginCircleFill } from "react-icons/ri";
import "../../scss/Header.scss";
const NonAuthUserNav = () => {
    return (
      <div className="app-header">
        <div className="app-name">
          <ul>
            {/* <li><Link to={ROUTES.LANDING}> Landing </Link> </li> */}
            <li>
              <span>
                <FaHome />
              </span>
              <Link to={ROUTES.LANDING}> Home </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="app-nav">
          <ul>
            {/* <li><Link to={ROUTES.LANDING}> Landing </Link> </li> */}
            {/* <li>
              <span>
                <FaHome />
              </span>
              <Link to={ROUTES.LANDING}> Home </Link>{" "}
            </li> */}
            <li>
              <span>
                <GoSignIn />
              </span>
              <Link to={ROUTES.SIGN_IN}> Sign In </Link>{" "}
            </li>
            <li>
              <span>
                <RiLoginCircleFill />
              </span>
              <Link to={ROUTES.SIGN_UP}> Sign Up </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
}

export default NonAuthUserNav;