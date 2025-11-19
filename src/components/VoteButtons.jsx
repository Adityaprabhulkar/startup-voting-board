import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";

const VoteButtons = ({ ideaId }) => {
  const { votes, upvote, downvote, userVotes } = useContext(VoteContext);
  const userVote = userVotes[ideaId];

  return (
    <div className="flex flex-col items-start">

  
     <p
      className="
        m-2 mt-1 text-xs font-semibold
        bg-[#f3e8ff] dark:bg-[#3b2368]
        text-[#4b0082] dark:text-purple-200
        border border-[#c9a7ff] dark:border-[#5b3ea8]
        px-3 py-[2px] rounded-full shadow
      "
    >
      Votes: {votes[ideaId] ?? 0}
    </p>

 
      <button
        disabled={userVote === "up"}
        className={`
           px-3 py-1.5 rounded-xl font-semibold text-white 
            transition-all duration-300 active:scale-95
          ${
            userVote === "up"
              ? "bg-green-400 dark:bg-green-900 cursor-not-allowed shadow-none"
              : "bg-green-500 dark:bg-green-900 hover:scale-105 hover:shadow-lg"
          }
        `}
        onClick={() => upvote(ideaId)}
      >
        {userVote === "up" ? "Upvoted" : "Upvote"}
      </button>


      <button
            disabled={userVote === "down"}
            className={`
              px-3 py-1.5 rounded-xl font-semibold text-white
              transition-all duration-300 active:scale-95
              ${
                userVote === "down"
                  ? "bg-gradient-to-r from-red-300 to-red-400 dark:from-red-800 dark:to-red-900 cursor-not-allowed shadow-none"
                  : "bg-gradient-to-r from-red-500 to-red-700 dark:from-red-900 dark:to-red-700 hover:shadow-xl hover:scale-105"
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
