import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["birds", "dogs", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]); // hold list of pets we get from API

  const [breeds] = useBreedList(animal); // passes animal to customHook and gets breeds

  useEffect(() => {
    // we want this to be triggered onlly onSubmit
    requestPets();
  }, []);
  // empty dependency array means run this once and never again
  // not adding the dependency array means it should rerun every rerender

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="Animal"
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
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
            value={breed}
            placeholder="Breed"
            onChange={(e) => setBreed(e.target.value)}
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
