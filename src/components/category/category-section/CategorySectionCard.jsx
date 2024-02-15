import React from "react";
import Carousel from "react-elastic-carousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CategoryList from "./CategoryList";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CategorySectionCard = ({ category }) => {
  
  const categoryList = category?.Category_lists?.data
  return (
    <div className="carousel bg-[#F3F7FA;] py-16">
      <div className="carousel-box  mx-3 sm:mx-8 lg:mx-40">
        <h3 className="w-11/12 text-center my-0 mx-auto text-[#212427] text-base font-semibold mb-10 sm:text-lg sm:w-4/5">
          {category?.Category_title}
        </h3>
        <div className="carousel-wrapper carousel-container">
          <Carousel
            breakPoints={breakPoints}
            renderArrow={({ type, onClick, isEdge }) => (
              <button
                onClick={onClick}
                className={`rec-arrow invisible sm:visible ${
                  type === "PREV" ? "rec-arrow-prev" : "rec-arrow-next"
                } ${
                  isEdge ? "rec-arrow-disabled" : ""
                } h-10 w-10 self-center rounded-full`}
                disabled={isEdge}
              >
                {type === "PREV" ? (
                  <ArrowBackIcon
                    className={`${
                      isEdge ? "arrow-icon-disabled" : "arrow-icon"
                    }`}
                  />
                ) : (
                  <ArrowForwardIcon
                    className={`${
                      isEdge ? "arrow-icon-disabled" : "arrow-icon"
                    }`}
                  />
                )}
              </button>
            )}
          >
            
            {categoryList?.map((item, index) => (
              <CategoryList data={item} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CategorySectionCard;
