import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div class="contactus">
        <div class="container">
          <div class="row">
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
              <p>Pellentesque sed posuere nisi. Nunc nec looreet mauris.</p>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <form
                  method="post"
                  enctype="multipart/form-data"
                  class="form-horizontal"
                >
                  <div class="row">
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
                  <div class="row">
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
        <div class="container">
          <div class="row">
            <div class="col-md-12 p-5">
              <div class="address" style={{ bottom: 0 }}>
                <ul class="list-inline">
                  <li>
                    <i class="icon_map_alt"></i>
                    Shop 36 <br />
                    APMC Market, Aurangabad
                  </li>
                  <li>
                    <i class="fa fa-envelope-o"></i>
                    nabeel@luckyfruitco.com
                  </li>
                  <li>
                    <i class="icon_mobile"></i>
                    +91 9595111536
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
