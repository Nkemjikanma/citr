import { useState, useContext, lazy } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import fetchPets from "./fetchPets";
import ErrorBoundary from "./ErrorBoundary";
// import Modal from "./Modal";

const Modal = lazy(() => import("./Modal"));

const Details = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate(); // we use this to programatically reroute someone somewere, and here we use it to rout user to homepage
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext); // here, we only care about writing to adopted pet and not reading from it
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
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
      {showModal ? (
        <Modal>
          <div>
            <h1> Would you like to adopt {pet.name}? </h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate("/");
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary
      errorComponent={
        <h2>
          There was an error with the listing click <Link to="/">HERE</Link> to
          go back to the HOMEPAGE
        </h2>
      }
    >
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
