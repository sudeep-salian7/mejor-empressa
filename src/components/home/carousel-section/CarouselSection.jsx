import React from "react";
import Carousel from "./Carousel";

const CarouselSection = ({ data }) => {
  
  return (
    <>
      {data?.map((carousel, index) => (
        <Carousel carousel={carousel} key={index}/>
      ))}
    </>
  );
};

export default CarouselSection;
