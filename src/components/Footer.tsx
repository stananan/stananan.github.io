import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data";
import DecryptText from "./DecryptText";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
        <p className="footer-text">
          <DecryptText text={`© ${new Date().getFullYear()} ${personalInfo.name}`} delay={0} speed={25} />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
