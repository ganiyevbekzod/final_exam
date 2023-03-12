import React from "react"
import { NavLink } from "react-router-dom"

export const PublicHeader = () => {
    return (
        <div>
            <header className="bg-dark py-3">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <NavLink  className="fs-4 text-white text-decoration-none" to="/">LOGO</NavLink>
                        <NavLink to="/Login" className="ms-auto text-decoration-none btn btn-outline-primary">SIGN IN</NavLink>
                        <NavLink to="/Register" className="ms-3 text-decoration-none btn btn-outline-warning">SIGN UP</NavLink>
                    </div>
                </div>
            </header>

        </div>
    )
}