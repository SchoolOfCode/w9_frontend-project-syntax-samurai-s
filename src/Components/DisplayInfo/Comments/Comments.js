import './Comments.modules.css'

function CommentBlock({description}) {
  return (
    <div id="comment-container">
      <h2 id="comment-title">Description:</h2>
      <div id="comment-box">
        <p id="comment">{description}</p>
      </div>
    </div>
  );
}

export default CommentBlock;