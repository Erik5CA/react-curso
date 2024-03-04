import { useState } from "react";

export function AddCategory({ onAddCategory }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // console.log(inputValue);
    onAddCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar GIF´S"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
