import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import defaultCompanyImage from "../../../images/default-company.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../../styles/RankingPage.css";

const CompanyCard = ({ companyData, index }) => {
  const [openDesc, setOpenDesc] = useState(false);
  const [openResumen, setOpenResumen] = useState(false);
  
  const companyCategory =
    companyData?.attributes?.Company_category?.data?.attributes?.Category_name?.toLowerCase()
      ?.split(" ")
      ?.join("-");
  
  const companyTitle = companyData?.attributes?.Company_name?.data?.attributes?.Redirect_link

  const starRating = () => {
    return Array.from(
      { length: 5 },
      (
        rating = companyData?.attributes?.Company_name?.data?.attributes
          ?.Hero_Section?.Company_rating,
        index
      ) => {
        let number = index + 0.5;

        return (
          <span key={index}>
            {rating >= index + 1 ? (
              <FaStar />
            ) : rating >= number ? (
              <FaStarHalfAlt />
            ) : (
              <AiOutlineStar />
            )}
          </span>
        );
      }
    );
  };
  let image;
  if (
    companyData?.attributes?.Company_name?.data?.attributes?.logo?.data
      ?.attributes?.url === undefined
  ) {
    image = defaultCompanyImage;
  } else {
    image = `${process.env.REACT_APP_STRAPI_API_URL}${companyData?.attributes?.Company_name?.data?.attributes?.logo?.data?.attributes?.url}`;
  }
 
  return (
    <div className="bg-white shadow-ranking rounded-lg mt-12 relative">
      <div className="px-8 pt-4 pb-12">
        <div className="flex flex-col justify-start items-center gap-1 md:gap-5 pt-5 md:flex-row md:pl-20">
          <div className="h-auto w-32">
            <img
              src={image}
              alt="organization logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5 justify-center md:justify-normal">
              <span className="text-[#212427] w-54 text-3xl font-bold capitalize hidden md:block">
                {
                  companyData?.attributes?.Company_name?.data?.attributes
                    ?.Company_name
                }
              </span>
              <div className="flex gap-2 self-start mt-2.5 font-semibold whitespace-nowrap justify-center sm:justify-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5002 0C19.4039 0 25 5.59644 25 12.5002C25 19.4039 19.4039 25 12.5002 25C5.59644 25 0 19.4039 0 12.5002C0 5.59644 5.59644 0 12.5002 0ZM6.66972 10.429L10.8738 14.6331L18.2356 6.47285L20.2282 8.26605L10.9717 18.5271L4.77184 12.3269L6.66972 10.429Z"
                    fill="#4158DD"
                  />
                </svg>
               {companyData?.attributes?.Tagline}
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 md:gap-5 md:flex-row">
              <div className="flex gap-1 text-4xl text-yellow-400 order-2 md:text-2xl">
                {starRating()}
              </div>
              <span className="text-[#1A1B1D] text-4xl -ml-4 font-bold order-2 sm:order-1 md:text-2xl">
                {
                  companyData?.attributes?.Company_name?.data?.attributes
                    ?.Hero_Section?.Company_rating
                }
              </span>
              <Link
                to="/"
                className="text-[#000000] text-xl order-3 whitespace-normal lg:whitespace-nowrap"
              >
                Actualizado al día de hoy
              </Link>
              <hr />
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="">
          <div className="flex flex-col justify-between items-center gap-5 md:gap-10 md:flex-row md:items-start">
            <div className="flex flex-col gap-px">
              {companyData?.attributes?.Debt?(
              <span className="text-[#212427] text-lg font-normal">
                {companyData?.attributes?.Debt_title}
              </span>
              ):(
                <>
                  <span className="text-[#212427] text-center md:text-left text-lg font-normal">
                  Equipo
                  </span>
                  <span className="text-[#0A1E93] text-xl font-bold text-center md:text-start">
                  Asesores profesionales y abogados
                  </span>
                </>
              )}
              <span className="text-[#0A1E93] text-xl font-bold text-center md:text-start">
                {companyData?.attributes?.Debt}
              </span>
            </div>
            <div className="flex flex-col gap-px">
            {companyData?.attributes?.Duration?(
              <span className="text-[#212427] text-lg font-normal">
                {companyData?.attributes?.Duration_title}
              </span>
              ):(
                <>
                    <span className="text-[#212427] text-lg font-normal">
                    Tiempo de procesamiento
                  </span>
                  <span className="text-[#0A1E93] text-xl font-bold text-center md:text-start">
                  Dependerá de su situación
                  </span>
                </>
              )}
              <span className="text-[#0A1E93] text-xl font-bold text-center md:text-start">
                {companyData?.attributes?.Duration}
              </span>
            </div>
            <div className="flex flex-col gap-px">
              <span className="text-[#212427] text-lg font-normal">
                Contactar ahora a un asesor
              </span>
              <a
                href="tel:6503423643"
                className="text-[#0A1E93] text-xl font-bold text-center"
              >
                {
                  companyData?.attributes?.Company_name?.data?.attributes
                    ?.Hero_Section?.Phone_number
                }          
              </a>
            </div>
          </div>
          <div className="flex sm:justify-center text-white mt-4 md:mt-2 md:absolute md:right-8 ml-6 sm:ml-0">
            <Link to={`/`} className="bg-[#4158DD] font-bold text-xl ml-2.5 w-max pl-10 md:pl-6 md:pt-3 md:pb-3 pr-6 py-5 rounded-lg">
              Sitio web 
              <span className="ml-8">
                <ArrowForwardIcon />
              </span>
            </Link>
          </div>
          <div className="mt-12 md:mt-20">
            <div className="flex items-center gap-3">
              <div
                className={`cursor-pointer ${openDesc ? 'rotate-180' : ''}`}
                onClick={() => setOpenDesc(!openDesc)}
              >
                <svg
                  width="23"
                  height="15"
                  viewBox="0 0 23 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6457 14.2082C11.9321 14.1723 12.1983 14.0359 12.4006 13.8214L22.5718 3.21432C22.7019 3.0941 22.8069 2.94734 22.8805 2.7831C22.9541 2.61885 22.9946 2.44061 22.9995 2.2594C23.0044 2.07819 22.9736 1.89787 22.9091 1.72955C22.8446 1.56123 22.7476 1.4085 22.6243 1.28079C22.5009 1.15308 22.3537 1.05312 22.1918 0.987059C22.03 0.920998 21.8568 0.890249 21.6831 0.896719C21.5094 0.903188 21.3388 0.946729 21.1818 1.02466C21.0249 1.1026 20.8849 1.21326 20.7706 1.34982L11.5 11.0177L2.22939 1.34982C2.11507 1.21326 1.97511 1.1026 1.81817 1.02466C1.66122 0.946729 1.49062 0.903188 1.3169 0.896719C1.14318 0.890249 0.970039 0.920998 0.808163 0.987059C0.646287 1.05312 0.499119 1.15308 0.37575 1.28079C0.252381 1.4085 0.155432 1.56123 0.0908914 1.72955C0.0263509 1.89787 -0.00440987 2.07819 0.000509271 2.2594C0.00542841 2.44061 0.0459225 2.61885 0.119491 2.7831C0.193059 2.94734 0.29814 3.0941 0.428239 3.21432L10.5994 13.8214C10.7344 13.9642 10.8987 14.0732 11.08 14.1402C11.2612 14.2071 11.4546 14.2304 11.6457 14.2082Z"
                    fill="#212427"
                  />
                </svg>
              </div>
              <h2 className="text-[#212427] text-lg  font-bold sm:text-xl md:text-2xl">
                {companyData?.attributes?.General_description_title}
              </h2>
            </div>
            {openDesc && (
              <div className="">
                <p className="text-[#495057] text-base pt-3 sm:pl-8">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {companyData?.attributes?.General_description}
                  </ReactMarkdown>
                </p>
              </div>
            )}
          </div>
          <hr className="my-5" />
          <div className="">
            <div className="flex items-center gap-3 mt-5">
              <div
                className={`cursor-pointer ${openResumen ? 'rotate-180' : ''}`}
                onClick={() => setOpenResumen(!openResumen)}
              >
                <svg
                  width="23"
                  height="15"
                  viewBox="0 0 23 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6457 14.2082C11.9321 14.1723 12.1983 14.0359 12.4006 13.8214L22.5718 3.21432C22.7019 3.0941 22.8069 2.94734 22.8805 2.7831C22.9541 2.61885 22.9946 2.44061 22.9995 2.2594C23.0044 2.07819 22.9736 1.89787 22.9091 1.72955C22.8446 1.56123 22.7476 1.4085 22.6243 1.28079C22.5009 1.15308 22.3537 1.05312 22.1918 0.987059C22.03 0.920998 21.8568 0.890249 21.6831 0.896719C21.5094 0.903188 21.3388 0.946729 21.1818 1.02466C21.0249 1.1026 20.8849 1.21326 20.7706 1.34982L11.5 11.0177L2.22939 1.34982C2.11507 1.21326 1.97511 1.1026 1.81817 1.02466C1.66122 0.946729 1.49062 0.903188 1.3169 0.896719C1.14318 0.890249 0.970039 0.920998 0.808163 0.987059C0.646287 1.05312 0.499119 1.15308 0.37575 1.28079C0.252381 1.4085 0.155432 1.56123 0.0908914 1.72955C0.0263509 1.89787 -0.00440987 2.07819 0.000509271 2.2594C0.00542841 2.44061 0.0459225 2.61885 0.119491 2.7831C0.193059 2.94734 0.29814 3.0941 0.428239 3.21432L10.5994 13.8214C10.7344 13.9642 10.8987 14.0732 11.08 14.1402C11.2612 14.2071 11.4546 14.2304 11.6457 14.2082Z"
                    fill="#212427"
                  />
                </svg>
              </div>
              <h2 className="text-[#212427] text-lg font-bold sm:text-xl md:text-2xl">
                {companyData?.attributes?.Summary_title}
              </h2>
            </div>
            {openResumen && (
              <div className="">
                <div className="text-[#495057] text-base pt-3 pl-8 flex gap-8 resumen-text">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {companyData?.attributes?.Summary}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
          <Link
            to={`/${companyCategory}/${companyTitle}`}
            className="text-white  bg-[#4158DD] flex justify-center items-center gap-2 rounded-md p-4 mt-4"
          >
            Leer más <ArrowForwardIcon />
          </Link>
        </div>
      </div>
      <div className="absolute top-7">
        <div className="relative">
          <svg
            width="95"
            height="48"
            viewBox="0 0 95 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H95L84.9771 24L95 48H0V0Z" fill="#4158DD" />
            <path d="M0 24H84.9771L95 48H0V24Z" fill="#3047CB" />
            <path d="M90 0H95L84.9771 24L95 48H90L80 24L90 0Z" fill="#6378F4" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-white text-2xl">
            #{index + 1}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
