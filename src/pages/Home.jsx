import react, { useEffect, useState } from "react";
import { Card } from "../components/card";

export const Home = () => {
  const [animeData, setAnimeData] = useState([]);
  const getAnimeData = async () => {
    const data = await fetch("https://kitsu.io/api/edge/characters", {
      method: "GET",
    });
    const payload = await data.json();
    setAnimeData(payload.data);
  };
  useEffect(() => {
    getAnimeData();
  }, []);

  return(animeData.length > 1 &&
    
    <section className='card-wrapper'>
    {animeData.map((entry) => {
      return <Card props={entry} key={`character-${entry.id}`}/>;
    })}
    
    </section>
    )
};
