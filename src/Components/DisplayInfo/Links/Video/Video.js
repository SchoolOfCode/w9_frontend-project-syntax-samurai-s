import "./Video.modules.css";
import YouTube from 'react-youtube'

function Video({video}) {
  const opts = {
    height: '200',
    width: '100%',
    playerVars: {
      autoplay: 0,
    }
  }
  return (
    <YouTube 
      id="video"
      videoId={video}
      opts={opts}
    ></YouTube>
  );
}


export default Video;

