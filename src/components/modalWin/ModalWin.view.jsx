import React from "react";
import './ModalWin.style.scss';
import whatsapp from '../../assets/icons/whiteWhatsapp.svg';
import instagram from '../../assets/icons/whiteInsta.svg';
import facebook from '../../assets/icons/whiteFacebook.svg';
import GreenSvg from "../../assets/svg.png";
import {Link} from "react-router-dom";

const ModalWinView = ({ isOpen, onClose }) => {
    const closeModal = () => {
        onClose();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={closeModal} />}
            {isOpen && (
                <>
                    <div className="modal">
                        <img style={{width: '100%'}} src={GreenSvg} alt="" className="rotate"/>
                        <div className="modal_box">
                            <div onClick={closeModal} className="exit">X</div>
                            <h2 className="modal-title">Для подробной информации, напишите нам  на мессенджер </h2>
                            <div className="modal-icons-container">
                                <div className="modal-icon">
                                    <Link to="https://wa.me/">
                                        <img src={whatsapp} alt="" className="modal-icon-img"/>
                                    </Link>
                                    <p className="modal-icon-text">WhatsApp</p>
                                </div>
                                <div className="modal-icon">
                                    <Link to="https://www.instagram.com/">
                                        <img src={instagram} alt="" className="modal-icon-img"/>
                                    </Link>
                                    <p className="modal-icon-text">Instagram</p>
                                </div>
                                <div className="modal-icon">
                                    <Link to="https://www.facebook.com/">
                                        <img src={facebook} alt="" className="modal-icon-img"/>
                                    </Link>
                                    <p className="modal-icon-text">Facebook</p>
                                </div>
                            </div>
                        </div>
                        <img style={{width: '100%'}} className='greenWave' src={GreenSvg} alt=""/>
                    </div>
                </>
            )}
        </>
    );
};

export default ModalWinView;
