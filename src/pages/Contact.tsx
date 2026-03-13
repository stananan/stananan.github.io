import { useState, type ChangeEvent, type FormEvent } from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page section">
      <div className="container">
        <h1 className="section-title">Contact</h1>

        <section className="contact-links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FiGithub size={20} /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FiLinkedin size={20} /> LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            <FiMail size={20} /> {personalInfo.email}
          </a>
          <a href={personalInfo.resumeLink} className="contact-link" download>
            <FiDownload size={20} /> Download Resume
          </a>
        </section>

        <section className="contact-form-section">
          <h2>Send a Message</h2>
          {submitted ? (
            <p className="form-success">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

export default Contact;
