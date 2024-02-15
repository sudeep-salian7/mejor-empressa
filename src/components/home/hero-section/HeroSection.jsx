import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import HeroSectionCard from "./HeroSectionCard";
import img from "../.././../images/home-page-hero-lesswidth.webp";

const HeroSection = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const formatTitle = () => {
    const Title = data?.Title.replace("grandes,", "grandes,<br>");
    const titleElement = document.querySelector(".hero-title");
    titleElement.innerHTML = Title;
  };

  const formatDescription = () => {
    const desc =
      windowWidth >= 500
        ? data?.Description.replace("en", "en <br>")
        : data?.Description.replace("en <br>", "en");
    const descElement = document.querySelector(".hero-desc");
    descElement.innerHTML = desc;
  };

  useEffect(() => {
    formatTitle();
    formatDescription();
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-hero-section bg-cover flex flex-col justify-center py-20">
      <img
        src={img}
        alt="Background"
        className="absolute top-0 left-0 h-full w-2/3 hidden md:block"
      />
      <div
        alt="Background"
        className="homepage-mobile absolute  top-0 left-0 h-full w-full object-cover block  bg-hero-sectionMobile  bg-custom md:hidden"
      />
      <div className="flex flex-col w-auto text-center items-center px-4 sm:px-12 sm:text-left sm:items-start  sm:w-4/5 md:w-full md:px-32  lg:w-full xxlg:px-52  text-white z-10">
        <div className="text-3xl leading-snug sm:text-3xl md:text-4xl font-bold md:leading-10 lg:text-5xl tracking-wide mb-3 hero-title">
          {data?.Title}
        </div>
        <div className="text-sm  mt-2 md:text-base whitespace-normal sm:whitespace-nowrap hero-desc">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {data?.Description}
          </ReactMarkdown>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-8 w-full base:gap-6 px-8 sm:px-12 sm:grid-cols-2  md:px-32 md:grid-cols-2 mt-7 sm:mt-7 lg:flex-nowrap lg:grid-cols-4 xxlg:px-52 z-10">
        {data?.Services?.data?.map((service, index) => (
          <HeroSectionCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
