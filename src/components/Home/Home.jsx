import { NavLink } from "react-router-dom"
import like from "../../assets/images/like.svg"
import karzinka from "../../assets/images/karzinka.svg"
import "./Home.css"
export const Home=()=>{
    return(
        <>
        <div className="home ">
            <div className=" container">
                <div className="home_wrapper">
                <p className="home_logo">LOGO</p>
                <NavLink className={({isActive})=>isActive ? "activee text-black ":" noactivee text-black"} to={"/"}>
                    Bosh sahifa
                </NavLink>
                <NavLink className={({isActive})=>isActive ? "activee text-black":" noactivee text-black"} to={"/Mahsulotlar"}>
                    Mahsulotlar
                </NavLink>
                <div className="home_left">
                <NavLink className={({isActive})=>isActive ? "active_like ":" active_unlike"} to={"/Like"}>
                    <img src={like} />
                </NavLink>
                <NavLink className={({isActive})=>isActive ? "active_karzinka":" noactive_karzinka"} to={"/Shopping"}>
                <img src={karzinka} />
                </NavLink>
                </div>
                </div>

            </div>
        </div>
        </>
    )
}