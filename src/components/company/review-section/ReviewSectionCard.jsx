import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

const ReviewSectionCard = ({review , starRating}) => {
  
    let date = new Date(review?.attributes?.Date).getDate()
    let monthIndex = new Date(review?.attributes?.Date).getMonth()
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    let monthName = monthNames[monthIndex]
    return(
        <div className="bg-white rounded-lg w-8/12 shadow-md p-6 mb-4">
        <div className="text-[#23155B] text-lg tracking-wide font-semibold mb-2">  
                {review?.attributes?.Name}
              </div>
              <div className="text-[#4D5F7A] mb-1">{`${review?.attributes?.City}, ${review?.attributes?.State}`}</div>
              <div className="flex gap-1 text-xl text-yellow-400">
                {starRating(review?.attributes?.Rating)}
              </div>
              <div className="mt-4">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {review?.attributes?.Description}
                </ReactMarkdown>
              </div>
              <div className="text-[#4D5F7A] mt-3">{`-${monthName}, ${date}`}</div>
            </div>
    )
}
 export default ReviewSectionCard