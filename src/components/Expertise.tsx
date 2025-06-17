import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "FastAPI",
    "Python",
    "SQL",
    "PostgreSQL",
    "MongoDB"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS EC2",
    "AWS S3",
    "Linux",
    "Nginx",
    "Conda",
    "Tmux",
];

const labelsThird = [
    "OpenAI",
    "LangChain",
    "DeepSeek",
    "LLaMA",
    "Hugging Face",
    "LayoutLMv3",
    "Stable Diffusion",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="8x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have developed and deployed scalable applications using modern frameworks like React and FastAPI. My expertise spans frontend design, API integration, and robust database management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="8x"/>
                    <h3>DevOps & Deployment</h3>
                    <p>I specialize in deploying AI models and services on cloud platforms using Docker and CI/CD pipelines. Experience includes production-grade deployments with GitHub Actions, EC2, and Nginx.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="8x"/>
                    <h3>AI & LLM Research</h3>
                    <p>I actively conduct research in world modeling, document AI, and retrieval-augmented generation. My projects involve advanced transformer models and multimodal LLMs fine-tuned for specialized tasks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
