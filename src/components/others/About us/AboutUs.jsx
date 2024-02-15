import React , { useEffect , useState } from "react";
import Loader from "../../common/Loader";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {Helmet} from 'react-helmet';
import Features from "./Features";
import OurValues from "./OurValues";
import "./About.css"

const AboutUs = () => {
    
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
          `${process.env.REACT_APP_STRAPI_API_URL}/api/about-us?populate=seo,Company_features,Values,Values.Image`,
          {
            method: "GET",
            headers: {
              Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
            },
          }
        );
  
        const data = await PageApiResponse.json();
         
        setPageTitle(data?.data?.attributes?.seo?.metaTitle)
        setPageKeywords(data?.data?.attributes?.seo?.keywords)
        setPageDescription(data?.data?.attributes?.seo?.metaDescription)

        setPageData(data?.data?.attributes);
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
                   <div className="flex flex-col justify-center text-center sm:text-start h-96 w-full px-5 sm:px-6 md:px-20 lg:px-32 text-white  bg-about-page-mobile sm:bg-about-page bg-[52%] bg-cover">
                      <div className="text-38 sm:text-3xl md:text-4xl font-semibold tracking-wide w-full  md:w-3/4 base:w-3/5 lg:w-2/4 mt-20 sm:mt-0">
                        {pageData.Title}
                      </div>
                      <div className="w-full md:w-4/5 base:w-8/12 lg:w-[62%] mt-5 font-thin">
                        {pageData.Description}
                      </div>
                    </div>
                <div className="px-4 sm:px-12 md:px-32 py-10">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{pageData?.Content}</ReactMarkdown>
                  
                </div>     
                <div className="py-10">
                <Features data={pageData}/> 
                </div>
                <div className="px-4 sm:px-12 md:px-32 py-10">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{pageData.Mission_and_vision}</ReactMarkdown>
                </div> 
                <OurValues data={pageData}/>
              </>
                ) : (
                <div className="flex justify-center align-middle items-center min-h-screen">
                <Loader />
                </div>
            )}
        </>
    )
}

export default AboutUs;