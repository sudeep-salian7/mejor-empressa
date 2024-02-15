import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CompanyCard from "./CompanyCard";
import SideBar from "./SideBar";
import CategoryFAQ from "../FAQ/CategoryFAQ";

const CompanySection = ({ data, companyDetails }) => {
  const [categoryFAQ, setCategoryFAQ] = useState([]);

  let { service } = useParams();
  let serviceName = service?.split("-")?.join(" ");
  const apiCall = async () => {
    const categoryFAQ = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/category-faqs?populate=*&filters[Company_category][Category_name][$eqi]=${serviceName}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    const categoryFaqData = await categoryFAQ.json();
    setCategoryFAQ(categoryFaqData?.data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="flex flex-col gap-5 mx-8 my-14 sm:mx-14 md:mx-20 mdcustom:flex-row md:gap-20 base:mx-28 lg:mx-28">
      <SideBar data={data} />
      <div className="content-right w-full md:w-full lg:w-9/12">
        <p className="text-textColor font-normal my-3" id="resumen">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {data?.Ranking_page_description}
          </ReactMarkdown>
        </p>
        <h3 className="text-textColor font-bold mb-4 ">
          {data?.Ranking_title}
        </h3>
        {/* company section */}
        {companyDetails.map((data, index) => (
          <div id={`${index}`} key={index}>
            <CompanyCard companyData={data} key={index} index={index}/>
          </div>
        ))}
        <CategoryFAQ question={categoryFAQ} />
      </div>
    </div>
  );
};

export default CompanySection;
