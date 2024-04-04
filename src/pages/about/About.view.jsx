import React, {useEffect, useState} from "react";
import './About.style.scss';
import VideoPlayer from "../../components/videoPlayer/VideoPlayer.view";
import GreenSvg from "../../assets/svg.png";
import FooterView from "../../layout/footer/Footer.view.jsx";
import VideoPlayerPhone from "../../components/videoPlayerPhone/VideoPlayerPhone.view";


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
                        <h2>Немного о нас</h2>
                    </div>
                    <ul>
                        <li className="about_blog__text">
                            Компания Мусафирун Трэвел это полностью лицензированная туристическая компания, располагающаяся в столице Кыргызской Республики — городе Бишкек.
                        </li>
                        <li className="about_blog__text">
                            Мы работаем на туристическом рынке Кыргызстана с 2018 года и уже не раз завоевывали награду лучшего тур оператора в стране.
                        </li>
                        <li className="about_blog__text">
                            Фактически, то, что Кыргызстан предлагает сегодняшнему любознательному туристу, представляет собой сочетание разных вещей: кочевой образ жизни, захватывающие дух пейзажи, великолепную природу, древние памятники, вкусные блюда и знаменитое гостеприимство народов Центральной Азии. Мы объединили все это в наших тщательно проработанных  программах, которые, как мы надеемся, будут и дальше привлекать туристов в это нетронутое «массовым туризмом» место.
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
