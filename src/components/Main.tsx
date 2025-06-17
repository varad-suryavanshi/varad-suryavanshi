import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/vs_img2.png';
import MailIcon from '@mui/icons-material/Mail';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/varad-suryavanshi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/varad-suryavanshi-a1b975227/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:vs3273@nyu.edu" target="_blank" rel="noreferrer"><MailIcon /></a>
          </div>
          <h1>Varad Suryavanshi</h1>
          <p>Software Developer | AI Researcher</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/varad-suryavanshi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/varad-suryavanshi-a1b975227/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;