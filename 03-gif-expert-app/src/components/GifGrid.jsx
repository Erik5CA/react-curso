import { useFetchGifs } from "../hooks/useFetchGifs.js";

import { GifItem } from "./GifItem";

export function GifGrid({ category }) {
  const { gifs, isLoading } = useFetchGifs(category);

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
