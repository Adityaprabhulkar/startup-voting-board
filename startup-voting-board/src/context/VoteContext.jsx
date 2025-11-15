import React, { createContext, useState, useEffect } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  
  const storeVotes = JSON.parse(localStorage.getItem("votes")) || {};
  const [votes, setVotes] = useState({});

  useEffect(() => {
    fetch("https://6915dcd1465a9144626de9fb.mockapi.io/idea")
      .then((res) => res.json())
      .then((data) => {
        const initialVotes = {};
        data.forEach((idea) => {
          initialVotes[idea.id] = idea.votes || 0;
        });
        setVotes(initialVotes);
      });
  }, []);

  useEffect(() => {
    localStoarge.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const upvote = (id) => {
    setVotes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const downvote = (id) => {
    setVotes((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  return (
    <VoteContext.Provider value={{ votes, upvote, downvote }}>
      {children}
    </VoteContext.Provider>
  );
};
