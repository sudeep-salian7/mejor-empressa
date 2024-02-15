import React, {useState} from "react";
import SideBarCard from "./SideBarCard";
import dropdown from "../../../images/ranking-dropdown.webp";

const SideBar = ({ data }) => {
  const sideBarData = data?.Ranking_page_sidebar?.data || [];
  const [selectedOption, setSelectedOption] = useState('Ir a');

  const handleSelectChange = (e) => {
    const selectedSectionvalue = e.target.value;
    
    setSelectedOption(selectedSectionvalue);
    console.log('selected section value-->',selectedSectionvalue)

    if(selectedSectionvalue === "Preguntas frecuentes") {
      scrollToSection("faq")
    }else if (selectedSectionvalue === "Resumen general") {
      scrollToSection("resumen")
      
    } else {
      let selectedSectionId = sideBarData.indexOf(selectedSectionvalue)
      scrollToSection(selectedSectionId-2);
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
      <div className="content-left font-roboto w-52 hidden sticky h-full top-4 mdcustom:block ">
        <div className="text-1.15 text-[#495057] font-body font-bold pb-4 whitespace-nowrap">
          {sideBarData[0]}
        </div>
        <div className="flex flex-col divide-y-2 divide-divider-400 text-black text-base font-normal">
          <a href="#resumen" className="py-4 border-t-2 border-[#e5e7eb]">
            {sideBarData[1]}
          </a>
          {sideBarData?.slice(2, sideBarData.length - 1).map((data, index) => (
            <SideBarCard data={data} key={index} index={index} />
          ))}
          <a href="#faq" className="py-4 ">
            {sideBarData[sideBarData.length - 1]}
          </a>
        </div>
      </div>
      <div className="drop-down block flex justify-center items-center mdcustom:hidden relative">
  <div className="relative w-full px-5">
    <select
      name=""
      id=""
      className="border-2 border-solid border-#e0dbdbe3 font-bold p-3 pl-6 sm:pl-16 pr-10 text-lg text-[#495057] rounded-lg w-full sm:my-0 appearance-none"
      onChange={handleSelectChange}
      value={selectedOption}
    >
      <option value="Ir a" disabled>Ir a..</option>
      {sideBarData.slice(1).map((data, index) => {
        return (
          <option value={data} key={index}>
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

export default SideBar;
