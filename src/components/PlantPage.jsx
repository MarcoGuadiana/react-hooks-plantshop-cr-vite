import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]); // all plants
  const [search, setSearch] = useState(""); // search query
  
  useEffect(() => {
    fetch("http://localhost:3000/plants") // adjust backend URL if needed
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }


   function handleUpdatePlant(updatedPlant) {
    setPlants(plants.map((p) => (p.id === updatedPlant.id ? updatedPlant : p)));
  }

const displayedPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <main>
       <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      
      <PlantList plants={displayedPlants} onUpdatePlant={handleUpdatePlant} />
    </main>
  );
}

export default PlantPage;
