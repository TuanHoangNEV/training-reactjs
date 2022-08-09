import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoFeed: React.FC<VideoFeedProps> = ({ src }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState<ReturnType<typeof videojs>>();

  useEffect(() => {
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      setPlayer(
        videojs(videoElement, {}, () => {
          console.log("ready");
        })
      );
    }
  }, [videoRef]);

  useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [player]);

  return (
    <div>
      <video className="video-js m-auto" ref={videoRef} controls>
        <source src={src} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

interface VideoFeedProps {
  src: string;
}

export default VideoFeed;
