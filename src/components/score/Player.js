import React from "react";
import {Counter} from "./Counter";

export const Player = (props) => {
  return (
    <div className='player'>
      <span className='player-name'>
        <button onClick={() => props.removePlayer(props.id)} className='remove-player'>X</button>
        {props.name}
      </span>
      <Counter />
    </div>
  )
};