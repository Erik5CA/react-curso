import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";

export function GifGrid({ category }) {
  const [gifs, setGifs] = useState([""]);

  useEffect(() => {
    const updateGifs = async () => {
      const newGifs = await getGifs(category);
      setGifs(newGifs);
    };

    updateGifs();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {gifs?.map((gif) => (
        <div key={gif.id}>
          <h4>{gif.title}</h4>
          <img src={gif.url} alt={gif.title} />
        </div>
      ))}
    </>
  );
}
