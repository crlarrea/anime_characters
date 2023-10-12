import react, { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Home = () => {
  const [animeData, setAnimeData] = useState({ data: [], links: [], meta: [] });
  const getAnimeData = async (url = "https://kitsu.io/api/edge/characters") => {
    try {
      const data = await fetch(url, {
        method: "GET",
      });
      const payload = await data.json();
      setAnimeData({
        data: [...animeData.data, ...payload.data],
        meta: payload.meta,
        links: payload.links,
      });
      console.log(animeData);
    } catch (error) {
      console.log(error);
    }
  };
  const [bottomPage, setBottomPage] = useState(false);

  useEffect(() => {
    getAnimeData();
    setBottomPage(true);
  }, []);

  useEffect(() => {
    bottomPage && getAnimeData(animeData.links.next);
  }, [bottomPage]);
  {
    window.addEventListener("scroll", () => {
      setBottomPage(
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight
      );
    });
  }

  return (
    animeData.data.length > 1 && (
      <section className="card-wrapper">
        {animeData.data.map((entry) => {
          return <Card props={entry} key={`character-${entry.id}`} />;
        })}
      </section>
    )
  );
};
