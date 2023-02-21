import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            location={`${pet.city}, ${pet.state}`}
            animal={pet.animal}
            images={pet.images}
            breed={pet.breed}
            name={pet.name}
            key={pet.id}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
