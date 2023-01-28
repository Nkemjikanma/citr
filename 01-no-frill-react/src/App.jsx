import React from "react";
import { createRoot } from "react-dom";

import Pet from "./Pet";

// the app creates a div with a child h1 within it. The {} will take whatever attributes we pass to the element being created; like id, className
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="cat" breed="Parrot" />
      <Pet name="Babs" animal="Dog" breed="Mixed" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot() is new with React 18 that has concurrency
root.render(<App />); // react will render the function App which creates elements
