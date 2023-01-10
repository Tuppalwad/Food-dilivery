import React from "react";

function ItemsDetails(props) {
  return (
    <div className="item-details">
      <div className="item-image">
        <img src={props.item.imageUrl} alt={props.item.name} />
      </div>
      <div className="item-description">
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <p>Price: {props.item.price}</p>
      </div>
    </div>
  );
}

export default ItemsDetails;
