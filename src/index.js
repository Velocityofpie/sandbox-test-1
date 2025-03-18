import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import CSS (with correct path to your Tailwind file)
import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
