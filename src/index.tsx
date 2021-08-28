import { render } from "solid-js/web";

import "./index.css";
import "./assets/tailwind.css";
import App from "./App";

const tags = []; // mutated during render so you can include in server-rendered template later
render(
  () => (
      <App />
  ),
  document.getElementById("root")
);
