import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incermented_age":
      return {
        age: state.age + 1,
      };
  }
  throw Error("Unknown action.");
}

const useReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "increment_age" });
        }}
      >
        Increment age
      </button>
      <p>You are {state.age}</p>
    </>
  );
};

export default useReducerComponent;
