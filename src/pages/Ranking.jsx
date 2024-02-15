import React, { useState, useEffect } from "react";
import HeroSection from "../components/ranking/hero-section/HeroSection";
import CompanySection from "../components/ranking/company-section/CompanySection";
import ArticleSection from "../components/ranking/article-section/ArticleSection";
import Loader from "../components/common/Loader";
import { useParams } from "react-router-dom";
import {Helmet} from 'react-helmet';

const Ranking = () => {
  const [loading, setLoading] = useState(false);
  const [heroSectionData, setHeroSectionData] = useState([]);
  const [companySectionData, setCompanySectionData] = useState([]);
  const [articleSectionData, setArticleSectionData] = useState([]);
  const [rankingData, setRankingData] = useState([]);
  const [categoryFAQ, setCategoryFAQ] = useState([]);
  const [pageTitle, setPageTitle] = useState("Mejor Empresa");
  const [pageKeywords, setPageKeywords] = useState("React, JavaScript, Web Development, Keywords")
  const [pageDescription, setPageDescription] = useState(
    "Mejor Empresa site is created using React JS and Strapi"
  );

  let { service } = useParams();
  let serviceName = service?.split("-")?.join(" ");
  
  const apiCall = async () => {
    setLoading(true);

    const heroSectionApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/company-categories?populate=Short_description,seo,Long_description&filters[Category_name][$eqi]=${serviceName}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
  
    const dataOne = await heroSectionApiResponse.json();

    setHeroSectionData(dataOne?.data?.[0]?.attributes);

    setPageTitle(dataOne?.data?.[0]?.attributes?.seo?.metaTitle)
    setPageKeywords(dataOne?.data?.[0]?.attributes?.seo?.keywords)
    setPageDescription(dataOne?.data?.[0]?.attributes?.seo?.metaDescription)

    const companySectionApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/company-lists?populate=Company_Categories,Ranking_page_details,logo,Hero_Section&filters[Company_Categories][Category_name][$eqi]=${serviceName}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    const dataTwo = await companySectionApiResponse.json();
    setCompanySectionData(dataTwo?.data);

    //API call to show the articles under the ranking page based on the company category.

    const articleSectionApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/blog-pages?populate=Blog_title,Image&filters[Blog_category][Title][$eqi]=${serviceName}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    const dataThree = await articleSectionApiResponse.json();
    setArticleSectionData(dataThree?.data);
      
    // API call for all the required data present in the ranking page.

    const rankingPageData = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/ranking-lists?populate[Company_name][populate]=logo,Hero_Section&populate[Company_category][populate]=*&filters[Company_category][Category_name][$eqi]=${serviceName}`,
      {
        method: 'GET',
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        }
      }
    )
    const rankingPageApiData = await rankingPageData.json()
    setRankingData(rankingPageApiData?.data)


    // API call for FAQ for each category

    const categoryFAQ = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/category-faqs?populate=*&filters[Company_category][Category_name][$eqi]=${serviceName}`,
      {
        method: "GET" ,
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
      const categoryFaqData= await categoryFAQ.json()
      setCategoryFAQ(categoryFaqData?.data);
    setLoading(false);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <Helmet>
            <title>{pageTitle}</title>
            <meta name="keywords" content={pageKeywords} />
            <meta name="description" content={pageDescription} />
       </Helmet>
      {!loading ? (
        <>
          <HeroSection data={heroSectionData} />
          <CompanySection data={companySectionData} />
          <ArticleSection data={articleSectionData} category={serviceName} />
        </>
      ) : (
        <div className="flex justify-center align-middle items-center min-h-screen">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Ranking;
