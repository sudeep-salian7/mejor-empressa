import CategoryFaqCard from "./CategoryFaqCard";

const CategoryFAQ = ({ question }) => {
  return (
    <div className="gap-14">
      <div
        id="faq"
        className="flex justify-center items-center mt-16 text-2xl md:text-3xl font-semibold text-black"
      >
       Preguntas frecuentes
      </div>
      <div className="mt-10 gap-8">
        {question?.map((item, index) => (
          <div className="mb-4" key={index}>
            <CategoryFaqCard question={item} key={index}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFAQ;
