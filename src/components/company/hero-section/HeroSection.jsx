import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import defaultCompanyImage from "../../../images/default-company.webp";

const HeroSection = ({ data }) => {

  const starRating = () => {
    return Array.from(
      { length: 5 },
      (rating = data?.Hero_Section?.Company_rating, index) => {
        let number = index + 0.5;

        return (
          <span key={index} className=" text-4xl sm:text-2xl">
            {rating >= index + 1 ? (
              <FaStar />
            ) : rating >= number ? (
              <FaStarHalfAlt />
            ) : (
              <AiOutlineStar />
            )}
          </span>
        );
      }
    );
  };
  let image;

  if (data?.logo?.data?.attributes?.url === undefined) {
    image = defaultCompanyImage;
  } else {
    image = `${process.env.REACT_APP_STRAPI_API_URL}${data?.logo?.data?.attributes?.url}`;
  }

  return (
    <div className="flex flex-col base:flex-nowrap items-start justify-between text-white bg-company-page bg-cover py-10 px-6 base:flex-row base:items-center lg:flex-row md:px-12 base:px-16 lg:px-32">
      <div className="wrapper flex flex-col sm:gap-10 flex-1 items-center w-full rounded-lg sm:flex-row bg-white sm:bg-transparent p-10 pt-1 sm:p-0 sm:w-auto">
        <div className="flex flex-col items-center justify-center  bg-white w-36 h-36 aspect-square min-w-fit sm:p-4 sm:shadow-md -mb-1 -mt-1 -ml-1 -mr-1 rounded-md  md:w-52 md:h-52 base:px-7 base:py-11">
          <img
            src={image}
            alt="company image"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="w-full">
          <div className="text-3xl font-bold tracking-wide hidden sm:block">
            {data?.Company_name}
          </div>
          <div className="flex flex-col align-middle items-center gap-4 mt-1 flex-wrap sm:flex-row ">
            <div className="text-4xl lg:text-2xl text-[#1A1B1D]  sm:text-white font-bold sm:text-2xl order-2 sm:-order-none">
              {data?.Hero_Section?.Company_rating}
            </div>
            <div className="flex gap-1 text-xl text-[#FCC12A] order-1 sm:-order-none">
              {starRating()}
            </div>
            <div className=" tracking-wide whitespace-nowrap order-3 text-center sm:text-left text-[rgb(33,36,39)] font-normal sm:text-white">
              Actualizado al día de hoy
            </div>
          </div>
          <div className="text-center sm:text-left text-[#212427] font-medium sm:text-white">
            {data?.Hero_Section?.Company_short_description}
          </div>
          <div className="order-4 mt-6 sm:ml-0 sm:mt-3 md:mt-6 text-center sm:text-left font-bold text-[rgb(33,36,39)] sm:text-white">
            {data?.Hero_Section?.Author_name?.data?.attributes?.Author_name}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 w-full mr-20 md:w-auto sm:mt-10 base:mt-0 base:min-w-fit  ">
        <div className="flex gap-2 self-center sm:self-start ">
          <div className="text-lg mt-1">
            <BsTelephoneFill />
          </div>
          <div className=" text-0.95 base:text-md">
            Contactar ahora a un asesor
          </div>
        </div>
        <div className=" text-3xl tracking-wide font-bold">
          {data?.Hero_Section?.Phone_number}
        </div>
        <Link
          to={data?.Hero_Section?.Company_url}
          className="flex justify-center items-center gap-7 bg-[#4158DD] text-white  font-medium rounded-md mt-3 px-10 py-4 self-center sm:self-start"
        >
          Get started
          <span className="">
            <AiOutlineArrowRight className="text-2xl" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
