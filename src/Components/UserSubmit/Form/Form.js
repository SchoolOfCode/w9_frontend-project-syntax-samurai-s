import "./Form.modules.css";
import SubmitLogo from "../../SubmitLogo/SubmitLogo";
import { useState } from "react";
import axios from "axios";

function Form() {
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    video: "",
    codesyntax: "",
    docs: "",
  });

  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [docs, setDocs] = useState("");

  const onChangeTitle = (e) => {
    const input = e.target.value;
    console.log(input)
    setTitle(input);
  };

  const onChangeSnippet = (e) => {
    const input = e.target.value;
    console.log(input)
    setSnippet(input);
  };

  const onChangeDescription = (e) => {
    const input = e.target.value;
    console.log(input)
    setDescription(input);
  };

  const onChangeVideo = (e) => {
    const input = e.target.value;
    console.log(input)
    setVideo(input);
  };

  const onChangeDocs = (e) => {
    const input = e.target.value;
    console.log(input)
    setDocs(input);
  };

  const onSubmit = (e) => {
    console.log(title, description, video, snippet, docs);
    setFormValue({
      title: title,
      description: description,
      video: video,
      codesyntax: snippet,
      docs: docs,
    });
    axios
      .post("http://localhost:3000/snippets", {
        title: title,
        description: description,
        video: video,
        codesyntax: snippet,
        docs: docs,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <form onSubmit={onSubmit} id="submit-form">
      <div id="styling-container">
        <div id="logo-title-container">
          <SubmitLogo />
          <h1 id="submit-title-master">Submit Your Code Snippet!</h1>
        </div>
        <label className="form-labels" id="submit-title">
          Title:
          <input
            className="input-box"
            type="text"
            name="title"
            onChange={onChangeTitle}
          />
        </label>
        <label className="form-labels" id="submit-snippet">
          Code Snippet:
          <textarea
            className="input-box"
            rows="4"
            cols="50"
            type="text"
            name="snippet"
            onChange={onChangeSnippet}
          />
        </label>
        <label className="form-labels" id="submit-description">
          Description:
          <textarea
            className="input-box"
            rows="2"
            cols="50"
            type="text"
            name="description"
            onChange={onChangeDescription}
          />
        </label>
        <label className="form-labels" id="submit-video">
          Youtube Link:
          <input
            className="input-box"
            type="text"
            name="youtube-link"
            onChange={onChangeVideo}
          ></input>
        </label>
        <label className="form-labels" id="submit-docs">
          Docs Link:
          <input
            className="input-box"
            type="text"
            name="docs-link"
            onChange={onChangeDocs}
          />
        </label>
        <input id="submit-button" type="submit" value="Submit Snippet" />
      </div>
    </form>
  );
}

export default Form;
