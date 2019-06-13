import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// Define App element
const App = () => {
   return (
      <React.StrictMode>
         <div>
            <h1 id="something-important">Adopt Me!</h1>
            <SearchParams />
         </div>
      </React.StrictMode>
   );
};

// Render App element into DOM
render(<App />, document.getElementById("root"));
