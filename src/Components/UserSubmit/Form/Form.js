import "./Form.modules.css";

function Form() {
  return (
    <form id="submit-form">
    <div id="styling-container">
      <label className="form-labels" id="submit-title">Title:
      <input type="text" name="title" />
      </label>
      <label className="form-labels" id="submit-snippet">Code Snippet:
      <textarea rows="4" cols="50"  type="text" name="snippet" />
      </label>
      <label className="form-labels" id="submit-description">Description:
      <textarea rows="2" cols="50"  type="text" name="description" />
      </label>
      <label className="form-labels" id="submit-video">Youtube Link:
      <input type="text" name="youtube-link" />
      </label>
      <label className="form-labels" id="submit-docs">Docs Link:
      <input type="text" name="docs-link" />
      </label>
      <input id="submit-button" type="submit" value="Submit Snippet" />
      </div>
    </form>
  );
}

export default Form;
