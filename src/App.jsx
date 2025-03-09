import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing_page from "./pages/Landing_page.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./assets/styles/global.css"
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";

function App() {



    return (

        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Landing_page/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>

            </Router>
            <Footer/>
        </>

    )

}

export default App
