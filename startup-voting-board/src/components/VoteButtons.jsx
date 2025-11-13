import React, { useState } from "react";


export default function VoteButtons({ ideaId }) {
    const [votes, setVotes] = useState(0)

    const handleUpvote = () => {
        console.log(`Upvoted idea ${ideaId}`);
        setVotes(votes + 1);
    };

    const handleDownvote = () => {
        console.log(`Downvoted idea ${ideaId}`);
        setVotes(votes - 1);
    };

    return (
        <div className="vote-buttons">
            <button id="up-btn"
            className="button"
             onClick={handleUpvote}>👍Upvote</button>

            <button id="down-btn"
            className="button"
             onClick={handleDownvote}>👎Downvote</button>
            <span>Votes: {votes}</span>
        </div>
    )
}