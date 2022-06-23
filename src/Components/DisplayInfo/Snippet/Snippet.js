import "./Snippet.modules.css";


function SnippetBlock({ syntax }) {
  return (
    <div id="snippet-container">
      <h2 id="snippet-title">Code Snippet:</h2>
      <div id="snippet-box">
        <pre class="prettyprint">
          {syntax}
        </pre>
      </div>
    </div>
  );
}

export default SnippetBlock;
