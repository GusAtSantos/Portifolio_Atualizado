import "../assets/styles/global.css"
import "../assets/styles/about_css.css"
import Me from "../assets/images/Beige Simple Photo Signature Twitter Profile Picture.png"
import {AnimatedBackground} from 'animated-backgrounds';
import React from "react";
import dwl from "../assets/images/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function About() {
    return (
        <>
            <AnimatedBackground animationName="particleNetwork" style={{opacity: 0.2}}/>

            <h1 className="about-lbl">About-me</h1>

            <p className="about-me">
                Desenvolvidor de aplicações web e mobile. Sou apaixonado por criar soluções
                inovadoras e
                eficientes. Aprendizado em todo o ciclo de desenvolvimento, desde a concepção até o lançamento e
                manutenção
                de projetos. Busco uma oportunidade em uma empresa desafiadora para aplicar e expandir meus
                conhecimentos e contribuir para o crescimento da equipe.
            </p>
            <div>
                <a href="https://drive.google.com/drive/u/4/folders/1CLSos1uFhI95ZYVRldFE47A-Vj3Tfhch">
                    <button className="btn" id="btn-dwc">
                        Download Curriculo <img src={dwl} alt="" className="svg-dwl"/>
                    </button>
                </a>

            </div>

            <div className="bord">
                <img src={Me} alt="" className="me-img"/>
            </div>
        </>
    )
}

export default About