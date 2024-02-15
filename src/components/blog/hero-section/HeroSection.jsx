import React, { useContext }  from "react";
import { HeaderContext } from "../../../context/HeaderContext";

const HeroSection = ({ data }) => {
  const {blogHeader} = useContext(HeaderContext)

  const oldDate = data?.Date?.split("-");
  const newDate = `${oldDate?.[2]}.${oldDate?.[1]}.${oldDate?.[0]}`;
  return (
    <div className={`flex flex-col justify-center sm:text-start w-full pl-10 pr-4 md:px-12 lg:px-20 py-24 text-white bg-blog-page bg-cover ${blogHeader?"pb-28 pt-52":""}`}>
      <div className="w-fit text-white bg-[#f4f7fa43] rounded-3xl px-6 py-1">
        {data?.Blog_category?.data?.attributes?.Title}
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide w-full  md:w-3/4 base:w-3/5 lg:w-2/4 mt-4">
        {data?.Blog_title}
      </div>
      <div className="w-full  md:w-3/4 base:w-3/5 lg:w-2/4 mt-4">
        {data?.Short_description}
      </div>
      <div className="font-semibold tracking-wide mt-4">
        {`By ${data?.Author?.data?.attributes?.Author_name} | ${newDate}`}
      </div>
    </div>
  );
};

export default HeroSection;
