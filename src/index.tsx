import React from "react";
//@ts-ignore
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const container: any = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<App />);
