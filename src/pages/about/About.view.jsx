import React, {useEffect, useState} from "react";
import './About.style.scss';
import VideoPlayer from "../../components/videoPlayer/VideoPlayer.view";
import GreenSvg from "../../assets/svg.png";
import FooterView from "../../layout/footer/Footer.view.jsx";
import VideoPlayerPhone from "../../components/videoPlayerPhone/VideoPlayerPhone.view";
import { useTranslation } from 'react-i18next'



const AboutView = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const videoId = 'SwVu0By1Zuc';
	const { t } = useTranslation('translation', {
		keyPrefix: 'about',
	})

    return (
        <>
            <div className="about">
                <div className="about__video">
                    {windowWidth < 768 ? (
                        <VideoPlayerPhone videoId={videoId} />
                    ) : (
                        <VideoPlayer videoId={videoId} />
                    )}
                </div>
                <div className="about_blog">
                    <div style={{ marginTop: 0 }} className="about__title">
                        <h2>{t("title")}</h2>
                    </div>
                    <ul>
                        <li className="about_blog__text">
                            {t("text1")}
                        </li>
                        <li className="about_blog__text">
                            {t("text2")}
                        </li>
                        <li className="about_blog__text">
                            {t("text3")}
                        </li>
                    </ul>
                </div>
                <img src={GreenSvg} alt="" className="frameRotate" />
                <FooterView greenBackground/>
            </div>

        </>
    );
};

export default AboutView;
