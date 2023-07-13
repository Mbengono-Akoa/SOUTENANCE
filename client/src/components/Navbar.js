import React, {useState} from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import {GiRocketThruster} from "react-icons/gi"
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"

function Navbar(){
    const [click, setClick] = useState(false)

    const handleclick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo"  onClick={closeMobileMenu}>
                    <GiRocketThruster className="navbar-icon" />
                    Campusbook
                </Link>
                <div className="menu-icon" onClick={handleclick}>
                    {click ? <FaTimes /> : <FaBars/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            Epreuves</NavLink>
                        
                    </li>

                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            RoomChat</NavLink>
                        
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            VideoCall</NavLink>
                        
                    </li>
                </ul>
            </div>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;