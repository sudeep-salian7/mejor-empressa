import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutSection = ({ data }) => {
  return (
    <div className="flex justify-center flex-col items-center md:flex-row gap-8 bg-white px-4  sm:px-16 lg:px-32 py-14 xxlg:px-52">
      <LazyLoadImage
        src={`${process.env.REACT_APP_STRAPI_API_URL}${data?.Image?.data?.attributes?.url}`}
        alt={data?.Title}
        className="flex justify-center w-full md:w-[44%] h-80 object-cover rounded-md"
      />
      <div className="w-full md::w-[50%]">
          <div className="text-2xl sm:text-4xl text-[#00003A] font-semibold mb-6">
            {data?.Title}
          </div>
        <div className="text-[#212427] text-lg leading-relaxed">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {data?.Description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
