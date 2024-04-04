import React from 'react';
import YouTube from 'react-youtube';
import './VideoPlayerPhone.style.scss';
import GreenSvg from "../../assets/svg.png";

const VideoPlayerPhone = ({ videoId }) => {
    const opts = {
        // maxWidth: '300',
        width: 390,
        height: 300,
        playerVars: {
            autoplay: 10,
        },
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div className="video-background_phone">
            <img src={GreenSvg} alt="" className="frame_phone" />
            <div className="player-container_phone">
                <YouTube className="player" videoId={videoId} opts={opts} onReady={onReady} />
            </div>
            <img src={GreenSvg} alt="" className="frameRotate_phone" />
        </div>
    );
};

export default VideoPlayerPhone;
