import React, { useEffect, useRef, useState } from "react";
import TopicSelectionSection from "../topic-selection-section/TopicSelectionSection";
import CompanyContentSection from "../company-content-section/CompanyContentSection";
import { AiOutlineArrowRight } from "react-icons/ai";

const CompanySection = ({
  companyPageData,
  companyReviewData,
  companyFaqData,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyHeaderRef = useRef(null);

  const phoneNumber = companyPageData?.Hero_Section?.Phone_number

  useEffect(() => {
    const handleScroll = () => {
      if (stickyHeaderRef.current) {
        const offsetTop = stickyHeaderRef.current.getBoundingClientRect().top;
        setIsSticky(offsetTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={stickyHeaderRef}>
      <div
        className={`${
          isSticky
            ? "hidden sticky  bg-[#F8F8F8] top-0  justify-center items-center p-8 gap-20 z-10 mdcustom:flex "
            : "hidden"
        }`}
      >
        <div className="flex justify-center items-center gap-2">
          <svg
            width="23"
            height="31"
            viewBox="0 0 23 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6958 20.403C20.2144 19.6122 19.4548 19.0558 18.5555 18.8376C17.6561 18.6194 16.7268 18.7637 15.936 19.2439L14.4502 20.149C13.9965 20.4249 13.4251 20.3661 13.0591 20.0059C11.8758 18.8387 10.838 17.5296 9.97559 16.1131C9.11207 14.6943 8.42517 13.1692 7.93337 11.5795C7.7856 11.1016 8.00264 10.5579 8.44826 10.2854L9.93403 9.38148C11.5653 8.38865 12.0848 6.25408 11.0908 4.62284L9.291 1.66514C8.8096 0.874347 8.04997 0.317903 7.15066 0.0997122C6.25019 -0.119633 5.32085 0.0258273 4.53121 0.507232L1.66472 2.2516C0.622248 2.8854 0 3.98559 0 5.19545C0 8.77886 0.706523 14.2059 4.05904 19.7138C5.57137 22.1993 9.00816 26.8367 15.0332 29.9607C15.5562 30.232 16.1196 30.367 16.6772 30.367C17.3006 30.367 17.9182 30.1985 18.4689 29.8637L21.3365 28.1182C22.1273 27.6368 22.6826 26.8772 22.9008 25.979C23.119 25.0797 22.9747 24.1503 22.4933 23.3595L20.6935 20.4018L20.6958 20.403Z"
              fill="#4158DD"
            />
          </svg>
          <span className="text-[#0A1E93] text-xl font-semibold text-center">
          Contactar ahora a un asesor
          </span>
        </div>
       {phoneNumber ? (
         <a
         href="tel:6503423643"
         className="text-[#4158DD] text-2xl font-bold underline"
       >
         {phoneNumber}
       </a>
       ):(
        <div className="ml-40"></div>
       )}
        <a
          href="/"
          className="flex justify-center items-center gap-4 bg-[#4158DD] rounded-lg text-white px-6 py-3 font-semibold"
        >
          Get started <AiOutlineArrowRight className="text-2xl" />
        </a>
      </div>

      <div className="flex flex-col gap-5 mx-8 my-14 sm:mx-14 md:mx-20 base:mr-44 lg:mr-56 mdcustom:flex-row md:gap-20 base:mx-28 lg:ml-28">
        <TopicSelectionSection data={companyPageData} />
        <CompanyContentSection
          companyPageData={companyPageData}
          companyReviewData={companyReviewData}
          companyFaqData={companyFaqData}
        />
      </div>
    </div>
  );
};

export default CompanySection;
