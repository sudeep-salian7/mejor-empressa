import React from "react";

const CategorySection = ({ data }) => {
  return (
    <div className="flex flex-col items-center bg-blue-50 px-8 md:px-32 py-10 xxlg:px-52">
      <div className="text-darkblue text-center text-2xl md:text-3xl font-semibold xxlg:text-4xl">
        {data?.Title}
      </div>
      <div className="grid grid-cols-1 w-5/5 gap-x-16 sm:grid-cols-2 md:gap-x-16 md:grid-cols-2 lg:gap-x-32 lg:grid-cols-3 xxlg:grid-cols-3 gap-y-8 py-10">
        {data?.Categories?.data.map((category, index) => (
          <div
            key={index}
            className="flex items-center text-darkblue text-lg w-60 border-l-5 border-[#0A1E93] pl-4 font-semibold xxlg:text-xl"
          >
            {category?.attributes?.Category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
