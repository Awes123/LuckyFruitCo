import React from "react";
import apple from "../assests/images/fruitsIcons/apple.png";
import CountUp from "react-countup";
const Past = () => {
  return (
    <div>
      <section class="text-white counter_box">
        <div class="container">
          <div class="row box_row">
            <div class="col-md-3 col-xs-6 box">
              <div className="fruiticon rounded-circle col-12">
                <img className="img-fluid" src={apple} />
              </div>
              <h3>
                <CountUp end={27} />
                <sub>Cities</sub>
              </h3>
              <p>
                National
                <br />
                Presence
              </p>
            </div>
            <div class="col-md-3 col-xs-6 box">
              <div className="fruiticon rounded-circle col-12">
                <img className="img-fluid" src={apple} />
              </div>
              <h3>
                <CountUp end={16} />
              </h3>
              <p>
                Cold
                <br />
                Storages
              </p>
            </div>
            <div class="col-md-3 col-xs-6 box">
              <div className="fruiticon rounded-circle col-12">
                <img className="img-fluid" src={apple} />
              </div>
              <h3>
                <CountUp end={85} />
              </h3>
              <p>
                Refrigerator
                <br />
                Trucks
              </p>
            </div>
            <div class="col-md-3 col-xs-6 box">
              <div className="fruiticon rounded-circle col-12">
                <img className="img-fluid" src={apple} />
              </div>
              <h3>
                <CountUp end={50} />
              </h3>
              <p>
                Variety
                <br />
                of Products
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Past;
