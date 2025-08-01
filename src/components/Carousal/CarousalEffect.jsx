import React from "react";
import classes from "./carousel.module.css";
import { Carousel } from "react-responsive-carousel";
import { img as imageList } from "./img/data"; // Renamed for clarity
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Don't forget

function CarousalEffect() {
  return (
    <div className={classes.carouselWrapper}>
      <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false}>
        {imageList.map((imgLink, index) => (
          <div className={classes.hero__img} key={index}>
            <img src={imgLink} alt={`carousel-${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarousalEffect;
