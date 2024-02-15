import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import dropdown from "../../../images/ranking-dropdown.webp";


const TopicSelectionSection = ({ data }) => {
  let sideBarData = data?.Sidebar?.data || [];
  const [selectedOption, setSelectedOption] = useState('Ir directamente a..');

  let { service } = useParams();
  const navigate = useNavigate();

  const redirect = (index) => {
    return sideBarData
      .slice(1, sideBarData.length - 1)
      [index].toLowerCase()
      .split(" ")[0];
  };

  const handleSelectChange = (e) => {
    const selectedSectionvalue = e.target.value;
    setSelectedOption(selectedSectionvalue);

    if(selectedSectionvalue.split(' ')[0] === "FAQs") {
      scrollToSection("faq")
    }else if (e.target.selectedIndex  === 1) {
      navigate(`/${service}`);  
    } else {
      let selectedSectionId = sideBarData.indexOf(selectedSectionvalue)
      scrollToSection(redirect(selectedSectionId-1));
    }
    
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="hidden sticky h-full top-28  font-roboto font-normal mdcustom:block">
      <div className="text-[#495057] w-52 ml-4 font-body text-lg font-bold tracking-wide border-b-2 border-[#D8D8D8] pb-4">
      Ir directamente a
      </div>
      <div className="w-52 ml-4 border-b-2 border-[#D8D8D8] py-4 font-normal text-15 cursor-pointer ">
        <Link to={`/${service}`}>{sideBarData[0]}</Link>
      </div>
      {sideBarData.slice(1, sideBarData.length - 1)?.map((topic, index) => (
        <div
          key={index}
          className="w-52 ml-4 border-b-2 border-[#D8D8D8] py-4 font-normal text-15 cursor-pointer"
        >
          <a href={`#${redirect(index)}`}>{topic}</a>
        </div>
      ))}
      <div className="w-52 ml-4 border-b-2 border-[#D8D8D8] py-4 font-normal text-15 cursor-pointer">
        <a href="#faq">{sideBarData[sideBarData.length - 1]}</a>
      </div>
      <Link
        to={data?.Hero_Section?.Company_url}
        className=" flex gap-5 bg-[#4158DD] text-white text-xl font-bold rounded-md mt-7 -ml-1.5 mr-5 px-6 py-4 font-body"
      >
        Get started
        <span className="">
          <AiOutlineArrowRight className="text-2xl mt-0.5" />
        </span>
      </Link>
    </div>

        {/* mobile view sidebar */}
       
        <div className="drop-down block flex justify-center items-center mdcustom:hidden relative">
        <div className="relative w-full px-5">
        <select
          name=""
          id=""
          placeholder="Jump to..."
          value={selectedOption}
         className="border-2 border-solid border-#e0dbdbe3 font-bold p-3 pl-6 sm:pl-16 pr-10 text-lg text-[#495057] rounded-lg w-full sm:my-0 appearance-none"
          onChange={handleSelectChange}
        >
          <option value="Ir directamente a.." disabled>Ir directamente a..</option>
          {sideBarData.map((data, index) => {
            return (
              <option id={index} value={data} key={index}>
                    {data}   
              </option>
            );
          })}
        </select>
        <div className="absolute inset-y-0 mr-6 right-0 flex items-center pr-3 pointer-events-none">
      <img src={dropdown} alt="dropdown" />
    </div>
        </div>
      </div>
    </>
  );
};

export default TopicSelectionSection;
