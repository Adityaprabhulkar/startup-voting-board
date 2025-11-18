import React,{ useContext } from "react";
import { VoteContext } from "../context/VoteContext";


const VoteButtons = ({ ideaId }) => {
    const {votes, upvote, downvote, userVotes}= useContext(VoteContext);

    const userVote = userVotes[ideaId];

    return (
        <div className="flex flex-col gap-5 items-start" >
            <p
             className="mt-2 text-xs font-semibold 
            bg-pink-100 text-pink-600 border border-pink-300
            px-3 py-[2px] rounded-full
            shadow-[0_0_8px_rgba(236,72,153,0.6)]
            drop-shadow-[0_0_4px_rgba(236,72,153,0.5)]"
            >
                Votes: {votes[ideaId] ?? 0}
            </p>

       <button
            disabled={userVote === "up"}   // Disable only if already upvoted
            className={`px-4 py-2 rounded-lg font-semibold text-white 
            transition-transform duration-200 hover:scale-105
            ${userVote === "up" ? "bg-green-300 cursor-not-allowed" : "bg-green-500 cursor-pointer"}
        `}
        onClick={() => upvote(ideaId)}
      >
        {userVote === "up" ? "Upvoted" : "Upvote"}
      </button>
            
            {/* DOWNVOTE BUTTON */}
      <button
            disabled={userVote === "down"}  // Disable only if already downvoted
            className={`px-4 py-2 rounded-lg font-semibold text-white 
            transition-transform duration-200 hover:scale-105
            ${userVote === "down" ? "bg-red-300 cursor-not-allowed" : "bg-red-500 cursor-pointer"}
        `}
        onClick={() => downvote(ideaId)}
      >
        {userVote === "down" ? "Downvoted" : "Downvote"}
      </button>
    </div>
        
    );
};


export default VoteButtons