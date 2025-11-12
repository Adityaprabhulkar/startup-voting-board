import React from "react";
import IdeaCard from "./IdeaCard";

export default function IdeaList({ ideas}) {
    return (
        <div className="idea-list">
            {ideas.map((idea) => (
                <IdeaCard key={idea.id} idea={idea}/>
            ))}
        </div>
    );
}