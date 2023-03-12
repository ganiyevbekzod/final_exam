import "./Footer.css";
import FaceebokIcon from "../../assets/images/facebook_icon.svg"
import InstaIcon from "../../assets/images/insta_icon.svg"
import TelegramIcon from "../../assets/images/telegram_icon.svg"
import YouTubeIcon from "../../assets/images/youtube_icon.svg"
import GooglePlay from "../../assets/images/googlePlay.svg"
import AppStore from "../../assets/images/AppStore.svg"
import { NavLink } from "react-router-dom";
export const Footer = () => {
    return (
        <div>
            <div className="site_footer">
                <div className="container">
                    <p className="footer_title">LOGO</p>
                    <div className="footer_content d-flex align-items-start justify-content-between">
                        <div className="footer_link">
                            <p className="footer_text">Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</p>
                            <p className="footer_text"><strong className="footer_strong">Ish vaqti</strong>: Har kuni 8:00 dan 18:00 gacha</p>
                            <div className="d-flex align-items-center justify-content-between w-50">
                                <NavLink to="/">
                                    <img src={FaceebokIcon} />
                                </NavLink>
                                <NavLink to="/"><img src={InstaIcon} /></NavLink>
                                <NavLink to="/"> <img src={TelegramIcon} /></NavLink>
                                <NavLink to="/"><img src={YouTubeIcon} /></NavLink>
                            </div>
                            <div className="contact_info ">
                                <div>
                                    <p className="contact_text">E-mail</p>
                                    <NavLink className="contact_link" to="/">
                                        info@mehrigiyo.uz
                                    </NavLink>
                                </div>
                                <div>
                                    <p className="contact_text">Bizga qo'ng'iroq qiling</p>
                                    <NavLink className="contact_link" to="/">
                                        +99898 125 31 03
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <strong className="footer_strong ">Huquqiy</strong>
                        <div>
                            <strong className="footer_strong d-block">Ilovani yuklab olish</strong>
                            <NavLink to="/">
                                <img className="d-block mt-3 mb-3" src={GooglePlay} />
                            </NavLink>
                            <NavLink to="/">
                                <img className="d-block" src={AppStore} />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom container pt-3 pb-3">
                <small className="small_text">© 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan.<br/>
                    Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy.</small>
            </div>
        </div>
    )
}