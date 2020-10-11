import React from "react";
import logo from "../assests/images/nlfc/NLFCGRSFB.png";
const Navigation = () => {
  return (
    <div>
      <header className="pt-2 pb-2">
        <div className="container">
          <div className="row p-0 m-0">
            <div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
              <div id="logo">
                <a href="/">
                  <img
                    className="img-fluid logochange"
                    src={logo}
                    alt="logo"
                    title="logo"
                    style={{ width: "80%" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-9 col-sm-9 col-lg-9 col-xs-12">
              <div id="menu">
                <nav className="navbar navbar-expand-sm">
                  <span className="menutext visible-xs">Menu</span>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarmain"
                    aria-controls="navbarmain"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse padd0"
                    id="navbarmain"
                  >
                    <ul className="nav navbar-nav float-right">
                      <li>
                        <a href="#about">About us</a>
                      </li>
                      <li>
                        <a href="#what">What?</a>
                      </li>
                      <li>
                        <a href="#product">Product</a>
                      </li>
                      <li>
                        <a href="#why">Why?</a>
                      </li>
                      <li>
                        <a href="#team">Team</a>
                      </li>
                      <li>
                        <a href="#gallery">Gallery</a>
                      </li>
                      <li>
                        <a href="#contactus">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navigation;
