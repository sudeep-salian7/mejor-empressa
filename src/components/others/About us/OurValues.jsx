import OurValuesCard from "./OurValuesCard";

const OurValues = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center bg-blue-50 px-4 sm:px-12 md:px-32  py-14 ">
        <div className="text-darkblue text-center text-2xl md:text-3xl font-semibold">
          {data?.Our_values_title}
        </div>
        <div className="text-sm md:text-base whitespace-normal sm:whitespace-normal md:whitespace-nowrap lg:whitespace-nowrap xxlg:whitespace-nowrap mt-5">
          {data?.Our_values_description}
        </div>
        <div className=" grid grid-cols-1 gap-8 w-full base:gap-6 px-4 sm:px-12 sm:grid-cols-2  md:px-0 md:grid-cols-2 mt-16 sm:mt-20 lg:flex-nowrap lg:grid-cols-4 ">
          {data?.Values?.data.map((values, index) => (
            <OurValuesCard key={index} values={values} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurValues;
