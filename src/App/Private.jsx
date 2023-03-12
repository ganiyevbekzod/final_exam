import { Route, Routes } from "react-router-dom"
import { PrivateHeader } from "../components/PrivateHeader"
import { BoshSahifa } from "../pages/BoshSahifa/BoshSahifa"
import { LikeProduct } from "../pages/LikeProduct"
import { Mahsulotlar } from "../pages/Mahsulotlar/Mahsulotlar"
import { Shopping } from "../pages/Shopping/Shopping"

export const Private=()=>{
    return(
        <>
        <PrivateHeader/>
        <Routes>
            <Route index path="/" element={<BoshSahifa/>}/>
            <Route path="/Mahsulotlar" element={<Mahsulotlar/>}/>
            <Route path="/Like" element={<LikeProduct/>}/>
            <Route path="/Shopping" element={<Shopping/>}/>
        </Routes>

        </>
    )
}