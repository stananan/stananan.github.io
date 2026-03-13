import { skills, education, interests, personalInfo } from "../data";
import "./About.css";

function About() {
  return (
    <div className="about-page section">
      <div className="container">
        <h1 className="section-title">About Me</h1>

        <section className="about-section">
          <h2>Who I Am</h2>
          <p>
            Write your bio here. Talk about who you are, what you're interested
            in, and what drives you as a developer.
          </p>
        </section>

        <section className="about-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Strong</h3>
              <div className="skill-tags">
                {skills.strong.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Familiar</h3>
              <div className="skill-tags">
                {skills.familiar.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Learning</h3>
              <div className="skill-tags">
                {skills.learning.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Education</h2>
          <p>
            <strong>{education.school}</strong> — Expected graduation{" "}
            {education.graduationYear}
          </p>
          <h3>Relevant Coursework</h3>
          <ul className="course-list">
            {education.relevantCourses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </section>

        <section className="about-section">
          <h2>Interests</h2>
          <div className="skill-tags">
            {interests.map((interest) => (
              <span key={interest} className="tag">
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
