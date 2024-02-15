import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const HeroSection = ({ data }) => {
  return (
    <div className="bg-rankingbg bg-center bg-no-repeat bg-cover h-auto min-h-full flex justify-start items-center text-white lg:h-72">
      <div className="title mx-4 mb-14 mt-48 flex flex-col justify-start text-white text-center sm:mt-12 sm:mx-14 sm:text-left md:mx-20 base:mx-28 lg:mx-36">
        <h1 className="text-4xl font-semibold">{data?.Category_name}</h1>
        <p className="text-base text-white font-normal mt-4 w-full md:w-3/5">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {data?.Long_description}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
