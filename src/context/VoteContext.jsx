import React, { createContext, useState, useEffect } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [ votes, setVotes ] = useState(() => {
    return JSON.parse(localStorage.getItem("votes")) || {};
  });

   const [userVotes, setUserVotes] = useState(() => {
    return JSON.parse(localStorage.getItem("userVotes")) || {}
  });

  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    fetch("https://6915dcd1465a9144626de9fb.mockapi.io/idea")
      .then((res) => res.json())
      .then((data) => {
        const apiVotes = {};
        data.forEach((idea) => {
          apiVotes[idea.id] = idea.votes || 0;
        });

    setVotes((prev) => ({ ...apiVotes, ...prev }));

    setLoading(false);
      })
      .catch(() => setLoading(false));
    }, []);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  useEffect(() => {
    localStorage.setItem("userVotes", JSON.stringify(userVotes));
  }, [userVotes]);



   const upvote = (id) => {
    const alreadyVoted = userVotes[id];

    if (alreadyVoted === "upvoted") {
      alert("You already upvoted this!");
      return;
    }

     setVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));

     setUserVotes((prev) => ({
      ...prev,
      [id]: "upvoted",
    }));
  };

   const downvote = (id) => {
    const alreadyVoted = userVotes[id];

    if (alreadyVoted === "downvoted") {
      alert("You already downvoted this!");
      return;
    } 

      setVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) - 1,
    }));

    // Update user vote
    setUserVotes((prev) => ({
      ...prev,
      [id]: "downvoted",
    }));
  };

  return (
    <VoteContext.Provider value={{ votes, upvote, downvote, userVotes, loading }}>
      {children}
    </VoteContext.Provider>
  );
};