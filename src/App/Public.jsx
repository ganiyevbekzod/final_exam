import { Route, Routes } from "react-router-dom"
import { PublicHeader } from "../components/PublicHeader/PublicHeader"
import { Login } from "../pages/Login/Login"
import { Register } from "../pages/Register/Register"
export const Public=()=>{
    return(
    <>
        <PublicHeader/>
        <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
    </>
    )
}