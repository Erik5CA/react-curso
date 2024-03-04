import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./HelloWordApp.jsx";
// import { FirstApp } from "./FirstApp.jsx";
import { CounterApp } from "./CounterApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp title="Hola soy Vegeta" /> */}
    <CounterApp value={1} />
  </React.StrictMode>
);
