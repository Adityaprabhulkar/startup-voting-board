import React from "react";
import VoteButtons from "./VoteButtons";

const IdeaCard = ({ idea }) => {
    return (
        <div className="p-5 m-5 bg-[#e8def7] border border-gray-300 overflow-hidden rounded-lg shadow">
            <img src={idea.avatar}
            alt= {idea.title}
            className="w-[150px] rounded-full object-cover" />

            <h3 className="  mt-4 text-lg font-semibold 
                border border-gray-300 bg-white 
                px-3 py-1 rounded-md shadow-sm
                w-full max-w-md">{idea.title}</h3>

            <p  className="
                text-sm text-gray-700 
                border border-gray-300 bg-white 
                px-3 py-1 rounded-md shadow-sm 
                mt-0.5
                w-full max-w-md
                ">{idea.description}</p>


  

            <VoteButtons ideaId={idea.id}/>
        </div>
    );
};



export default IdeaCard;

