import React from "react";
import ArticleSectionCard from "./ArticleSectionCard";

const ArticleSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="text-darkblue text-center text-2xl md:text-3xl font-semibold">
        {data?.Title}
      </div>
      <div className="grid grid-cols-1 justify-center gap-4 w-full px-4 sm:px-12 sm:grid-cols-1 md:px-32 md:grid-cols-2 mt-6 md:mt-12 lg:grid-cols-3 xxlg:px-52 ">
        {data?.Latest_Articles?.data?.map((article, index) => (
          <ArticleSectionCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
