import React,{ useContext } from "react";
import { VoteContext } from "../context/VoteContext";


const VoteButtons = ({ ideaId }) => {
    const {votes, upvote, downvote}= useContext(VoteContext);

    return (
        <div className="flex flex-col gap-5 items-start" >
            <p className="text-sm font-semibold">Votes: {votes[ideaId] ?? 0}</p>
            <button className="bg-[#17a105] text-white px-6 py-2 rounded-2xl transition-all duration-300 hover:shadow-x2" onClick={() => upvote(ideaId)}>Upvote</button>
            
            <button  className="bg-[#c84e4e] text-white px-6 py-2 rounded-2xl transition-all duration-300 hover:shadow-x2" onClick={() => downvote(ideaId)}>Downvote</button>
        </div>
        
    );
};


export default VoteButtons