import { useState } from "react";
import { useEffect } from "react";
import Searchbox from "./Components/Searchbox/Searchbox";
import SearchResults from "./Components/SearchResult/SearchResult";
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
    jsonFile.map((entry) => {
      // if no match found return error/info text
      if (!entry.title.contains(searchString)) {
        return `Your search ${searchString} did not return any results`;
      } else {
        // set setSearch to title
        setSearch(entry.title);
        // produce a component with title name
        return <p class="search-results">{search}</p>
      }
    });
  }

  return (
    <div>
      <Searchbox onChange={onChange} />
      <SearchResults />
    </div>
  );
}

export default App;
