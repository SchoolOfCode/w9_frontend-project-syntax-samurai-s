import "./Form.modules.css";
import SubmitLogo from "../../SubmitLogo/SubmitLogo";

function Form() {
  return (
    <form id="submit-form">
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
          <input className="input-box" type="text" name="youtube-link" />
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
