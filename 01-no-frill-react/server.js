import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import renderApp from './dist/server/ServerApp.js'


const __dirname = path.dirname(fileURLToPath(import.meta.url)); //__dirname becomes whatever directory our project is in

const PORT = process.env.PORT || 3001;

const html = fs
  .readFileSync(path.resolve(__dirname, "./dist/client/index.html"))
  .toString(); // readout the html file that our project builds

const parts = html.split("not rendered"); // split the html into 2 so that one part is rendered first

const app = express();
app.use(
  "/assets",
  express.static(path.resolve(__dirname, "./dist/client/assets"))
);

app.use((req, res) => {
  res.write(parts[0]); // first part of rendered html
  const stream = renderApp(req.url, {
    onShellReady() {
      stream.pipe(res); // response object and React stream are being connected to each other
    },
    onShellError() {
      // handle errors
    },
    onAllReady() {
      res.write(parts[1]); // when all is done, render the rest
      res.end;
    },
    onError(err) {
      console.error(err);
    },
  });
});

console.log(`Listening on http://localhost:${PORT}`);
app.listen(PORT);
