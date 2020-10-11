import React from "react";
import img01 from "../assests/images/Gallery1.JPG";
import img02 from "../assests/images/Gellery2.JPG";
import img03 from "../assests/images/Gellery3.JPG";
import img04 from "../assests/images/Gellery4.JPG";
import img05 from "../assests/images/Gallery5.JPG";
import img06 from "../assests/images/Gallery6.JPG";
import img07 from "../assests/images/Gallery7.JPG";
import img08 from "../assests/images/Mango.jpg";
import img09 from "../assests/images/Apple.jpg";
import img10 from "../assests/images/Pomo1.jpg";
import img11 from "../assests/images/Moreapp.jpg";

import img12 from "../assests/images/Box.jpg";
const Gallery = () => {
  return (
    <div>
      <div class="gallery row" id="gallery" style={{ opacity: 1 }}>
        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 2 animation">
          <img class="img-fluid" src={img01} alt="Card image cap" />
          <img class="img-fluid mt-5" src={img02} alt="Card image cap" />
        </div>
        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 1 animation">
          <img class="img-fluid" src={img05} alt="Card image cap" />
        </div>

        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 1 animation">
          <img class="img-fluid" src={img06} alt="Card image cap" />
        </div>

        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 2 animation">
          <img class="img-fluid" src={img03} alt="Card image cap" />
          <img class="img-fluid mt-5" src={img04} alt="Card image cap" />
        </div>

        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 2 animation">
          <img class="img-fluid" src={img07} alt="Card image cap" />
          <img class="img-fluid mt-5" src={img10} alt="Card image cap" />
        </div>

        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 1 animation">
          <img class="img-fluid" src={img08} alt="Card image cap" />
        </div>
        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 2 animation">
          <img class="img-fluid" src={img11} alt="Card image cap" />
          <img class="img-fluid mt-5" src={img12} alt="Card image cap" />
        </div>
        <div class="mb-3 col-12 col-lg-3 col-md-4 pics all 1 animation">
          <img class="img-fluid" src={img09} alt="Card image cap" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
