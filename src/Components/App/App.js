import { useState } from "react";
import { useEffect } from "react";
import snippetJSON from "../../db.json";
import Searchbox from "../Searchbox/Searchbox";
import CreateLogo from "../Logo/Logo";
import Title from "../DisplayInfo/Title/Title";
import SnippetBlock from "../DisplayInfo/Snippet/Snippet";
import CommentBlock from "../DisplayInfo/Comments/Comments";
import Links from "../DisplayInfo/Links/Links";
import "./App.css";

function App() {
  const resultClick = (e) => {
    e.preventDefault();
    const leftContainer = document.querySelector("#left");
    const rightContainer = document.querySelector("#right");
    const margin = document.querySelector('#container');
    leftContainer.classList.add("left-container");
    rightContainer.classList.add("right-container");
    margin.classList.remove('margin');

  };

  return (
    <div id="container" className="margin">
      <div id="left">
        <CreateLogo />
        <Searchbox
          placeholder="Enter a search query..."
          data={snippetJSON.snippets}
          resultClick={resultClick}
        />
      </div>
      <div id="right" className="hidden">
        <Title />
        <SnippetBlock />
        <CommentBlock />
        <Links />
      </div>
    </div>
  );
}

export default App;

//
