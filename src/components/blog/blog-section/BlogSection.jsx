import React from "react";
import TopicSelectionSection from "../topic-selection-section/TopicSelectionSection";
import BlogContentSection from "../blog-content-section/BlogContentSection"

const BlogSection = ({ blogContent , blogAuthor , blogTopics }) => {
 
  return (
    <div className="flex gap-20 px-6 md:px-12 base:px-16 lg:px-20 py-12">
      <TopicSelectionSection blogTopics={blogTopics} />
      <BlogContentSection blogContent={blogContent} blogAuthor={blogAuthor} />
    </div>
  );
};

export default BlogSection;
