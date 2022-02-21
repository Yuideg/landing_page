import React from "react";
import Carousel from "react-material-ui-carousel";
import HeroCarousel from "./Hero/HeroCarousel";
import HeroImage from "../assets/Hero.jpg";
// import { Box } from "@material-ui/core";

const Image1 = "http://i3.ytimg.com/vi/S0tHGUrsqqk/mqdefault.jpg";
const Image2 = "https://www.fanotube.net/uploads/video/thumbs/f1d0bd688-1.jpg";

function Hero() {
  return (
    <Carousel navButtonsAlwaysVisible indicators={false} animation="slide">
      <HeroCarousel image={HeroImage} />
      <HeroCarousel image={Image2} />
      <HeroCarousel image={Image1} />
    </Carousel>
  );
}

export default Hero;
