import { createRoot } from "react-dom/client";

import SearchParams from "./SearchParams";

// the app creates a div with a child h1 within it. The {} will take whatever attributes we pass to the element being created; like id, className
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot() is new with React 18 that has concurrency
root.render(<App />); // react will render the function App which creates elements
