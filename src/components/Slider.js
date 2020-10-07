import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img from "../assests/images/header3/slider.png";

import { boolean, number } from "@storybook/addon-knobs";
const tooglesGroupId = "Toggles";
const valuesGroupId = "Values";

const getConfigurableProps = () => ({
  showArrows: boolean("showArrows", true, tooglesGroupId),
  showStatus: boolean("showStatus", false, tooglesGroupId),
  showIndicators: boolean("showIndicators", false, tooglesGroupId),
  infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
  showThumbs: boolean("showThumbs", false, tooglesGroupId),
  useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
  autoPlay: boolean("autoPlay", true, tooglesGroupId),
  stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
  swipeable: boolean("swipeable", true, tooglesGroupId),
  dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
  emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
  thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
  selectedItem: number("selectedItem", 0, {}, valuesGroupId),
  interval: number("interval", 5000, {}, valuesGroupId),
  transitionTime: number("transitionTime", 2000, {}, valuesGroupId),
  swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
});
class Slider extends Component {
  render() {
    return (
      <Carousel {...getConfigurableProps()}>
        <div>
          <img src={img} alt="img1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img} alt="img1" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img} alt="img1" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
export default Slider;
