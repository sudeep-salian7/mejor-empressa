import {LazyLoadImage} from "react-lazy-load-image-component";

const AuthorSection = ({ data }) => {
    return (  
    <div className="flex flex-col items-center md:flex-row gap-8 py-8 border-y-2 border-[#DBD7D7]">
      <LazyLoadImage
        src={`${process.env.REACT_APP_STRAPI_API_URL}${data?.Image?.data?.attributes?.url}`}
        alt={data?.Author_name}
      />
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="text-lg font-semibold tracking-wide text-[#323235]">
          {data?.Author_name}
        </div>
        <div className="text-[#495057]">
          {data?.Description}
        </div>
      </div>
    </div>

    )
}
export default AuthorSection;