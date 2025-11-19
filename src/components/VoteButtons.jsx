import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";


const VoteButtons = ({ ideaId }) => {
  const { votes, upvote, downvote, userVotes } = useContext(VoteContext);
  const userVote = userVotes[ideaId];

  return (
    <div className="flex flex-col items-start">

  
     <p
      className="
        m-2 mt-1 text-xs font-semibold
        bg-[#f5f5f5] dark:bg-[#3b2368]
        text-[#4b0082] dark:text-purple-200
        border border-[#9c87bc] dark:border-[#000000]
        px-3 py-[3px] rounded-full shadow
      "
    >
      Votes: {votes[ideaId] ?? 0}
    </p>

      
      <button
        disabled={userVote === "up"}
        className={`
          flex items-center gap-2
          px-3 py-1.5 rounded-xl font-semibold text-white 
          transition-all duration-300 active:scale-95
          ${
            userVote === "up"
              ? "bg-[#4caf50] opacity-60 cursor-not-allowed"
              : "bg-[#4caf50] hover:scale-105 hover:shadow-lg"
          }
        `}
        onClick={() => upvote(ideaId)}
      >
        {userVote === "up" ? "Upvoted" : "Upvote"}
      </button>


      <button
            disabled={userVote === "down"}
            className={`
              flex items-center gap-2
              mt-2
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
