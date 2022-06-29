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

  const onSubmit = (e) => {
    e.preventDefault();

    setFormValue({
      title: e.target[0].value,
      description: e.target[2].value,
      video: e.target[3].value,
      codesyntax: e.target[1].value,
      docs: e.target[4].value,
    });
    axios
      .post("http://localhost:3000/snippets", {
        title: formValue.title,
        description: formValue.description,
        video: formValue.video,
        codesyntax: formValue.codesyntax,
        docs: formValue.docs,
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
          <input className="input-box" type="text" name="title" />
        </label>
        <label className="form-labels" id="submit-snippet">
          Code Snippet:
          <textarea
            className="input-box"
            rows="4"
            cols="50"
            type="text"
            name="snippet"
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
          />
        </label>
        <label className="form-labels" id="submit-video">
          Youtube Link:
          <input className="input-box" type="text" name="youtube-link"></input>
        </label>
        <label className="form-labels" id="submit-docs">
          Docs Link:
          <input className="input-box" type="text" name="docs-link" />
        </label>
        <input id="submit-button" type="submit" value="Submit Snippet" />
      </div>
    </form>
  );
}

export default Form;
