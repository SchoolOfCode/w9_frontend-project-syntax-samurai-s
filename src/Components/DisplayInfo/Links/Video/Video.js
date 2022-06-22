import "./Video.modules.css";
import PropTypes from "prop-types";

// function Video() {
//   return (
//     <video
//       id="video"
//       src="https://www.youtube.com/watch?v=TKPAh3_CtBY&ab_channel=dcode"
//     ></video>
//   );
// }

// export default Video;

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="450"
        height="200"
        src={"https://www.youtube.com/embed/TKPAh3_CtBY"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/TKPAh3_CtBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}