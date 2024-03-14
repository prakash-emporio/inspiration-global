import playDefault from "/playDefault.svg";
import Play from "/Play.png";
import ReactPlayer from "react-player/lazy";
import videoThumbnail from "/videothumbnail.png";
import { useState } from "react";

export default function Video({ title, link }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      {!isPlaying && (
        <div className="card-img-overlay">
          <h5 className="card-title video-card-title text-center pt-lg-5">
            {title}
          </h5>
        </div>
      )}
      <ReactPlayer
        url={link}
        className="object-fit-contain"
        light={<img className="third-content-img" src={videoThumbnail} width="100%" alt="Thumbnail" />}
        playIcon={
          <img
            className="img-thumbnail play-btn img-brightness position-absolute"
            src={Play}
            alt="play-button"
          />
        }
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        onPlay={() => setIsPlaying(true)}
      />
    </>
  );
}
