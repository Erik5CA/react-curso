import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./HelloWordApp.jsx";
import { FirstApp } from "./FirstApp.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstApp title={123} />
  </React.StrictMode>
);
