import React, { useEffect, useState } from "react";
import IdeaList from "../components/IdeaList";
import { fetchIdeas } from "../api/startups";
import Loader from "../components/Loader";

export default function HomePage() {
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadIdeas() {
            try {
                setLoading(true);
                const data = await fetchIdeas();
                setIdeas(data);
            } catch (err) {
                console.error("Error:", err);
                setError("Failed to load ideas");
            } finally {
                setLoading(false);
            }
        }
        loadIdeas();
    }, []);

    if(loading) return <Loader/>;
    if(error) return <div>{error}</div>;

    return (
        <section>
            <h2>Startup Ideas</h2>
            <IdeaList ideas={ideas}/>
        </section>
    );
}