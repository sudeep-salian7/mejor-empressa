import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

const FeaturedReview = ({ review }) => {
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

  return (
    <div className="text-[#495057] flex flex-col gap-6 mb-6">
      <div className="text-2xl font-semibold tracking-wide text-[#232121]">
        Featured Reviews
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {review
          ?.filter((review) => review?.attributes?.Featured_review === true)
          ?.map((review, index) => (
            <div key={index} className="flex flex-col shadow-lg p-8">
              <div className="text-[#23155B] text-lg tracking-wide font-semibold">
                {review?.attributes?.Name}
              </div>
              <div className="text-[#4D5F7A]">{`${review?.attributes?.City}, ${review?.attributes?.State}`}</div>
              <div className="flex gap-1 text-xl text-yellow-400">
                {starRating(review?.attributes?.Rating)}
              </div>
              <div className="mt-4">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {review?.attributes?.Description}
                </ReactMarkdown>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedReview;
