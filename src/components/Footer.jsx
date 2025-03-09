import React from "react";
import Social from "./Social.jsx";
import "../assets/styles/footer_css.css"

function Footer() {

    return (
        <>
            <footer className="footer">
                <p>© 2025 Gustavo Santos. Todos os direitos reservados.</p>
               <Social/>
            </footer>
        </>
    )

}

export default Footer