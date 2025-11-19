
import React, {useContext} from "react";
import IdeaCard from "./IdeaCard";
import Shimmer from "./Shimmer";
import { VoteContext } from "../context/VoteContext";


const IdeaList = ({ ideas }) => {
  const { loading } = useContext(VoteContext);


    if (loading) {
        return (
            <div className="animate-fadeIn">
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            </div>
        );
    }


  return (
    <div className="idea-list">
      {ideas.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} />
      ))}
    </div>
  );
};

export default IdeaList;