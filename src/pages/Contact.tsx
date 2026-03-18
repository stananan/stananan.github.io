import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data";
import DecryptText from "../components/DecryptText";
import SectionReveal from "../components/SectionReveal";
import "./Contact.css";

function Contact() {
  const links = [
    {
      href: personalInfo.github,
      icon: <FiGithub size={18} />,
      label: "github",
      external: true,
    },
    {
      href: personalInfo.linkedin,
      icon: <FiLinkedin size={18} />,
      label: "linkedin",
      external: true,
    },
    {
      href: `mailto:${personalInfo.email}`,
      icon: <FiMail size={18} />,
      label: personalInfo.email,
    },
  ];

  return (
    <div id="contact" className="contact-page section">
      <div className="container">
        <SectionReveal>
          <DecryptText
            text="Contact"
            as="h1"
            className="section-title"
            delay={0}
            speed={30}
            animateOn="view"
          />

          <section className="contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="contact-link"
              >
                {link.icon}{" "}
                <DecryptText text={link.label} delay={200} speed={20} animateOn="view" />
              </a>
            ))}
          </section>
        </SectionReveal>
      </div>
    </div>
  );
}

export default Contact;
