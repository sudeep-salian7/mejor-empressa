import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import HeroSection from "../components/ranking/hero-section/HeroSection";
import CompanySection from "../components/ranking/company-section/CompanySection";
import {Helmet} from 'react-helmet';

const NewRanking = () => {
  const [loading, setLoading] = useState(false);
  const [heroSectionData, setHeroSectionData] = useState([]);
  // const [articleSectionData, setArticleSectionData] = useState([]);
  const [rankingData, setRankingData] = useState([]);
  const [pageTitle, setPageTitle] = useState("Mejor Empresa");
  const [pageKeywords, setPageKeywords] = useState(
    "React, JavaScript, Web Development, Keywords"
  );
  const [pageDescription, setPageDescription] = useState(
    "Mejor Empresa site is created using React JS and Strapi"
  );

  let { service } = useParams();
  let serviceName = service?.split("-")?.join(" ");

  const apiCall = async () => {
    setLoading(true);

    //API call for company category
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
      console.log('meta check-->',dataOne?.data)
      setPageTitle(dataOne?.data?.[0]?.attributes?.seo?.metaTitle)
      setPageKeywords(dataOne?.data?.[0]?.attributes?.seo?.keywords)
      setPageDescription(dataOne?.data?.[0]?.attributes?.seo?.metaDescription)
      
    //API call to show the articles under the ranking page based on the company category.

    // const articleSectionApiResponse = await fetch(
    //   `${process.env.REACT_APP_STRAPI_API_URL}/api/blog-pages?populate=Blog_title,Image&filters[Blog_category][Title][$eqi]=${serviceName}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
    //     },
    //   }
    // );
    // const dataThree = await articleSectionApiResponse.json();
    // setArticleSectionData(dataThree?.data);

    // API call for all the required data present in the ranking page.

    const rankingPageData = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/ranking-lists?populate[Company_name][populate]=logo,Hero_Section&populate[Company_category][populate]=*&filters[Company_category][Category_name][$eqi]=${serviceName}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    const rankingPageApiData = await rankingPageData.json();
    setRankingData(rankingPageApiData?.data);
    setLoading(false);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="">
      <Helmet>
            <title>{pageTitle}</title>
            <meta name="keywords" content={pageKeywords} />
            <meta name="description" content={pageDescription} />
       </Helmet>
      {!loading ? (
        <>
          <HeroSection data={heroSectionData} />
          <CompanySection data={heroSectionData} companyDetails={rankingData} />
        </>
      ) : (
        <div className="flex justify-center align-middle items-center min-h-screen">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default NewRanking;
