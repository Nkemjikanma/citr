import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import SearchParams from "./SearchParams";
import Details from "./Details";

// the app creates a div with a child h1 within it. The {} will take whatever attributes we pass to the element being created; like id, className
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>

      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot() is new with React 18 that has concurrency
root.render(<App />); // react will render the function App which creates elements
