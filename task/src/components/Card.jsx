import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h1 className="card-heading">{props.title}</h1>
        <p className="card-description">{props.description}</p>
        <button onClick={() => alert("hello")}>View Details</button>
      </div>
    </>
  );
};

export default Card;
