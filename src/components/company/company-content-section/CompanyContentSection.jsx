import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import FrequentlyAskedQuestions from "../frequently-asked-questions/FrequentlyAskedQuestions";
import "../../../styles/BlogContent.css"

const BlogContentSection = ({ companyPageData, companyReviewData, companyFaqData }) => {

  return (
    <div className="w-full">
      <div id="sobre">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {companyPageData?.About_company}
        </ReactMarkdown>
      </div>
      <div id="servicios">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {companyPageData?.Company_services}
        </ReactMarkdown>
      </div>
      <div id="reseñas">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {companyPageData?.Reviews_opinions}
        </ReactMarkdown>
      </div>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {companyPageData?.Other_details}
      </ReactMarkdown>
      <FrequentlyAskedQuestions questions={companyFaqData}/>
    </div>
  );
};

export default BlogContentSection;
