import React from "react";
import CountUp from "react-countup";
const Past = () => {
  return (
    <div>
      <section class="text-white counter_box pt-5 pb-5">
        <div class="container">
          <div class="row box_row">
            <div class="col-md-4 col-xs-6 box">
              <h3>
                <CountUp end={27} />
                <span>Cities</span>
              </h3>
            </div>
            <div class="col-md-4 col-xs-6 box">
              <h3>
                <CountUp end={2} />
                <span>   Branches</span>
              </h3>
              <p>
           
              </p>
            </div>
            <div class="col-md-4 col-xs-6 box">
              <h3>
                <CountUp end={50} />
                <span>   Products</span>

              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Past;
