import React, { useState } from "react";
import {  BsChevronDown , BsChevronRight } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const FrequentlyAskedQuestionsCard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className={`flex flex-col py-8 px-9 bg-white rounded-lg shadow-md font-semibold text-sm ${
      showAnswer ? "border border-blue-200" : ""
    }`}>
      <div className="flex items-center text-base  cursor-pointer sm:text-lg md:text-xl" onClick={toggleAnswer}>
        <div className="w-5/6">
          {question.attributes.Question}
        </div>
        <div className="ml-auto text-end relative">
          {showAnswer && 
          <div className="shadow-lg flex absolute -right-3 -top-3 md:static md:right-0 items-center justify-center rounded-full bg-blue-700 p-1 md:p-2 flex-1">
              <BsChevronDown className="text-white"/>
          </div>}
          {!showAnswer && 
          <div className="shadow-lg flex absolute -right-3 -top-3 md:static md:right-0 items-center justify-center rounded-full p-1 md:p-2 flex-1 ">
              <BsChevronRight className="text-iconColor text-bolder"/>
          </div>} 
        </div>
      </div>
      {showAnswer && (
        <div className="flex flex-col pt-9 mt-[-15px] w-11/12 font-normal text-[#495057] leading-relaxed text-base md:text-lg">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{question.attributes.Answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default FrequentlyAskedQuestionsCard;
