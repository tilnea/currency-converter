import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import FontStyles from "./assets/fonts/font-styles.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);
