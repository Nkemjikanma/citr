import { useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["birds", "dogs", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal); // passes animal to customHook and gets breeds

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  const handleForm = (e) => {
    const formData = new FormData(e.target);
    const obj = {
      animal: formData.get("animal") ?? "",
      breed: formData.get("breed") ?? "",
      location: formData.get("location") ?? "",
    };
    setRequestParams(obj);
  };
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleForm(e);
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" name="location" />
        </label>

        <label htmlFor="animal">
          {/* the bit remails controlled by react so we can watch the changes based on the list */}
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="Animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option /> {/** this is to add an empty line to the options list */}
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={!breeds.length}
            name="breed"
            placeholder="Breed"
          >
            <option />
            {breeds.map((breedd) => (
              <option key={breedd}>{breedd}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
