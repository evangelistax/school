import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalContex } from "./contexts/contex";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContex>
        <App />
      </GlobalContex>
    </BrowserRouter>
  </StrictMode>,
);
