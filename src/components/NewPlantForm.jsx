import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = { name, image, price: parseFloat(price), soldOut: false };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then(res => res.json())
      .then(createdPlant => {
        onAddPlant(createdPlant);
        setName("");
        setImage("");
        setPrice("");
      });
  }

  return (
    <form className="add-plant-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Plant name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
