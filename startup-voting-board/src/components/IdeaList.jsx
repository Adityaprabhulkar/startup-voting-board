import React from "react";
import IdeaCard from "./IdeaCard";


const IdeaList = ({ ideas}) => {
    return (
        <div className="idea-list">
            {ideas.map((idea) => (
                <IdeaCard key={idea.id} idea={idea}/>
            ))}
        </div>
    );
}

export default IdeaList;