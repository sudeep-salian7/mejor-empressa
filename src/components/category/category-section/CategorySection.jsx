import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CategorySectionCard from "./CategorySectionCard";
import "../../../styles/Category.css"

const CategorySection = ({ category }) => {

  return (
    <div className="">
         <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {category?.Top_description}
          </ReactMarkdown>
        <CategorySectionCard category={category}/>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {category?.Bottom_description}
          </ReactMarkdown>
      </div>
  )
};

export default CategorySection;
