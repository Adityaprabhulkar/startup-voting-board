import React from "react";
import VoteButtons from "./VoteButtons";

const IdeaCard = ({ idea }) => {
    return (
        <div className="p-5 m-5 bg-[#eae3e3] border border-gray-300 overflow-hidden rounded-lg shadow">
            <img src={idea.avatar}
            alt= {idea.title}
            className="w-[300px] rounded-full object-cover" />

            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
            <p>{idea.category}</p>
  

            <VoteButtons ideaId={idea.id}/>
        </div>
    );
};



export default IdeaCard;

