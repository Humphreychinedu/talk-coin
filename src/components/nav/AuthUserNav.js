import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as ROUTES from "../../constants/Paths";
import "../../scss/Sidebar.scss";
import { SidebarData } from "../../constants/SidebarData";
import SignOut from "../usermanagement/SignOut";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const AuthUserNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="side-nav">
      <div className="navbar">
        <span>
          <FaBars onClick={showSidebar} />
          <SignOut />
        </span>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#">
              <AiOutlineClose className="menu-bars" onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          {/* <li className="nav-text">
            <Link to={ROUTES.DASHBOARD}> Dashboard </Link>{" "}
          </li>
          <li className="nav-text">
            <Link to={ROUTES.ACCOUNT}> Account </Link>{" "}
          </li>
          <li className="nav-text">
            <Link to={ROUTES.ADMIN}> Admin </Link>{" "}
          </li> */}
          {/* <li className="nav-text">
            <SignOut />
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default AuthUserNav;
