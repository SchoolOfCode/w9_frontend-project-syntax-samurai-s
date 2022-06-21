import { useState } from "react";
import { useEffect } from "react";
import snippetJSON from "../../db.json";
import Searchbox from "../Searchbox/Searchbox";
import "./App.css";

function App() {

  const resultClick = (e) => {
    e.preventDefault();
    const leftContainer = document.querySelector('#left');
    const rightContainer = document.querySelector('#right');
    leftContainer.classList.add('left-container');
    rightContainer.classList.add('right-container');
  }

  return (
    <div id="container">
      <div id="left">
        <Searchbox
          placeholder="Enter a search query..."
          data={snippetJSON.snippets}
          resultClick={resultClick}
        />
      </div>
      <div id="right"></div>
    </div>
  );
}

export default App;

//
