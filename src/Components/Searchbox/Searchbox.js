/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Searchbox.modules.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

function Searchbox({ placeholder, data, resultClick, filteredData, setFilteredData, setSearch, wordEntered, setWordEntered }) {
  // const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");
  const [isActive, setActive] = useState("false");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const ToggleClass = () => {
    setActive(!isActive);
  };

  // Function to add selected item to favourites
  // const starClick = (e) => {
  //   const star = e.target;

  // };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          id="searchbox"
          type="text"
          value={wordEntered}
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon fontSize="large" />
          ) : (
            <CloseIcon id="clearBtn" fontSize="large" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div className="eachResult">
                <a
                  href="#"
                  className={isActive ? "star-icon" : "star-icon-clicked"}
                  onClick={ToggleClass}
                >
                  <StarIcon fontSize="small" />
                </a>
                <a
                  href="#"
                  key={key}
                  className="dataItem"
                  onClick={resultClick}
                >
                  <p>{value.title}</p>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbox;
