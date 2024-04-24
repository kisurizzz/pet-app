import React from "react";

function Pet({ name, image, age, type }) {
  return (
    <div className="pet">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>
        {type} - {age} years old
      </p>
    </div>
  );
}

export default Pet;
