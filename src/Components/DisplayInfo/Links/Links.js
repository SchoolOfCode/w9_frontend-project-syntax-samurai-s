import "./Links.modules.css";
import Docs from "./Docs/Docs";
// import Video from "./Video/Video";
import YoutubeEmbed from "./Video/Video";

// const embed = "TKPAh3_CtBY&ab_channel=dcode"

function Links() {
  return (
    <div>
      <h2 id="links-title">Links:</h2>
      <div id="links-container">
        <YoutubeEmbed />
        <Docs />
      </div>
    </div>
  );
}

export default Links;
