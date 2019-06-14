import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

// Define App element
const App = () => {
   return (
      <React.StrictMode>
         <div>
            <header>
               <Link to="/">Adopt Me!</Link>
            </header>
            <Router>
               <SearchParams path="/" />
               <Details path="/details/:id" />
            </Router>
         </div>
      </React.StrictMode>
   );
};

// Render App element into DOM
render(<App />, document.getElementById("root"));
