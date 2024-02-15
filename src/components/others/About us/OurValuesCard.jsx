import "./About.css"

const OurValuesCard = ({ values }) => {
  return (
    <div className="bg-white rounded-lg px-6 py-8 xxlg:p-12 shadow-card">
      <div className="flex justify-center items-center">
        <img
          src={`${process.env.REACT_APP_STRAPI_API_URL}${values?.attributes?.Image?.data?.attributes?.url}`}
          className="h-9 w-auto object-contain xxlg:h-24 xxlg:w-24  bg-cover "
          alt="Logo of values"
        />
      </div>
      <div className="mt-6 text-center">
        <div className="text-xl font-bold mb-3 xxlg:text-3xl">
          {values?.attributes?.Title}
        </div>
        <div className="text-gray-800 text-base font-thin leading-5 tracking-wider break-words">
          {values?.attributes?.Description}
        </div>
      </div>
    </div>
  );
};

export default OurValuesCard;
