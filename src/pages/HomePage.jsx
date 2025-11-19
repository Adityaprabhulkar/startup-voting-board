import React, { useEffect, useState } from "react";
import IdeaList from "../components/IdeaList";
import { fetchIdeas } from "../api/startups";


  const HomePage = () => {
    const [ideas, setIdeas] = useState([]);
  
    useEffect(() =>{
        const loadIdeas =async () => {
            try {
                const data = await fetchIdeas();
                setIdeas(data);
            } catch (error) {
                console.log("Error:", error);
                
            }
        };
        loadIdeas();
        
    }, []);

    return (
        <div>
            <IdeaList ideas={ideas}/>
        </div>
    );
};

export default HomePage;