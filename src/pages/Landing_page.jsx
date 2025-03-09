import "../assets/styles/global.css"
import {Link} from "react-router-dom";
import React from "react";
import me2 from "../assets/images/WhatsApp_Image_2025-02-26_at_21.19.21-removebg-preview.png"
import {AnimatedBackground} from 'animated-backgrounds';
import north from "../assets/images/north_east_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function LandingPage() {

    return (

        <div>
            <AnimatedBackground animationName="particleNetwork" style={{opacity: 0.2 }}  />
            <div className="home-page">

                <h1>Gustavo Santos</h1>
                <h2>Desenvolvedor Web Mobile</h2>


            </div>
            <div className="btns">
                <Link to="/about">
                    <button className="btn" id="btn-lp">About<img src={north} alt="" className="svg-dwl2"/></button>
                </Link>
                <Link to="/skills">
                    <button className="btn" id="btn-lp">Skills<img src={north} alt="" className="svg-dwl2"/></button>
                </Link>
                <Link to="/projects">
                    <button className="btn" id="btn-lp">Projects<img src={north} alt="" className="svg-dwl2"/></button>
                </Link>
                <Link to="/contact">
                    <button className="btn" id="btn-lp">Contact<img src={north} alt="" className="svg-dwl2"/></button>
                </Link>

            </div>

            <div className="cube"></div>
            <div className="cube-2"></div>
            <div className="cube-3"></div>
            <div className="cube-6"></div>
            <div className="cube-5"></div>
            <img src={me2} alt="" className="img-me2"/>
            <div className="cube-4"></div>


        </div>

    )
}

export default LandingPage