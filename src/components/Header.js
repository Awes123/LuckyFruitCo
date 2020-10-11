import React from "react";

const Header = () => {
  return (
    <div>
      <div className="top">
        <div className="container">
          <div className="row p-0 m-0">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
              <ul className="list-inline float-left icon icons">
                <li>
                  <a href="contactus.html">Welcome to LUCKY FRUIT COMPANY</a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      fontFamily: "cursive",
                      color: "#3aa16c",
                      fontSize: 26,
                    }}
                  >
                    live a healthier life..
                  </a>
                </li>
              </ul>
              <ul className="list-inline float-right  icons">
                <li>
                  <ul className="list-inline social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="social_facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="social_twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://in.pinterest.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://plus.google.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="social_googleplus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="social_instagram"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
