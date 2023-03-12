import { Route, Routes } from "react-router-dom"
import { PublicHeader } from "../components/PublicHeader/PublicHeader"
import { Login } from "../pages/Login/Login"
import { Register } from "../pages/Register/Register"
import PublicImg from "../assets/images//download1.png"
export const Public=()=>{
    return(
    <>
        <PublicHeader/>
        <div className="container">
        <img className="mt-5 pt-5" style={{width:"1200px",height:"auto"}} src={PublicImg} alt="" />
        </div>
        <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
    </>
    )
}