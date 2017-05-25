import React from "react";

export default function CityPanel(props) {
  let input;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.onClick();
        input.value = "";
      }}
    >
      <p>Welcome to {props.city}</p>
      城市：<input
        ref={node => {
          input = node;
        }}
        onChange={() => props.onChange(input.value)}
      />
      <button type="submit">清空</button>
    </form>
  );
}
