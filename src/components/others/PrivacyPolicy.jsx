import React , { useEffect , useState } from "react";
import Loader from "../common/Loader";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {Helmet} from 'react-helmet';
import "../../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
    const [loading, setLoading] = useState(false);
    const [pageData , setPageData] = useState([]);
    const [pageTitle, setPageTitle] = useState("Mejor Empresa");
    const [pageKeywords, setPageKeywords] = useState("React, JavaScript, Web Development, Keywords")
    const [pageDescription, setPageDescription] = useState(
      "Mejor Empresa site is created using React JS and Strapi"
    );
    
    const apiCall = async () => {
        setLoading(true);
    
        const PageApiResponse = await fetch(
          `${process.env.REACT_APP_STRAPI_API_URL}/api/pages?populate=seo`,
          {
            method: "GET",
            headers: {
              Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
            },
          }
        );
  
        const dataOne = await PageApiResponse.json();

        setPageTitle(dataOne?.data?.[1]?.attributes?.seo?.metaTitle)
        setPageKeywords(dataOne?.data?.[1]?.attributes?.seo?.keywords)
        setPageDescription(dataOne?.data?.[1]?.attributes?.seo?.metaDescription)

        setPageData(dataOne?.data?.[1]?.attributes);
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
                  <div className="bg-ranking-page bg-cover flex flex-col justify-center items-center py-20">
                    <div className="flex flex-col align-middle w-auto px-3 sm:px-0 sm:w-4/5 md:w-3/4 lg:w-2/4 text-white text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-10 tracking-wide">
                        {pageData.Title}
                      </div>
                    </div>
                  </div>
                <div className="px-4 sm:px-12 md:px-32 py-10">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{pageData.Content}</ReactMarkdown>
                </div>      
              </>
                ) : (
                <div className="flex justify-center align-middle items-center min-h-screen">
                <Loader />
                </div>
            )}
        </>
    )
}

export default PrivacyPolicy;