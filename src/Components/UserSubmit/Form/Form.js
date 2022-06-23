import "./Form.modules.css";

function Form() {
  return (
    <form id="submit-form">
      <label id="submit-title">Title:
      <input type="text" name="name" />
      </label>
      <label id="submit-title">Code Snippet:
      <textarea rows="4" cols="50"  type="text" name="name" />
      </label>
      {/* <input type="submit" value="Submit" /> */}
    </form>
  );
}

export default Form;
