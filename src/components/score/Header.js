import React from "react";
export const Header = (props) => {
  const {title, totalPlayer} = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayer}</span>
    </header>
  )
};