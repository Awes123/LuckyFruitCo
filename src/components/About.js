import React from "react";

const About = () => {
  return (
    <div>
      <div className="abouttt" id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
              <div
                className="about text-center"
                style={{ backgroundColor: "#eee" }}
              >
                <h4>Welcome</h4>
                <p>
                  Vivamus sem sapien, volutpat in urna ut, laoreet sellicitudin
                  lectus. Aenean est odio, blandit non diam sed, pulvinar
                  efficitur enim. Maecenas massa ex, volutpat nec massa gravida,
                  posuere volputate ipsum. Quisque tristique finibus dolor
                  ultrices ultricies.
                </p>
                <a href="aboutus.html">
                  Read more<i className="arrow_carrot-2right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
