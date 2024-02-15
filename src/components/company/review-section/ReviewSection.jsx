
import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import ReviewSectionCard from "./ReviewSectionCard";
import dropdown from "../../../images/dropdown.webp";
import {LazyLoadImage} from "react-lazy-load-image-component";

const ReviewSection = ({ review }) => {
  const [filteredReview, setFilteredReview] = useState([]);
  const [sortedReview, setSortedReview] = useState([]);
  const [filterType, setFilterType] = useState("Todos");
  const [sortType, setSortType] = useState("MejoresCríticas");

  const starRating = (star) => {
    return Array.from({ length: 5 }, (rating = star, index) => {
      let number = index + 0.5;

      return (
        <span key={index}>
          {rating >= index + 1 ? (
            <FaStar />
          ) : rating >= number ? (
            <FaStarHalfAlt />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      );
    });
  };

  const handleFilterDropDown = (data) => {
    setFilterType(data);
  };

  const handleSortDropDown = (data) => {
    setSortType(data);
  };
  
  useEffect(() => {
    let filtered = review;
    if (filterType === "Featured") {
      filtered = review.filter((review) => review?.attributes?.Featured_review === true);
    }
    setFilteredReview(filtered);
  }, [review, filterType]);

  useEffect(() => {
    let sorted = [...filteredReview];
    if (sortType === "cityASC") {
      sorted.sort((a, b) => a.attributes.City.localeCompare(b.attributes.City));
    } else if (sortType === "cityDSC") {
      sorted.sort((a, b) => b.attributes.City.localeCompare(a.attributes.City));
    } else if (sortType === "stateASC") {
      sorted.sort((a, b) => a.attributes.State.localeCompare(b.attributes.State));
    } else if (sortType === "stateDSC") {
      sorted.sort((a, b) => b.attributes.State.localeCompare(a.attributes.State));
    } else if (sortType === "dateASC") {
      sorted.sort((a, b) => new Date(a.attributes.Date) - new Date(b.attributes.Date));
    } else if (sortType === "dateDSC") {
      sorted.sort((a, b) => new Date(b.attributes.Date) - new Date(a.attributes.Date));
    }
    setSortedReview(sorted);
  }, [filteredReview, sortType]);

  const displayedReviews = sortedReview.length !== 0 ? sortedReview : filteredReview;

  return (
    <div className="flex flex-col items-center py-6 bg-[#F8F8F8]">
      <div className="text-black text-center text-2xl md:text-3xl ml-8 font-semibold mb-7 mt-7">
        Reseñas de sunrun
      </div>
      <div className="flex flex-col space-y-4 mb-7 sm:flex-row sm:space-y-0 sm:space-x-6">
        <div className="mb-1 sm:mb-1">
          <div className="text-md text-[#4D5F7A] mb-1">Ordenar por:</div>
          <div className="relative inline-block w-full sm:w-60">
            <select
              className="border border-gray-300 px-9 py-3 md:w-50 rounded-md focus:outline-none w-full appearance-none"
              onChange={(e) => handleSortDropDown(e.target.value)}
              value={sortType}
            >
              <option value="MejoresCríticas">Mejores críticas</option>
              <option value="cityASC">City ASC</option>
              <option value="cityDSC">City DESC</option>
              <option value="stateASC">State ASC</option>
              <option value="stateDSC">State DESC</option>
              <option value="dateASC">Date ASC</option>
              <option value="dateDSC">Date DESC</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <LazyLoadImage src={dropdown} alt="dropdown" />
            </div>
          </div>
        </div>
        <div>
          <div className="text-md text-[#4D5F7A] mb-1">Filtrado por:</div>
          <div className="relative inline-block w-full sm:w-60">
            <select
              className="border border-gray-300 px-9 py-3 md:w-50 rounded-md focus:outline-none w-full appearance-none"
              onChange={(e) => handleFilterDropDown(e.target.value)}
              value={filterType}
            >
              <option value="Todos">Todos</option>
              <option value="Featured">Featured</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <LazyLoadImage src={dropdown} alt="dropdown" />
            </div>
          </div>
        </div>
      </div>
      {displayedReviews.length !== 0 &&
        displayedReviews.map((reviewItem, index) => (
          <ReviewSectionCard key={index} review={reviewItem} starRating={starRating} />
        ))}
    </div>
  );
};

export default ReviewSection;
