import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  function handleToggleSoldOut() {
    fetch(`http://localhost:3000/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ soldOut: !plant.soldOut }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => onUpdatePlant(updatedPlant));
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {plant.soldOut ? (
        <button onClick={handleToggleSoldOut}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleToggleSoldOut}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
