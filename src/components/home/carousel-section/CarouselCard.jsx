import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CarouselCard = ({ cardData, category }) => {
  return (
    <div className="min-w-fit sm:min-w-fit md:min-w-fit lg:min-w-fit xl:w-1/5">
      <LazyLoadImage
        src={`${process.env.REACT_APP_STRAPI_API_URL}${cardData?.attributes?.Image?.data?.attributes?.url}`}
        alt={category}
        loading="lazy"
        className="object-cover cursor-pointer h-48 w-72 xxlg:w-full"
      />
      <div className="w-72 font-semibold mt-1">
        {cardData?.attributes?.Blog_title}
      </div>
      <div className="w-fit font-medium px-5 py-1 mt-2 bg-[#f4f7fa] text-[#4158dd]">
        {category}
      </div>
    </div>
  );
};

export default CarouselCard;
