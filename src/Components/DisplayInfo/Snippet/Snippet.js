import "./Snippet.modules.css";

function SnippetBlock({syntax}) {
  return (
    <div id="snippet-container">
      <h2 id="snippet-title">Code Snippet:</h2>
      <div id="snippet-box">
        <p id="snippet">{syntax}</p>
      </div>
    </div>
  );
}

export default SnippetBlock;
