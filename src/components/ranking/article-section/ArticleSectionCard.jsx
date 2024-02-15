
import React from "react";
import { Link } from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

const ArticleSectionCard = ({ article, category }) => {
  let blogCategory=category.toLowerCase()?.split(" ")?.join("-")
  let blogTitle=encodeURIComponent(article?.attributes?.Blog_title?.toLowerCase()?.split(" ")?.join("-"))
  return (
    <Link
      to={`/articulos/${blogCategory}/${blogTitle}`}
      className="flex justify-center items-center w-full sm:w-96 md:w-80 lg:w-auto relative"
    >
      <LazyLoadImage
        src={`${process.env.REACT_APP_STRAPI_API_URL}${article?.attributes?.Image?.data?.attributes?.url}`}
        alt={article?.attributes?.Blog_title}
        className="rounded-lg h-72 w-full"
      />
      <div className="absolute w-4/5 bottom-6 left-6 text-base text-white">
        {article?.attributes?.Blog_title}
      </div>
      <div className="absolute top-3 text-white bg-[#f4f7fa43] rounded-3xl px-6 py-1 right-6">
        {category}
      </div>
    </Link>
  );
};

export default ArticleSectionCard;
