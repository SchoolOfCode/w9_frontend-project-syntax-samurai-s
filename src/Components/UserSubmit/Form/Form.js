import "./Form.modules.css";
import SubmitLogo from "../../SubmitLogo/SubmitLogo";
import React from 'react';
import axios from 'axios';

function Form() {

  const [formValue, setformValue] = React.useState({
    title: '',
    description: '',
    video: '',
    codesyntax: '',
    docs: ''
  });

  const handleSubmit = async(e) => {
e.preventDefault();
    // const form_data = new FormData();
    // form_data.append("title", formValue.title);
    // form_data.append("description", formValue.description);
    // form_data.append("video", formValue.video);
    // form_data.append("codesyntax", formValue.codesyntax);
    // form_data.append("docs", formValue.docs);

    // make axios post request
    const Response = await axios.post(
      '<http:/localhost:3000/snippets>', { 
        title: formValue.title,
        description: formValue.description,
        video: formValue.video,
      codesyntax: formValue.video,
      docs: formValue.docs
      });
  
      let data = Response.data.data;
      console.log(data);
    };
  


  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit} id="submit-form">
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
           value={formValue.title}
           onChange={handleChange}
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
            value={formValue.codesyntax}
            onChange={handleChange}
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
            value={formValue.description}
            onChange={handleChange}
          />
        </label>
        <label className="form-labels" id="submit-video">
          Youtube Link:
          <input
          className="input-box"
          type="text"
          name="youtube-link"
          value={formValue.video}
          onChange={handleChange}
          />
        </label>
        <label className="form-labels" id="submit-docs">
          Docs Link:
          <input
          className="input-box"
          type="text"
          name="docs-link"
          value={formValue.docs}
          onChange={handleChange}

          />
        </label>
        <input id="submit-button" type="submit" value="Submit Snippet" />
      </div>
    </form>
  );
}

export default Form;
