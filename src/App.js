import React, { useEffect } from "react";
import "./App.css";
import "./assests/bootstrap4/css/bootstrap.min.css";
// import "./assests/js/owl-carousel/owl.carousel.min.css";
import "./assests/js/dist/css/bootstrap-select.css";
import "./assests/font-awesome/css/font-awesome.min.css";
import "./assests/css/ele-style.css";
import "./assests/css/style.css";
import "./assests/css/style_cyan.css";
import "./assests/css/style_red.css";
import "./assests/css/style_green.css";
import "./assests/css/style_blue.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import OurProducts from "./components/OurProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Past from "./components/Past";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <div data-aos="fade-right">
        <Header />
      </div>
      <div data-aos="flip-left">
        <Navigation />
      </div>
      <div data-aos="flip-up">
        <Slider />
      </div>
      <div data-aos="flip-up">
        <About />
      </div>
      <WhatWeDo data-aos="flip-up" />
      <OurProducts data-aos="flip-up" />
      <WhyChooseUs data-aos="flip-up"/>
      <Past data-aos="flip-up" />
      <Team data-aos="flip-up"/>
      <Gallery data-aos="flip-up"/>
      <ContactUs data-aos="flip-up"/>
    </div>
  );
}

export default App;
