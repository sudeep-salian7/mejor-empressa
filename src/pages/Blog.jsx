import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import HeroSection from "../components/blog/hero-section/HeroSection";
import BlogSection from "../components/blog/blog-section/BlogSection";
import ArticleSection from "../components/blog/article-section/ArticleSection";
import {Helmet} from 'react-helmet';

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [blogPageData, setBlogPageData] = useState([]);
  const [articleSectionData, setArticleSectionData] = useState([]);
  const [pageTitle, setPageTitle] = useState("Mejor Empresa");
  const [pageKeywords, setPageKeywords] = useState("React, JavaScript, Web Development, Keywords")
  const [pageDescription, setPageDescription] = useState(
    "Mejor Empresa site is created using React JS and Strapi"
  );

  let { blog , category } = useParams();
  let categoryName = category?.split("-")?.join(" ");
  let blogName= blog?.split("-")?.join(" ");
  const apiCall = async () => {
    setLoading(true);
    const blogSectionApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/blog-pages?populate=Author.Image,Blog_topics,seo,Blog_category&filters[Blog_title][$eqi]=${blogName}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    const blogData = await blogSectionApiResponse.json();
    setBlogPageData(blogData?.data[0]?.attributes);
    
    setPageTitle(blogData?.data?.[0]?.attributes?.seo?.metaTitle)
    setPageKeywords(blogData?.data?.[0]?.attributes?.seo?.keywords)
    setPageDescription(blogData?.data?.[0]?.attributes?.seo?.metaDescription)
   
    const blogArticleSectionApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/blog-pages?populate=Image,Blog_category&filters[Blog_category][Title][$eqi]=${categoryName}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    const blogArticles = await blogArticleSectionApiResponse.json();
    
    setArticleSectionData(blogArticles?.data)
    setLoading(false);
  };

  useEffect(() => {
    apiCall();
    window.scrollTo(0, 0);
  }, [blog]);


  return (
    <>
      <Helmet>
            <title>{pageTitle}</title>
            <meta name="keywords" content={pageKeywords} />
            <meta name="description" content={pageDescription} />
       </Helmet>
      {!loading ? (
        <>
          <HeroSection data={blogPageData} />
          <BlogSection blogContent={blogPageData?.Blog_content} 
          blogAuthor={blogPageData?.Author?.data?.attributes} 
          blogTopics={blogPageData?.Blog_topics?.data}
          />
          <ArticleSection data={articleSectionData} category={categoryName}/>
          
        </>
      ) : (
        <div className="flex justify-center align-middle items-center min-h-screen">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Blog;




