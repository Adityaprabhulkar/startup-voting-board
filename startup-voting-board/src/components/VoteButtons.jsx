import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";

const VoteButtons = ({ ideaId }) => {
  const { votes, upvote, downvote, userVotes } = useContext(VoteContext);
  const userVote = userVotes[ideaId];

  return (
    <div className="flex flex-col gap-3 items-start">
      
      {/* Votes Badge */}
      <p
        className="mt-1 text-xs font-semibold 
        bg-pink-100 text-pink-600 border border-pink-300
        px-3 py-[2px] rounded-full
        shadow-[0_0_8px_rgba(236,72,153,0.6)]
        drop-shadow-[0_0_4px_rgba(236,72,153,0.5)]"
      >
        Votes: {votes[ideaId] ?? 0}
      </p>

      {/* UPVOTE BUTTON */}
      <button
        disabled={userVote === "up"}
        className={`px-3 py-1.5 rounded-xl font-medium text-white 
          transition-all duration-300 shadow-md active:scale-95
          ${
            userVote === "up"
              ? "bg-green-300 cursor-not-allowed shadow-none"
              : "bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 hover:shadow-lg"
          }
        `}
        onClick={() => upvote(ideaId)}
      >
        {userVote === "up" ? "Upvoted" : "Upvote"}
      </button>

      {/* DOWNVOTE BUTTON */}
      <button
        disabled={userVote === "down"}
        className={`px-3 py-1.5 rounded-xl font-medium text-white 
          transition-all duration-300 shadow-md active:scale-95
          ${
            userVote === "down"
              ? "bg-red-300 cursor-not-allowed shadow-none"
              : "bg-gradient-to-r from-pink-500 to-red-600 hover:scale-105 hover:shadow-lg"
          }
        `}
        onClick={() => downvote(ideaId)}
      >
        {userVote === "down" ? "Downvoted" : "Downvote"}
      </button>
    </div>
  );
};

export default VoteButtons;
