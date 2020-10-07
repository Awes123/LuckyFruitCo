import React, { useEffect } from "react";
import apple from "../assests/images/fruitsIcons/apple.png";
import orange from "../assests/images/fruitsIcons/orange.png";
import grape from "../assests/images/fruitsIcons/grape.png";
import mango from "../assests/images/fruitsIcons/mango.png";
import pineapple from "../assests/images/fruitsIcons/pineapple.png";
import pomegranate from "../assests/images/fruitsIcons/pomegranate.png";
import strawberry from "../assests/images/fruitsIcons/strawberry.png";
import watermelon from "../assests/images/fruitsIcons/watermelon.png";

import Aos from "aos";
import "aos/dist/aos.css";
const OurProducts = () => {
  useEffect(() => {
    Aos.init({
      duration: 10000,
    });
  }, []);
  return (
    <div>
      <div class="vc_row wpb_row vc_row-fluid border-top pt-5">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div
                class="sc_services sc_services_default"
                data-slides-per-view="4"
                data-slides-min-width="200"
              >
                <h2 class="sc_item_title sc_services_title sc_align_center sc_item_title_style_default mb-5">
                  Our Products
                </h2>
                <div class="container">
                  <div class="row">
                    <div data-aos="zoom-in" class="col-12 col-lg-3 col-md-3">
                      <div
                        class="card card-body p-3 mt-3"
                        style={{ alignItems: "center" }}
                      >
                        <div className="fruiticon rounded-circle">
                          <img className="img-fluid" src={apple} />
                        </div>
                        <div class="sc_services_item_info mt-2">
                          <div class="sc_services_item_header">
                            <h4 class="sc_services_item_title">Apples</h4>
                            <div class="sc_services_item_subtitle">
                              Our Range
                            </div>
                          </div>
                          <div class="sc_services_item_content">
                            <p>
                              Expertly grown and carefully gathered for our
                              customers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-aos="zoom-in" class="col-12 col-lg-3 col-md-3">
                      <div
                        class="card card-body p-3 mt-3"
                        style={{ alignItems: "center" }}
                      >
                        <div className="fruiticon rounded-circle">
                          <img className="img-fluid" src={grape} />
                        </div>
                        <div class="sc_services_item_info mt-2">
                          <div class="sc_services_item_header">
                            <h4 class="sc_services_item_title">Grape</h4>
                            <div class="sc_services_item_subtitle">
                              Our Range
                            </div>
                          </div>
                          <div class="sc_services_item_content">
                            <p>
                              Expertly grown and carefully gathered for our
                              customers.
                            </p>
                          </div>
                          <div class="sc_services_item_button sc_item_button"></div>
                        </div>
                      </div>
                    </div>
                    <div data-aos="zoom-in" class="col-12 col-lg-3 col-md-3">
                      <div
                        class="card card-body p-3 mt-3"
                        style={{ alignItems: "center" }}
                      >
                        <div className="fruiticon rounded-circle">
                          <img className="img-fluid" src={mango} />
                        </div>
                        <div class="sc_services_item_info mt-2">
                          <div class="sc_services_item_header">
                            <h4 class="sc_services_item_title">Mango</h4>
                            <div class="sc_services_item_subtitle">
                              Our Range
                            </div>
                          </div>
                          <div class="sc_services_item_content">
                            <p>
                              Expertly grown and carefully gathered for our
                              customers.
                            </p>
                          </div>
                          <div class="sc_services_item_button sc_item_button"></div>
                        </div>
                      </div>
                    </div>
                    <div data-aos="zoom-in" class="col-12 col-lg-3 col-md-3">
                      <div
                        class="card card-body p-3 mt-3"
                        style={{ alignItems: "center" }}
                      >
                        <div className="fruiticon rounded-circle">
                          <img className="img-fluid" src={orange} />
                        </div>
                        <div class="sc_services_item_info mt-2">
                          <div class="sc_services_item_header">
                            <h4 class="sc_services_item_title">Orange</h4>
                            <div class="sc_services_item_subtitle">
                              Our Range
                            </div>
                          </div>
                          <div class="sc_services_item_content">
                            <p>
                              Expertly grown and carefully gathered for our
                              customers.
                            </p>
                          </div>
                          <div class="sc_services_item_button sc_item_button"></div>
                        </div>
                      </div>
                    </div>
                    <div data-aos="zoom-in" class="col-12 col-lg-3 col-md-3">
                      <div
                        class="card card-body p-3 mt-3"
                        style={{ alignItems: "center" }}
                      >
                        <div className="fruiticon rounded-circle">
                          <img className="img-fluid" src={pineapple} />
                        </div>
                        <div class="sc_services_item_info mt-2">
                          <div class="sc_services_item_header">
                            <h4 class="sc_services_item_title">Pineapple</h4>
                            <div class="sc_services_item_subtitle">
                              Our Range
                            </div>
                          </div>
                          <div class="sc_services_item_content">
                            <p>
                              Expertly grown and carefully gathered for our
                              customers.
                            </p>
                          </div>
                          <div class="sc_services_item_button sc_item_button"></div>
                        </div>
                      </div>
                    </div>
                    <div data-aos="zoom-in" class="col-12 col-lg-3 col-md-3">
                      <div
                        class="card card-body p-3 mt-3"
                        style={{ alignItems: "center" }}
                      >
                        <div className="fruiticon rounded-circle">
                          <img className="img-fluid" src={pomegranate} />
                        </div>
                        <div class="sc_services_item_info mt-2">
                          <div class="sc_services_item_header">
                            <h4 class="sc_services_item_title">Pomegranate</h4>
                            <div class="sc_services_item_subtitle">
                              Our Range
                            </div>
                          </div>
                          <div class="sc_services_item_content">
                            <p>
                              Expertly grown and carefully gathered for our
                              customers.
                            </p>
                          </div>
                          <div class="sc_services_item_button sc_item_button"></div>
                        </div>
                      </div>
                    </div>
                    <div data-aos="zoom-in" class="col-12 col-lg-3 col-md-3">
                      <div
                        class="card card-body p-3 mt-3"
                        style={{ alignItems: "center" }}
                      >
                        <div className="fruiticon rounded-circle">
                          <img className="img-fluid" src={strawberry} />
                        </div>
                        <div class="sc_services_item_info mt-2">
                          <div class="sc_services_item_header">
                            <h4 class="sc_services_item_title">strawberry</h4>
                            <div class="sc_services_item_subtitle">
                              Our Range
                            </div>
                          </div>
                          <div class="sc_services_item_content">
                            <p>
                              Expertly grown and carefully gathered for our
                              customers.
                            </p>
                          </div>
                          <div class="sc_services_item_button sc_item_button"></div>
                        </div>
                      </div>
                    </div>
                    <div data-aos="zoom-in" class="col-12 col-lg-3 col-md-3">
                      <div
                        class="card card-body p-3 mt-3"
                        style={{ alignItems: "center" }}
                      >
                        <div className="fruiticon rounded-circle">
                          <img
                            className="img-fluid"
                            style={{ width: "90%" }}
                            src={watermelon}
                          />
                        </div>
                        <div class="sc_services_item_info mt-2">
                          <div class="sc_services_item_header">
                            <h4 class="sc_services_item_title">Watermelon</h4>
                            <div class="sc_services_item_subtitle">
                              Our Range
                            </div>
                          </div>
                          <div class="sc_services_item_content">
                            <p>
                              Expertly grown and carefully gathered for our
                              customers.
                            </p>
                          </div>
                          <div class="sc_services_item_button sc_item_button"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
