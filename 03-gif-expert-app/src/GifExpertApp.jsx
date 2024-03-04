import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export function GifExpertApp() {
  const [categories, setCategories] = useState([""]);

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
