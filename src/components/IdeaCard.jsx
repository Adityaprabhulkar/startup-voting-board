import React from "react";
import VoteButtons from "./VoteButtons";

const IdeaCard = ({ idea }) => {
  return (
    <div
      className="
      
    w-full max-w-3xl mx-auto p-5 m-5 
    bg-gradient-to-br from-[#e9ecf6] to-[#9aa8d5] 
    dark:bg-gradient-to-br dark:from-[#1e1e2f] dark:to-[#0f0f17]
    border border-gray-300 dark:border-gray-700
    overflow-hidden rounded-2xl shadow-xl
  "
    >
      <img
        src={idea.avatar}
        alt={idea.title}
        className="
          w-[px] h-[150px] rounded-auto object-cover 
          shadow-md mb-9
        "
      />

      <h3
        className="
          text-xl font-bold 
          text-gray-800 dark:text-gray-100
          bg-gray-50 dark:bg-gray-700
          rounded-xl p-4 
          shadow-md hover:shadow-lg transition
        "
      >
        {idea.title}
      </h3>

      <p
        className="
            m-1
          bg-white dark:bg-gray-700
          text-gray-800 dark:text-gray-200
          rounded-xl p-4 shadow-lg mt-3
        "
      >
        {idea.description}
      </p>

      <VoteButtons ideaId={idea.id} />
    </div>
  );
};

export default IdeaCard;
