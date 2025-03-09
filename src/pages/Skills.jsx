import React, {useState, useEffect} from 'react';
import "../assets/styles/skills_css.css"
import { AnimatedBackground } from 'animated-backgrounds';

const skillsData = [
    "HTML: ********** (90%)",
    "CSS: ********** (90%)",
    "JavaScript: ********* (85%)",
    "TypeScript: ******** (80%)",
    "React: ********** (90%)",
    "C#: ******** (80%)",
    "SQL: ******** (55%)",
    "SQLite: ********* (55%)",
    "PHP: ******* (70%)",
    "Laravel: ******* (70%)",
    "Swift: ****** (75%)",
    "Kotlin: ****** (80%)",
    "Manutenção e Configuração de Computadores: ********* (100%)",
    "GitHub: ********* (50%)",
    "Vercel: ********* (60%)",
    "VS code: ********* (80%)",
    "Web storm: ********* (65%)",
    "Unity: ********* (70%)",
    "Netlify: ********* (60%)",
    "Bootstrap: ********* (50%)",

    // Adicione mais habilidades aqui
];

const Skills = () => {
    const [displayedSkills, setDisplayedSkills] = useState([]);
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [currentText, setCurrentText] = useState('|');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (currentSkillIndex < skillsData.length) {
            const currentSkill = skillsData[currentSkillIndex];
            const timeout = isTyping ? 90 : 500; // Velocidade de digitação ou pausa

            if (isTyping) {
                if (currentText.length < currentSkill.length) {
                    setTimeout(() => {
                        setCurrentText(currentSkill.slice(0, currentText.length + 1));
                    }, timeout);
                } else {
                    setIsTyping(false);
                    setTimeout(() => {
                        setDisplayedSkills((prev) => [...prev, currentText]);
                        setCurrentText('|');
                        setCurrentSkillIndex(currentSkillIndex + 1);
                        setIsTyping(true);
                    }, 1000); // Pausa antes de começar a próxima habilidade
                }
            }
        }
    }, [currentSkillIndex, currentText, isTyping]);

    return (
        <div>
            <h1 className="skill">Prompt de Habilidades</h1>
            <AnimatedBackground animationName="particleNetwork" style={{ opacity: 0.2 }} />
            <div className="skills-page">
                <div className="terminal">
                    {displayedSkills.map((skill, index) => (
                        <div key={index} className="terminal-line">
                            <span className="prompt">C:\Users\Gustavo Santos></span> {skill}
                        </div>
                    ))}
                    {currentSkillIndex < skillsData.length && (
                        <div className="terminal-line">
                            <span className="prompt">C:\Users\Gustavo Santos></span> {currentText}
                            <span className="cursor">|</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;