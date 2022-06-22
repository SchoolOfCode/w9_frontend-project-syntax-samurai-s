import './Comments.modules.css'

function CommentBlock() {
  return (
    <div id="comment-container">
      <h2 id="comment-title">Comments:</h2>
      <div id="comment-box">
        <p id="comment"></p>
      </div>
    </div>
  );
}

export default CommentBlock;