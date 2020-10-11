import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import team1 from "../assests/images/nlfc/team1.png";
import team3 from "../assests/images/nlfc/team3.png";
import IrshadB from "../assests/images/IrshadNMBagbanNew.jpg";
import AkramB from "../assests/images/AkramARBagbanNew.jpg";
import JavedB from "../assests/images/javedarbagbanNew.jpg";
import AnwarB from "../assests/images/AnwarArBagbanNew.jpg";
import ZaffarB from "../assests/images/ZafarARBagabnNew.jpg";
import NabeelB from "../assests/images/NabeelZBagbanNew.jpg";
const Team = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div class="team back">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 commontop text-center">
              <h4>
                <i class="icon_star_alt"></i>
                <i class="icon_star_alt"></i>
                <i class="icon_star_alt"></i>
                our team members
                <i class="icon_star_alt"></i>
                <i class="icon_star_alt"></i>
                <i class="icon_star_alt"></i>
              </h4>
              <p>
                Pellentesque sed posuere nisi. Nunc nec looreet mauris. Etiam
                valutpat ligula eu lacus varius scelerisque. Morbi fringilla
                euismod semper.
              </p>
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3 col-xs-12">
              <div class="box">
                <img src={NabeelB} class="img-fluid rounded-circle" alt="img" />
                <h3>Nabeel Z Bagban</h3>
                <p>9595111536</p>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3 col-xs-12">
              <div class="box">
                <img src={ZaffarB} class="img-fluid rounded-circle" alt="img" />
                <h3>Zaffar AR Bagban</h3>
                <p>9325211569</p>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3 col-xs-12">
              <div class="box">
                <img src={AnwarB} class="img-fluid rounded-circle" alt="img" />
                <h3>Anwar Ar Bagban</h3>
                <p>9422890595</p>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3 col-xs-12">
              <div class="box">
                <img src={AkramB} class="img-fluid rounded-circle" alt="img" />
                <h3>Akram AR Bagban</h3>
                <p>7588643015</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 col-md-3 col-lg-3 col-xs-12">
              <div class="box">
                <img src={JavedB} class="img-fluid rounded-circle" alt="img" />
                <h3>Javed Ar Bagban</h3>
                <p>9890903236</p>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3 col-xs-12">
              <div class="box">
                <img
                  src={IrshadB}
                  class="img-fluid rounded-circle"
                  alt="img"
                  title="img"
                />
                <h3>Irshad NM Bagban</h3>
                <p>997588812</p>
                {/* <ul class="list-inline">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i class="social_facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i class="social_twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://plus.google.com/" target="_blank">
                      <i class="social_googleplus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i class="social_instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://in.linkedin.com/" target="_blank">
                      <i class="social_linkedin"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
