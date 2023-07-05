import React, { useState } from "react";

const SingleItems = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => editItem(item.id)}
        className="single-item"
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        onClick={() => {
          removeItem(item.id);
        }}
        type="button"
      >
        delete
      </button>
    </div>
  );
};

export default SingleItems;
