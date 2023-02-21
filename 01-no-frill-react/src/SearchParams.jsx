import { useState, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
import AdoptedPetContext from "./AdoptedPetContext";
import { UseRef } from "./UseRef";
const ANIMALS = ["birds", "dogs", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal); // passes animal to customHook and gets breeds
  const [adoptedPet, _] = useContext(AdoptedPetContext); // we are getting adopted pet and ignoring the set

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
    <div className="my-0 mx-auto w-11/12 ">
      <form
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleForm(e);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            placeholder="Location"
            name="location"
            className="search-input"
          />
        </label>

        <label htmlFor="animal">
          {/* the bit remails controlled by react so we can watch the changes based on the list */}
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="Animal"
            className="mb-5 block w-60"
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
            className="search-input grayed-out-disable"
          >
            <option />
            {breeds.map((breedd) => (
              <option key={breedd}>{breedd}</option>
            ))}
          </select>
        </label>
        <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
          Submit
        </button>
      </form>
      <Results pets={pets} />
      <div>
        <UseRef />
      </div>
    </div>
  );
};

export default SearchParams;
