import React from "react";
import Pet from "./Pet"; 

function PetList({ pets }) {
  return (
    <div className="pet-list">
      {/* {pets.map((pet) => (
        <Pet key={pet.name} {...pet} />
      ))} */}
      {pets.map((pet) => (
        <Pet key={pet.name} name={pet.name} age={pet.age} type={pet.type} image={pet.image} />
      ))}
    </div>
  );
}

export default PetList;
