import React, { useRef, useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CarouselCard from "./CarouselCard";

const Carousel = ({ carousel }) => {
  const category = carousel?.Services?.data?.attributes?.Category_name;
  const scrollRef = useRef(null);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(true);

  useEffect(() => {
    const checkButtonState = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if(Math.floor(scrollWidth - clientWidth)<=Math.ceil(scrollLeft)+1){
            setIsRightButtonDisabled(true)
          }else {
            setIsRightButtonDisabled(false)
          } 
          setIsLeftButtonDisabled(scrollLeft === 0);  
      }
    };

    const handleScroll = () => {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(checkButtonState);
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      checkButtonState(); // Initial check
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleLeftClick = () => {
    if (!isLeftButtonDisabled && scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const handleRightClick = () => {
    if (!isRightButtonDisabled && scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="bg-white px-6 py-10 sm:px-16 lg:px-32 xxlg:px-52">
      <div className="flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold xxlg:text-3xl">
          {category}
        </div>
        <div className="flex invisible sm:visible">
          <div
            className={`${
              isLeftButtonDisabled ? "opacity-10" : "cursor-pointer"
            } text-2xl`}
            onClick={handleLeftClick}
          >
            <div className="shadow-lg flex items-center justify-center rounded-full p-4 flex-1">
              <ArrowBackIcon className="h-4 w-4 text-iconColor font-bold" />
            </div>
          </div>
          <div
            className={`${
              isRightButtonDisabled ? "opacity-10" : "cursor-pointer"
            } text-2xl`}
            onClick={handleRightClick}
          >
            <div className="shadow-lg flex items-center justify-center rounded-full p-4 flex-1">
              <ArrowForwardIcon className="h-4 w-4 font-semibold text-iconColor" />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-x-4 mt-4 overflow-x-auto sm:no-scrollbar pb-9 cursor-all-scroll scroll-smooth"
          >
        {carousel?.Service_Articles?.data?.map((cardData, index) => (
          <CarouselCard key={index} cardData={cardData} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
