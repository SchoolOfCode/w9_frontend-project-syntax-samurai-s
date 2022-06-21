import { useState } from "react";
import { useEffect } from "react";
import snippetJSON from "../../db.json";
import Searchbox from "../Searchbox/Searchbox";
import SearchResults from "../SearchResult/SearchResult";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  function onChange(e) {
    e.preventDefault();
    let searchString = e.target.value;
    searchResults(searchString);
  }

  function searchResults(searchString) {
    // map over JSON data
    snippetJSON.snippets.map((entry) => {
      // if no match found return error/info text
      if (
        entry.title.toLowerCase().includes(searchString.toLowerCase()) === false
      ) {
        return `Your search ${searchString} did not return any results`;
      } else if (
        entry.title.toLowerCase().includes(searchString.toLowerCase()) === true
      ) {
        // set setSearch to title
        return setSearch(entry.title);
        // <p className="search-results">{search}</p>
        // produce a component with title name
      }
    });
  }

  return (
    <div>
      <Searchbox onChange={onChange} />
      <SearchResults search={search} />
    </div>
  );
}

export default App;

// 
