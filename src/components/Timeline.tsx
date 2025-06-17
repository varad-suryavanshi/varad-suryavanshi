import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faFlask } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career Timeline</h1>
        <VerticalTimeline>
          {/* Research at NYU */}
          <VerticalTimelineElement
            className="vertical-timeline-element--research"
            date="May 2025 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faFlask} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant – World Modeling</h3>
            <h4 className="vertical-timeline-element-subtitle">NYU, Prof. Sherry Yang</h4>
            <p>
              Working on multimodal world model using LLava and Stable Diffusion. Developed LLM-based next-state prediction pipeline using LIBERO and DeepSeek-R1.
            </p>
          </VerticalTimelineElement>

          {/* NYU */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2024 – May 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.S. in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">New York University, NY</h4>
            <p>Courses: OS, Deep RL, LLVM, ML in Finance, Algorithms</p>
          </VerticalTimelineElement>


          {/* NTT Data Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 – Sep 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">NTT DATA, Hyderabad</h4>
            <p>
              Built RAG-based chatbot using GPT-3.5 & ChromaDB. Optimized retrieval with Hugging Face embeddings, reducing API cost and improving relevance.
            </p>
          </VerticalTimelineElement>

          {/* Mumbai University */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2020 – Jun 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.E. in Computer Science & Engineering (Data Science)</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Mumbai, India</h4>
            <p>Honors in Computational Finance, strong focus in AI/ML</p>
          </VerticalTimelineElement>

          

          

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
