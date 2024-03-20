import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    const newCategory = category;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo de la APP */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Listado de GIF */}
      {/* Gif Item */}
    </>
  );
}
