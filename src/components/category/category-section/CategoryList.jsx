import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Link } from "react-router-dom";

const   CategoryList = ({ data }) => {
  
  return (
    <div className="flex-col justify-center items-center  w-full text-white gap-5  mx-0 tablet:mx-4">
      <Link
      to={`/${data?.attributes?.Category_name?.data?.attributes?.Category_name?.toLowerCase()
        .split(" ")
        .join("-")}`}
        >
          <div  className="bg-white h-auto rounded-b-lg shadow-shadowCustom mb-4 tablet:h-cardHeight tablet:min-h-carousel tablet:max-h-carousel">
        <div className="top aspect-video">
          <img
            src={`${process.env.REACT_APP_STRAPI_API_URL}${data?.attributes?.Image?.data?.attributes?.url}`}
            alt="category name"
            className="h-full w-full"
          />
        </div>
        <div className="bottom p-5 pb-24 sm:pb-0 flex flex-col justify-center">
          <h3 className="text-[#0A1E93] text-xl font-semibold">
            {data?.attributes?.Category_name?.data?.attributes?.Category_name}
          </h3>
          <p className="text-[#212427] text-base font-normal bg-white leading-6">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {data?.attributes?.Description}
            </ReactMarkdown>
          </p>
        </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryList;
