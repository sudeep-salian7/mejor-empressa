import React from "react";
import ReviewSectionCard from "./ReviewSectionCard";

const ReviewSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center bg-[#F3F7FA] px-4 sm:px-12 md:px-32 py-14 xxlg:px-52 mt-12 sm:mt-0">
      <div className="text-darkblue text-center text-2xl md:text-3xl font-semibold">
        {data?.Title}
      </div>
      <div className="grid grid-cols-1 gap-x-4 mt-10 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {data?.Company_Features?.data.map((review, index) => (
          <ReviewSectionCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
