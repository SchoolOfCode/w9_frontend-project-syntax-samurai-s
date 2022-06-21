import "./Searchbox.modules.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function Searchbox({ placeholder, data, onClick }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

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
  }

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
              <a className="dataItem" onClick={onClick}>
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbox;
