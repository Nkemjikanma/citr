import { renderToPipeableStream } from "react-dom/server"; // runs our application into nodestream
import { StaticRouter } from "react-router-dom/server"; // react router that can be run in node
import App from "./App";

const render = (url, opts) => {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts
  );

  return stream;
};

export default render;
