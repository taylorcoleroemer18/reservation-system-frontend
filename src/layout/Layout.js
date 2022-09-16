import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";

import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="row-lg-2 side-bar">
          <Menu />
          <img
            src="https://cdnimg.webstaurantstore.com/images/articles/7/lighting-header.jpg"
            className="img-fluid"
            alt="Dashboard banner"
          ></img>
        </div>
        <div className="col">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;
