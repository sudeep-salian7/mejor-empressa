import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const HeroSection = ({ category }) => {
  return (
    <div className="hero text-white bg-category-page-mobile sm:bg-categorybg bg-center bg-no-repeat bg-cover h-72 min-h-full  flex flex-col justify-center  gap-5 text-center p-6 pt-56 pb-48 sm:h-72 sm:items-center lg:p-44">
        <h1 className="text-3xl font-bold text-left  sm:text-4xl sm:text-center">{category?.Title}</h1>
        <p className="text-base font-normal text-left sm:text-lg sm:text-center">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {category?.Description}
             </ReactMarkdown>
        </p>
     </div>
  );
};

export default HeroSection;
