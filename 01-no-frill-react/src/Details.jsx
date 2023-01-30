import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPets from "./fetchPets";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPets); // if no detials/id in your cache, run fetchPets

  //on first load, there wont be anything in cache, so show spinner while getting data
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
