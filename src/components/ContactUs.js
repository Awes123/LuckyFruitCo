import React from "react";
import logo from "../assests/images/nlfc/NLFCGRSFB.png";
const ContactUs = () => {
  return (
    <div>
      <div class="contactus">
        <div class="container">
          <div class="row p-0 m-0">
            <div class="col-12 commontop text-center">
              <h4>
                <i class="icon_star_alt"></i>
                <i class="icon_star_alt"></i>
                <i class="icon_star_alt"></i>
                Contact us
                <i class="icon_star_alt"></i>
                <i class="icon_star_alt"></i>
                <i class="icon_star_alt"></i>
              </h4>
              <p>Have any questions? We'd love to hear from you.</p>
            </div>
            <div class="row p-0 m-0">
              <div class="col-12 col-md-6 col-lg-6">
                <form
                  method="post"
                  enctype="multipart/form-data"
                  class="form-horizontal"
                >
                  <div class="row p-0 m-0">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          value=""
                          id="input-name"
                          class="form-control"
                          placeholder="Name *"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="email"
                          value=""
                          id="input-email"
                          class="form-control"
                          placeholder="Email *"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row p-0 m-0">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="subject"
                          value=""
                          id="input-subject"
                          class="form-control"
                          placeholder="Subject *"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-xs-12">
                      <div class="form-group">
                        <i class="icofont icofont-pencil-alt-5"></i>
                        <textarea
                          name="enquiry"
                          id="input-enquiry"
                          class="form-control"
                          placeholder="Your Comment"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="buttons text-right">
                    <input
                      class="btn btn-primary"
                      type="submit"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.459035266456!2d75.35867621438933!3d19.90505203056229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2b45bd650a3%3A0xc6de94e3566f4b5e!2sNEW%20LUCKY%20TRADING%20CO.!5e0!3m2!1sen!2sin!4v1600286895648!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-0 m-0" style={{ backgroundColor: "#000" }}>
        <div class="">
          <div class="row p-0 m-0">
            <div class="container text-center text-md-left">
              <div
                class="row text-center text-md-left mt-5 mb-4 p-5"
                style={{ backgroundColor: "#fff", borderRadius: 170 }}
              >
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4">
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ width: "234px", height: "116px" }}
                  />
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <span>MDBootstrap</span>
                  </p>
                  <p>
                    <span>MDBootstrap</span>
                  </p>
                  <p>
                    <span>MDBootstrap</span>
                  </p>
                  <p>
                    <span>MDBootstrap</span>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <span>MDBootstrap</span>
                  </p>
                  <p>
                    <span>MDBootstrap</span>
                  </p>
                  <p>
                    <span>MDBootstrap</span>
                  </p>
                  <p>
                    <span>MDBootstrap</span>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i class="fa fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i class="fa fa-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p>
                    <i class="fa fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i class="fa fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
            <div class="footer-copyright d-flex col-lg-12 bg-dark mt-3 text-white text-center p-3">
              <div class="col-lg-6">© 2020 Copyright: Lucky Fruit Company</div>
              <div class="col-lg-6">
                Developed by:
                <a
                  href="https://www.quadintellectx.com/"
                  class="ml-2"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  www.Quadintelletcx.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
