import React,{useEffect} from "react";
import img01 from "../assests/images/Gallery1.JPG";
import img02 from "../assests/images/Gellery2.JPG";
import img03 from "../assests/images/Gellery3.JPG";
import img04 from "../assests/images/Gellery4.JPG";
import img05 from "../assests/images/Gallery5.JPG";
import img06 from "../assests/images/Gallery6.jpg";
import img07 from "../assests/images/Gallery7.JPG";
import img08 from "../assests/images/Mango.jpg";
import img09 from "../assests/images/Apple.jpg";
import img10 from "../assests/images/Pomo1.jpg";
import img11 from "../assests/images/Moreapp.jpg";

import img12 from "../assests/images/Box.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <div class="gallery row" id="gallery" style={{ opacity: 1 }}>
        
      <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 1 animation">
          <img class="img-fluid" src={img05}  data-aos="flip-left" alt="g123" />
        </div>
        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 2 animation">
        <img class="img-fluid" src={img02}  data-aos="flip-left" alt="g123" />
          <img class="img-fluid  mt-5"  data-aos="flip-left" src={img01} alt="g123" />
        </div>

        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 1 animation">
          <img class="img-fluid" src={img06}  data-aos="flip-left" alt="g123" />
        </div>

        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 2 animation">
          <img class="img-fluid" src={img03}  data-aos="flip-left" alt="g123" />
          <img class="img-fluid mt-5" src={img04} data-aos="flip-left" alt="g123" />
        </div>

        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 2 animation">
          <img class="img-fluid" src={img07} data-aos="flip-left" alt="g123" />
          <img class="img-fluid mt-5" src={img10} data-aos="flip-left" alt="g123" />
        </div>

        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 1 animation">
          <img class="img-fluid" src={img08} data-aos="flip-left" alt="g123" />
        </div>
        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 2 animation">
          <img class="img-fluid" src={img11} data-aos="flip-left" alt="g123" />
          <img class="img-fluid mt-5" src={img12} data-aos="flip-left" alt="g123" />
        </div>
        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 1 animation">
          <img class="img-fluid" src={img09} data-aos="flip-left" alt="g123" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
