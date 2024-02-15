import React from "react";

const TopicSelectionSection = ({ blogTopics }) => {

  return (
    <div className="hidden base:block">
      <div className="text-[#495057] w-52 text-lg font-semibold tracking-wide border-b-2 border-[#D8D8D8] pb-4">
      Temas Populares
      </div>
      {blogTopics?.map((topic, index) => (
        <div key={index} className="w-52 border-b-2 border-[#D8D8D8] py-4">
          {topic?.attributes?.Title}
        </div>
      ))}
    </div>
  );
};

export default TopicSelectionSection;
