import "./Links.modules.css";
import Docs from "./Docs/Docs";
// import Video from "./Video/Video";
import Video from "./Video/Video";


// const embed = "TKPAh3_CtBY&ab_channel=dcode"

function Links({video, docs}) {
  return (
    <div>
      <h2 id="links-title">Links:</h2>
      <div id="links-container">
        <Video video={video} />
        <Docs docs={docs}/>
      </div>
    </div>
  );
}

export default Links;
