import React from "react";
import VoteButtons from "./VoteButtons";

const IdeaCard = ({ idea }) => {
    return (
        <div className="idea-card">
            <img src={idea.avatar}
            alt= {idea.title}
            style={{width: "200px", borderRadius: "50%"}}/>

            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
            <p>{idea.category}</p>

            <VoteButtons ideaId={idea.id}/>
        </div>
    );
};



export default IdeaCard;

