import React from 'react';
import "../assets/styles/projects_css.css"
import {AnimatedBackground} from 'animated-backgrounds';
import ccs2 from "../assets/images/cs2apis.png"
import chimp from "../assets/images/chimper.png"
import ppt from "../assets/images/ppt.png"
import photsent from "../assets/images/photosen.png"
import dwl from "../assets/images/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

const projectsData = [
    {
        id: 1,
        title: "Projeto com 2 api's ",
        description: "Um site para teste de api de um jogo.",
        technologies: ["React", "CSS", "JavaScript"],
        image: ccs2,
        liveLink: "https://frameapics2.vercel.app/",
        codeLink: "https://github.com/GusAtSantos/frameapigames"
    },
    {
        id: 2,
        title: "Replica de site empresarial",
        description: "replica de site para venda de serviços",
        technologies: ["Html", "Css",],
        image: chimp,
        liveLink: "https://chimperfront.vercel.app/",
        codeLink: "https://github.com/GusAtSantos/chimperfront"
    },
    {
        id: 3,
        title: "Jogo simples",
        description: "um simples jogo contra o computador",
        technologies: ["Html", "Css"],
        image: ppt,
        liveLink: "https://pedra-papel-tesoura-react-orcin.vercel.app/",
        codeLink: "https://github.com/GusAtSantos/pedra-papel-tesoura-react"
    },
    {
        id: 4,
        title: "Replica de site de fotografia profissional",
        description: "Site de fotografia profissional",
        technologies: ["Html", "Css",],
        image: photsent,
        liveLink: "https://photsenfront.vercel.app/",
        codeLink: "https://github.com/GusAtSantos/Photsenfront"
    },
    // Adicione mais projetos aqui
];

const Projects = () => {
    return (
        <div className="projects-page">
            <AnimatedBackground animationName="particleNetwork" style={{opacity: 0.2}}/>
            <h1>Meus Projetos</h1>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                Ver Projeto
                            </a>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                Código no GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://github.com/GusAtSantos?tab=repositories">
                <button className="btn" id="btn-mrp">
                    Veja mais <img src={dwl} alt="" className="svg-dwl"/>
                </button>
            </a>
        </div>
    );
};

export default Projects;