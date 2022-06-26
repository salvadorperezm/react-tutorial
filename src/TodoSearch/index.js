import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      placeholder="Ingresa tu tarea"
      className="userInput"
      value={searchValue}
      onChange={onSearchValueChange}
    ></input>
  );
}

export { TodoSearch };
