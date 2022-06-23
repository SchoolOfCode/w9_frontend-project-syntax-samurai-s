import "./Form.modules.css";

function Form() {
  return (
    <form id="submit-form">
      <label id="submit-title">Title:
      <input type="text" name="title" />
      </label>
      <label id="submit-snippet">Code Snippet:
      <textarea rows="4" cols="50"  type="text" name="snippet" />
      </label>
      <label id="submit-description">Description:
      <textarea rows="2" cols="50"  type="text" name="description" />
      </label>
      <label id="submit-video">Youtube Link:
      <input type="text" name="youtube-link" />
      </label>
      <label id="submit-docs">Docs Link:
      <input type="text" name="docs-link" />
      </label>
      <input id="submit-button" type="submit" value="Submit Snippet" />
    </form>
  );
}

export default Form;
