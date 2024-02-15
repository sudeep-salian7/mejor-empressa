import React from "react";
import FrequentlyAskedQuestionsCard from "./FrequentlyAskedQuestionsCard"

const FrequentlyAskedQuestions = ( { questions } ) =>{

    return( 
        <div className="flex flex-col py-6">
          <div id="faq" className="flex justify-center items-center mt-5 text-2xl md:text-3xl font-semibold text-black">
             Preguntas frecuentes     
        </div>
            <div className="mt-10 gap-8">
            {questions?.data?.map((item,index) => (
                <div className="mb-4" key={index}>
                    <FrequentlyAskedQuestionsCard question={item} key={index} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestions;

