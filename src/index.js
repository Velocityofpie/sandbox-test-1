import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import CSS (make sure this imports your file with Tailwind directives)
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
