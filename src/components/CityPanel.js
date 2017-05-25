import React from 'react';

export default function CityPanel(props) {
  let input
  return (
    <div>
    <p>Welcome to, {props.city}</p>
    城市：<input ref={node => {
          input = node
        }}  onChange={()=>props.onChange(input.value)}/>
    </div>
  );
}
