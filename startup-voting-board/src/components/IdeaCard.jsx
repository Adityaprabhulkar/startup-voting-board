import React from "react";
import VoteButtons from "./VoteButtons";

export default function IdeaCard({ idea }) {
    return (
        <article className="idea-card">
            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
            <small>{idea.category}</small>
            <VoteButtons ideaId={idea.id} />
        </article>
    );
}

