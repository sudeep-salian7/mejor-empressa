import React, { useState, useEffect } from "react";
import Loader from "../components/common/Loader";
import HeroSection from "../components/category/hero-section/HeroSection"
import CategorySection from "../components/category/category-section/CategorySection";
import {Helmet} from 'react-helmet';

const NewCategory = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([])
  const [pageTitle, setPageTitle] = useState("Mejor Empresa");
  const [pageKeywords, setPageKeywords] = useState(
    "React, JavaScript, Web Development, Keywords"
  );
  const [pageDescription, setPageDescription] = useState(
    "Mejor Empresa site is created using React JS and Strapi"
  );

  const apiCall = async () => {
    setLoading(true);
    //API call for company category
    const categoryApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/category?populate[Category_lists][populate]=Image&populate[Category_lists][populate]=Category_name.Category_name&populate=seo`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );

    const categoryData = await categoryApiResponse.json();
    setCategory(categoryData?.data?.attributes);

    setPageTitle(categoryData?.data?.attributes?.seo?.metaTitle)
    setPageKeywords(categoryData?.data?.attributes?.seo?.keywords)
    setPageDescription(categoryData?.data?.attributes?.seo?.metaDescription)

    setLoading(false);
  }

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
        <HeroSection category={category}/>
        <CategorySection category={category}/>
      </>
    ) : (
      <div className="flex justify-center align-middle items-center min-h-screen">
        <Loader />
      </div>
    )}
  </div>
  );
};

export default NewCategory;
