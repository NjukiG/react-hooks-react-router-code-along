import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */



/* add the NavBar component to our render method */
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);