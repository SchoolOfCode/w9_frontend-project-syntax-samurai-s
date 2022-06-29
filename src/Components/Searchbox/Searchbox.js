import "./Searchbox.modules.css";
import instance from "../../axiosConfig";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function Searchbox({
  placeholder,
  resultClick,
  filteredData,
  setFilteredData,
  setSearch,
  wordEntered,
  setWordEntered,
}) {
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    console.log(searchWord);
    setWordEntered(searchWord);
    axios
      .get(`http://localhost:3000/snippets?title=${searchWord}`)
      .then((response) => {
        console.log(response.data.data);
        setFilteredData(response.data.data);
      });
    const newFilter = filteredData.map((value) => {
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
