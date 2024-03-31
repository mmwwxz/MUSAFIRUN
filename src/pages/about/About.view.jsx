import React from "react";
import './About.style.scss';
import VideoPlayer from "../../components/videoPlayer/VideoPlayer.view";
import GreenSvg from "../../assets/svg.png";



const AboutView = () => {

    const videoId = 'SwVu0By1Zuc';

    return (
        <>
            <div className="about">
                <div className="about__video">
                    <VideoPlayer videoId={videoId}/>
                </div>
            </div>

        </>
    );
};

export default AboutView;
