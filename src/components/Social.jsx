import "../assets/styles/global.css"
import React from "react";
import github from "../assets/images/4202098_github_code_developer_logo_icon.svg";
import linkedin from "../assets/images/4202085_linkedin_logo_social_social media_icon.svg";
import insta from "../assets/images/1298747_instagram_brand_logo_social media_icon.svg";
function Social() {

    return (

        <ul className="social-links">
            <li>
                <img src={github} alt="" width="20em"/>
                <a href="https://github.com/GusAtSantos" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
                <img src={linkedin} alt="" width="20em"/>
                <a href="https://www.linkedin.com/in/gustavo-santos-002415288/" target="_blank"
                   rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
                <img src={insta} alt="" width="20em"/>
                <a href="https://www.instagram.com/gus._.santos._/" target="_blank"
                   rel="noopener noreferrer">Instagram</a>
            </li>


        </ul>

    )
}

export default Social