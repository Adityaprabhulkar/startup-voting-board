import React,{ useContext } from "react";
import { VoteContext } from "../context/VoteContext";


const VoteButtons = ({ ideaId }) => {
    const {votes, upvote, downvote}= useContext(VoteContext);

    return (
        <div className="flex flex-col gap-5 items-start" >
            <p className=" mt-2
            text-xs font-semibold 
            bg-pink-100 text-pink-600
            border border-pink-300
            px-3 py-[2px] rounded-full
            shadow-[0_0_8px_rgba(236,72,153,0.6)]
            drop-shadow-[0_0_4px_rgba(236,72,153,0.5)]">Votes: {votes[ideaId] ?? 0}</p>

            <button
             className="
              bg-green-500 text-white font-semibold 
                px-4 py-2 rounded-lg 
                transition-transform duration-200 
                hover:scale-105 cursor-pointer"
                onClick={() => upvote(ideaId)}>Upvote</button>
            
            <button 
            className="
                bg-red-500 text-white font-semibold 
                px-4 py-2 rounded-lg 
                transition-transform duration-200 
                hover:scale-105 cursor-pointer"
                onClick={() => downvote(ideaId)}>Downvote</button>
                    </div>
        
    );
};


export default VoteButtons