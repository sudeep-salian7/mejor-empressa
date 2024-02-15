import FeaturesCard from "./FeaturesCard";

const Features = ({ data }) => {
  return (
    <div className="flex flex-col items-center bg-[#F3F7FA] px-4 sm:px-12 md:px-32  py-14 ">
      <div className="text-darkblue text-center text-2xl md:text-3xl font-semibold">
        {data.Company_features_title}
      </div>
      <div className="text-center text-sm md:text-base whitespace-normal sm:whitespace-normal md:whitespace-nowrap lg:whitespace-nowrap xxlg:whitespace-nowrap mt-3">
        {data.Company_features_description}
      </div>
      <div className="grid grid-cols-1 gap-x-4 mt-10 gap-6">
        {data?.Company_features?.data.map((feature, index) => (
          <FeaturesCard key={index} feature={feature} />
        ))}
      </div>
      <div className="text-center font-bold lg:text-2xl md:text-base whitespace-normal sm:whitespace-normal md:whitespace-nowrap lg:whitespace-nowrap xxlg:whitespace-nowrap mt-10">
        {data.Short_description}
      </div>
    </div>
  );
};

export default Features;
