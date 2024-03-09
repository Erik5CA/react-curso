import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";
import { GifItem } from "./GifItem";

export function GifGrid({ category }) {
  const [gifs, setGifs] = useState([]);

  const updateGifs = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
  };
  useEffect(() => {
    updateGifs();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {gifs?.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}
