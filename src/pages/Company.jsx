import React, { useState, useEffect } from "react";
import HeroSection from "../components/company/hero-section/HeroSection";
import Loader from "../components/common/Loader";
import CompanySection from "../components/company/company-section/ComapnySection";
import { useParams } from "react-router-dom";
import {Helmet} from 'react-helmet';

const Company = () => {
  const [loading, setLoading] = useState(false);
  const [companyPageData, setCompanyPageData] = useState([]);
  const [companyReviewData, setCompanyReviewData] = useState([]);
  const [companyFaqData, setCompanyFaqData] = useState([]);
  const [pageTitle, setPageTitle] = useState("Mejor Empresa");
  const [pageKeywords, setPageKeywords] = useState("React, JavaScript, Web Development, Keywords")
  const [pageDescription, setPageDescription] = useState(
    "Mejor Empresa site is created using React JS and Strapi"
  );

  let { company } = useParams();
  
  const apiCall = async () => {
    setLoading(true);

    const companyPageApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/company-lists?populate[Hero_Section][populate]=Author_name&populate=logo&filters[Redirect_link][$eqi]=${company}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    const dataOne = await companyPageApiResponse.json();
   
    setCompanyPageData(dataOne?.data?.[0]?.attributes);
    setPageTitle(dataOne?.data?.[0]?.attributes?.seo?.metaTitle)
    setPageKeywords(dataOne?.data?.[0]?.attributes?.seo?.keywords)
    setPageDescription(dataOne?.data?.[0]?.attributes?.seo?.metaDescription)

    const companyFaqApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/company-faqs?populate=*&filters[Company_Name][Redirect_link][$eqi]=${company}`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    const dataFaq = await companyFaqApiResponse.json();
    setCompanyFaqData(dataFaq)

    const companyReviewApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/company-reviews?populate=*&filters[Company_Category][Redirect_link][$eqi]=${company}&sort=Rating:desc`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );
    const dataTwo = await companyReviewApiResponse.json();
    setCompanyReviewData(dataTwo?.data);
    setLoading(false);
  };

  useEffect(() => {
    apiCall();
    window.scrollTo(0, 0);
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
          <HeroSection data={companyPageData} />
          <CompanySection
            companyPageData={companyPageData}
            companyReviewData={companyReviewData}
            companyFaqData={companyFaqData}
          />
        </>
      ) : (
        <div className="flex justify-center align-middle items-center min-h-screen">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Company;
