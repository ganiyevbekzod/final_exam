import { NavLink } from "react-router-dom"
import "./PrivateHeader.css"
import Local from "../../assets/images/Vector.svg"
import uzb from "../../assets/images/Rectangle 11.svg"
import user from "../../assets/images/user.svg"

export const PrivateHeader = () => {
    return (
        <header className="header">
            <div className="header_top container  pt-2 pb-2  ">
                <ul className="header_list d-flex">
                    <li className="list_item">
                        <NavLink className="link" to="/">
                            Mahsulotlar katalogi
                        </NavLink>
                    </li>
                    <li className="list_item">
                        <NavLink className="link" to="/">
                        Foto-lavhalar
                        </NavLink>
                        </li>
                    <li className="list_item">
                        <NavLink className="link" to="/">
                        Yetkazib berish va to'lash
                        </NavLink >
                        </li>
                    <li className="list_item ">
                        <NavLink className="links" to="/">
                        Aksiya
                        </NavLink >
                        </li>
                    <li className="list_item">
                        <NavLink className="linkk" to="/">
                        Yangi
                        </NavLink>
                        </li>
                </ul>
                <div className="d-flex align-items-center justify-content-between gap-3">
                <img src={uzb} />
                    <select className="form-select border-0">
                        <option value="1" >Uz</option>
                    </select>
                    <span className="span"></span>
                    <p className="header_text_left ">Toshkent shahar</p>
                    <img className="local" src={Local} />
                    <span className="span"></span>
                    <p className="header_text_left ">Kirish</p>
                    <img className="user" src={user}/>
                </div>
            </div>
        </header>
    )
}