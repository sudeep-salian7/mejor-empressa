import React from "react";
import ArticleSectionCard from "./ArticleSectionCard";

const ArticleSection = ({ data, category }) => {

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="text-darkblue text-center text-2xl md:text-3xl font-semibold">
        Últimos Artículos Destacados
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full px-4 sm:px-12 md:px-32 mt-6 md:mt-12">
        {data?.map((article, index) => (
          <ArticleSectionCard
            key={index}
            article={article}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
