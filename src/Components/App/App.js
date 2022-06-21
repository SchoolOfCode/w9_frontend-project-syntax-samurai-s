import { useState } from "react";
import { useEffect } from "react";
import snippetJSON from "../../db.json";
import Searchbox from "../Searchbox/Searchbox";
import "./App.css";

function App() {
  const [searchArray, setSearchArray] = useState([]);

 
  function onClick(e) {
    e.preventDefault();
    console.log('clicked')
  }

 



  return (
    <div id="container">
      <Searchbox placeholder="Enter a search query..." data={snippetJSON.snippets} onClick={onClick} />
    </div>
  );
}

export default App;

//
