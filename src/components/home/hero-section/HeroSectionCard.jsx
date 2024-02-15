import React from "react";
import { Link } from "react-router-dom";

const HeroSectionCard = ({ service }) => {

  return (
    <Link
      to={service?.attributes?.Category_name?.toLowerCase()
        .split(" ")
        .join("-")}
      className="home-card flex flex-col justify-center items-center px-4 py-8 leading-tight  w-full bg-[#F3F3F3] rounded-lg xlmd:h-auto xlmd:gap-2 xlmd:p-10 xxlg:h-auto xxlg:gap-2 xxlg:p-12"
    >
      <img
        src={`${process.env.REACT_APP_STRAPI_API_URL}${service?.attributes?.Logo?.data?.attributes?.url}`}
        className="h-14 xxlg:h-auto"
        alt="logo of service"
      />
      <div className="text-[#1A1B1D] text-base text-center sm:text-xl base:text-base lg:text-lg font-semibold mt-6 xlmd:text-2xl xxlg:text-3xl xl:text-center sm:text-center xxlg:text-center">
        {service?.attributes?.Category_name}
      </div>
    </Link>
  );
};

export default HeroSectionCard;
