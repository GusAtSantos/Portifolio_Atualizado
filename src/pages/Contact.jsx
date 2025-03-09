import Forms from '../components/Forms'
import "../assets/styles/global.css"
import {AnimatedBackground} from 'animated-backgrounds';
import React from "react";
import "../assets/styles/contact_css.css"
import github from "../assets/images/4202098_github_code_developer_logo_icon.svg";
import linkedin from "../assets/images/4202085_linkedin_logo_social_social media_icon.svg";
import insta from "../assets/images/1298747_instagram_brand_logo_social media_icon.svg";
import mail from "../assets/images/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import phone from "../assets/images/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"

function Contact() {

    return (

        <div className="contact">
            <AnimatedBackground animationName="particleNetwork" style={{opacity: 0.2}}/>
            <h1>Contact</h1>
            <Forms/>
            <div className="info">
                <h2 className="h2-mail">
                    <img src={mail} alt="" width="30rem"/>
                    gustavoatanasiosantos@gmail.com
                </h2>
                <h2 className="h2-phone">
                    <img src={phone} alt=""  width="30rem"/>
                    (31) 9 9290-1102
                </h2>

                <ul className="soc-link">
                    <li className="hef">
                        <img src={github} alt="" width="20em"/>
                        <a href="https://github.com/GusAtSantos" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li className="hef">
                        <img src={linkedin} alt="" width="20em"/>
                        <a href="https://www.linkedin.com/in/gustavo-santos-002415288/" target="_blank"
                           rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li className="hef">
                        <img src={insta} alt="" width="20em"/>
                        <a href="https://www.instagram.com/gus._.santos._/" target="_blank"
                           rel="noopener noreferrer">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Contact