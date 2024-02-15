import React, { useEffect, useState } from "react";
import HeroSection from "../components/home/hero-section/HeroSection";
import ArticleSection from "../components/home/article-section/ArticleSection";
import CategorySection from "../components/home/category-section/CategorySection";
import AboutSection from "../components/home/about-section/AboutSection";
import ReviewSection from "../components/home/review-section/ReviewSection";
import CarouselSection from "../components/home/carousel-section/CarouselSection";
import Loader from "../components/common/Loader";
import {Helmet} from 'react-helmet'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [homePageData, setHomePageData] = useState([]);
  const [pageTitle, setPageTitle] = useState("Mejor Empresa");
  const [pageKeywords, setPageKeywords] = useState("React, JavaScript, Web Development, Keywords")
  const [pageDescription, setPageDescription] = useState(
    "Mejor Empresa site is created using React JS and Strapi"
  );

  const apiCall = async () => {
    setLoading(true);

    const heroSectionQuery =
      "populate[Hero_Section][populate]=Services.Logo";

    const latestArticleSectionQuery =
      "populate[Latest_Article_Section][populate]=Latest_Articles.Image,Latest_Articles.Blog_category";

    const categorySectionQuery = "populate[Categories_Section][populate]=*";

    const serviceArticleSectionQuery =
      "populate[Service_Article_Section][populate]=Services.Category_name&populate[Service_Article_Section][populate]=Service_Articles.Image";

    const reviewSectionQuery = "populate[Company_Features_Section][populate]=*";

    const aboutUsSectionQuery = "populate[AboutUs_Section][populate]=*";

    const metaSectionQuery = "populate[seo][populate]=*";

    const response = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/home?${heroSectionQuery}&${latestArticleSectionQuery}&${categorySectionQuery}&${serviceArticleSectionQuery}&${reviewSectionQuery}&${aboutUsSectionQuery}&${metaSectionQuery}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
  
    const data = await response.json();
  
    setLoading(false);
    setHomePageData(data?.data?.attributes);
   
    setPageTitle(data?.data?.attributes?.seo?.metaTitle)
    setPageKeywords(data?.data?.attributes?.seo?.keywords)
    setPageDescription(data?.data?.attributes?.seo?.metaDescription)

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
          <HeroSection data={homePageData?.Hero_Section} />
          <ArticleSection data={homePageData?.Latest_Article_Section} />
          <CategorySection data={homePageData?.Categories_Section} />
          <CarouselSection data={homePageData?.Service_Article_Section} />
          <ReviewSection data={homePageData?.Company_Features_Section} />
          <AboutSection data={homePageData?.AboutUs_Section} />
        </>
      ) : (
        <div className="flex justify-center align-middle items-center min-h-screen">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Home;
