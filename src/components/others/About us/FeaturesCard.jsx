
const FeaturesCard = ( { feature } ) => {
    
  return (
  <div className="flex items-center gap-4 w-full py-6 px-6 bg-white rounded-lg shadow-md">
    <div className="flex flex-col flex-1 gap-1 xxlg:gap-2">
    <div className="text-[#23155B] text-lg md:text-xl lg:text-lg font-bold  flex items-center gap-3 xxlg:text-2xl">
        <svg
          width="24"
          height="24"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#0A1E93" />
          <path
            d="M18 7L9.42857 17L6 13"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {feature?.attributes?.Title}
      </div>
      
      <div className="ml-9 xxlg:text-xl">
        {feature?.attributes?.Description}
      </div>
    </div>
  </div>
  )
}

export default FeaturesCard;