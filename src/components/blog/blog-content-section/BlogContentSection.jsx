import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import AuthorSection from "../author-section/AuthorSection"
import '../../../styles/BlogContent.css'

const BlogContentSection = ({ blogContent , blogAuthor }) => {
  
  const updatedBlogContent=blogContent?.split('/uploads')?.join('https://mempresa.nablasol.net/uploads')
  return (
    <div>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{updatedBlogContent}</ReactMarkdown>
      <AuthorSection data={blogAuthor} />
    </div>
  );
};

export default BlogContentSection;


