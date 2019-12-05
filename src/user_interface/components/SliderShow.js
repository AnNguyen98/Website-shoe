import React from "react";
import { Slide } from "react-slideshow-image";
import { CardMedia } from "@material-ui/core";

const slideImages = [
  "slider-show-1.jpg",
  "slider-show-2.jpg",
  "slider-show-3.jpg",
  "slider-show-4.jpg",
  "slider-show-5.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const SliderShow = () => {
  return (
    <div style={{ height: window.screen.height - 130 }}>
      <Slide {...properties}>
        <CardMedia
          image={require("../images/" + slideImages[0])}
          style={{ height: 700 }}
        />
        <CardMedia
          image={require("../images/" + slideImages[1])}
          style={{ height: 700 }}
        />
        <CardMedia
          image={require("../images/" + slideImages[2])}
          style={{ height: 700 }}
        />
        <CardMedia
          image={require("../images/" + slideImages[3])}
          style={{ height: 700 }}
        />
        <CardMedia
          image={require("../images/" + slideImages[4])}
          style={{ height: 700 }}
        />
      </Slide>
    </div>
  );
};

export default SliderShow;
