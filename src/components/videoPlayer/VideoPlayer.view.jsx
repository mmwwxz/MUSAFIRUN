import React from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.style.scss';
import GreenSvg from "../../assets/svg.png";

const VideoPlayer = ({ videoId }) => {
    const opts = {
        height: '565',
        maxWidth: '1000',
        width: '100%',
        playerVars: {
            autoplay: 10,
        },
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div className="video-background">
            <img src={GreenSvg} alt="" className="frame" />
            <div className="player-container">
                <YouTube className="player" videoId={videoId} opts={opts} onReady={onReady} />
            </div>
            <img src={GreenSvg} alt="" className="frameRotate" />
        </div>
    );
};

export default VideoPlayer;
