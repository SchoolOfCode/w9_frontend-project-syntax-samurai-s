import "./Searchbox.modules.css";

function Searchbox({ onChange }) {
  return <input id="searchbox" placeholder="Enter search here..." onChange={onChange}></input>;
}

export default Searchbox;
