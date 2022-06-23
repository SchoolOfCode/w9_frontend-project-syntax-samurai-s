import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import instance from "../../axiosConfig";
import snippetJSON from "../../db.json";
import Navbar from "../Navbar/Navbar";
import Searchbox from "../Searchbox/Searchbox";
import HomeLogo from "../HomeLogo/HomeLogo";
import Title from "../DisplayInfo/Title/Title";
import SnippetBlock from "../DisplayInfo/Snippet/Snippet";
import CommentBlock from "../DisplayInfo/Comments/Comments";
import UserSubmit from "../UserSubmit/UserSubmit";
import Links from "../DisplayInfo/Links/Links";
import BackgroundImage from "../Background/Background";
import "./App.css";

function App() {
  const [snippetResponse, setSnippetResponse] = useState("");
  const [snippetVideo, setSnippetVideo] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("")
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const resultClick = (e) => {
    const clickedResult = e.target.innerText;
    e.preventDefault();
    setSearch(clickedResult);
    getSnippetData(clickedResult);
    setFilteredData([]);
    const leftContainer = document.querySelector("#left");
    const rightContainer = document.querySelector("#right");
    const margin = document.querySelector("#container");
    leftContainer.classList.add("left-container");
    rightContainer.classList.add("right-container");
    margin.classList.remove("margin");
  };

  const setSearch = (clickedResult) => {
    console.log(clickedResult);
    setWordEntered(clickedResult);
  };

  const getSnippetData = (clickedResult) => {
    console.log(clickedResult);
    axios
      .get(`http://localhost:3000/snippets?title=${clickedResult}`)
      .then((response) => {
        const snippet = response.data.data[0];
        const cutSnippet = snippet.codesyntax;
        // if (cutSnippet.charAt(0) === "{")
        console.log(cutSnippet);
        const videoId = snippet.video.slice(32);
        setSnippetResponse(snippet);
        setSnippetVideo(videoId);
      });
  };

  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <div id="container" className="margin">
              <div id="left">
                <HomeLogo />
                <Searchbox
                  placeholder="Enter a search query..."
                  data={snippetJSON.snippets}
                  resultClick={resultClick}
                  filteredData={filteredData}
                  setFilteredData={setFilteredData}
                  setSearch={setSearch}
                  wordEntered={wordEntered}
                  setWordEntered={setWordEntered}
                />
              </div>
              <div id="right" className="hidden">
                <Title title={snippetResponse.title} />
                <SnippetBlock syntax={snippetResponse.codesyntax} />
                <CommentBlock description={snippetResponse.description} />
                <Links video={snippetVideo} docs={snippetResponse.docs} />
              </div>
            </div>
          </Route>
          <Route path="/submit">
            <UserSubmit />
          </Route>
        </Switch>
      </Router>
      <BackgroundImage />
    </div>
  );
}

export default App;

//
