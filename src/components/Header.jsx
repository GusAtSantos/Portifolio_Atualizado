import "../assets/styles/header_css.css"
import React from 'react'
import {Link} from "react-router-dom";
import "../assets/styles/global.css"

function Header() {


    return (
        <header>
            <nav className="bar-menu">
                <Link to="/">
                    <h1 className="name-bar">Gustavo Santos</h1>
                </Link>

                <a className="links"><Link to="/">Home</Link></a>
                <a className="links"><Link to="/about">About</Link></a>
                <a className="links"><Link to="/skills">Skills</Link></a>
                <a className="links"><Link to="/projects">Projects</Link></a>
                <a className="links"><Link to="/contact">Contact</Link></a>


            </nav>
        </header>
    )

}

export default Header