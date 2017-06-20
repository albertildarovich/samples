import React from "react";

export default function ListItem({ item }) {
  return (
    <span className='listItem'>
      <strong>{ item.name }</strong>
      {item.imageLink &&
      <img alt='' src={`https://api.got.show${item.imageLink}`} />
      }
    </span>
  );
}
