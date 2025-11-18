import React from "react";
import VoteButtons from "./VoteButtons";

const IdeaCard = ({ idea }) => {
    return (
        <div className=" w-full max-w-3xl mx-auto p-5 m-5 bg-[#e8def7] border border-gray-300 overflow-hidden rounded-lg shadow">
            <img src={idea.avatar}
            alt= {idea.title}
            className="w-[150px] rounded-full object-cover 
            w-30 h-30 rounded-full shadow-md object-cover mb-6" />

            <h3 className="
            text-xl font-bold text-gray-700 drop-shadow
                bg-gray-100 
                rounded-xl 
                p-4 
                shadow-md hover:shadow-lg 
                transition 
                ">{idea.title}</h3>

            <p  className="
                bg-gradient-to-br from-white to-purple-50 
                rounded-xl p-4 
                shadow-lg
                ">{idea.description}</p>


  

            <VoteButtons ideaId={idea.id}/>
        </div>
    );
};



export default IdeaCard;

