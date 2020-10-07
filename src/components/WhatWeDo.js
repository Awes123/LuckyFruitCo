import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const WhatWeDo = () => {
  useEffect(() => {
    Aos.init({
      duration: 10000,
    });
  }, []);
  return (
    <div>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner vc_custom_1480319487456">
            <div className="wpb_wrapper pt-5">
              <div
                id="sc_title_1718097130"
                className="sc_title sc_title_default  vc_custom_1480319324715"
              >
                <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_default">
                  What We Do
                </h2>
              </div>
              <div
                className="vc_empty_space  height_small"
                style={{ height: 32 }}
              >
                <span className="vc_empty_space_inner"></span>
              </div>
              <div className="container">
                <div className=" row m-0 p-0">
                  <div
                    className="col-12 col-lg-4 col-md-4"
                    data-aos="zoom-in-right"
                  >
                    <div className="card" style={{ borderRadius: 15 }}>
                      <div className="card-body" style={{ borderRadius: 15 }}>
                        <div className="wpb_single_image wpb_content_element vc_align_left">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper   vc_box_border_grey">
                              <img
                                src="https://preston.axiomthemes.com/wp-content/uploads/2016/10/3.png"
                                className="img-fluid"
                                alt=""
                                srcSet="https://preston.axiomthemes.com/wp-content/uploads/2016/10/3.png 370w, https://preston.axiomthemes.com/wp-content/uploads/2016/10/3-300x223.png 300w"
                              />
                            </div>
                          </figure>
                        </div>
                        <div
                          className="vc_empty_space"
                          style={{ height: "3rem" }}
                        >
                          <span className="vc_empty_space_inner"></span>
                        </div>
                        <div
                          id="sc_title_2045325521"
                          className="sc_title sc_title_default"
                        >
                          <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_title_small_text">
                            Conventional Fruits
                          </h2>
                          <div className="sc_item_descr sc_title_descr sc_align_center">
                            Lorem ipsum dolor sit amet, const. Praesent
                            vestibulum molestie lacus. Aenean nonummy hendrerit
                            mauris.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-lg-4 col-md-4"
                    data-aos="zoom-in-up"
                  >
                    <div className="card" style={{ borderRadius: 15 }}>
                      <div className="card-body" style={{ borderRadius: 15 }}>
                        <div className="wpb_single_image wpb_content_element vc_align_left">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper   vc_box_border_grey">
                              <img
                                src="https://preston.axiomthemes.com/wp-content/uploads/2016/10/2.png"
                                className="img-fluid"
                                alt=""
                                srcSet="https://preston.axiomthemes.com/wp-content/uploads/2016/10/2.png 370w, https://preston.axiomthemes.com/wp-content/uploads/2016/10/2-300x223.png 300w"
                              />
                            </div>
                          </figure>
                        </div>
                        <div
                          className="vc_empty_space"
                          style={{ height: "3rem" }}
                        >
                          <span className="vc_empty_space_inner"></span>
                        </div>
                        <div
                          id="sc_title_2085809024"
                          className="sc_title sc_title_default"
                        >
                          <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_title_small_text">
                            Organic Fruits
                          </h2>
                          <div className="sc_item_descr sc_title_descr sc_align_center">
                            Lorem ipsum dolor sit amet, const. Praesent
                            vestibulum molestie lacus. Aenean nonummy hendrerit
                            mauris.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-lg-4 col-md-4"
                    data-aos="zoom-in-left"
                  >
                    <div className="card" style={{ borderRadius: 15 }}>
                      <div className="card-body" style={{ borderRadius: 15 }}>
                        <div className="wpb_single_image wpb_content_element vc_align_left">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper   vc_box_border_grey">
                              <img
                                src="https://preston.axiomthemes.com/wp-content/uploads/2016/10/1.png"
                                className="img-fluid"
                                alt=""
                                srcSet="https://preston.axiomthemes.com/wp-content/uploads/2016/10/1.png 370w, https://preston.axiomthemes.com/wp-content/uploads/2016/10/1-300x223.png 300w"
                              />
                            </div>
                          </figure>
                        </div>
                        <div
                          className="vc_empty_space"
                          style={{ height: "3rem" }}
                        >
                          <span className="vc_empty_space_inner"></span>
                        </div>
                        <div
                          id="sc_title_674529261"
                          className="sc_title sc_title_default"
                        >
                          <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_title_small_text">
                            Our Own Fruits
                          </h2>
                          <div className="sc_item_descr sc_title_descr sc_align_center">
                            Lorem ipsum dolor sit amet, const. Praesent
                            vestibulum molestie lacus. Aenean nonummy hendrerit
                            mauris.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_empty_space" style={{ height: "5.8rem" }}>
                <span className="vc_empty_space_inner"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
