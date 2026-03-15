import { skills, education, interests } from "../data";
import DecryptText from "../components/DecryptText";
import "./About.css";

function About() {
  return (
    <div id="about" className="about-page section">
      <div className="container">
        <DecryptText
          text="About Me"
          as="h1"
          className="section-title"
          delay={0}
          speed={30}
        />

        <section className="about-section">
          <DecryptText text="Who I Am" as="h2" delay={100} speed={30} />
          <DecryptText
            text="currently a high school junior at marin catholic high school. i am the co-president of the computer science club. besides programming, i love playing football and working out. in my free time, i play the piano, sleep, and eat."
            as="p"
            delay={300}
            speed={20}
          />
        </section>

        <section className="about-section">
          <DecryptText text="Skills" as="h2" delay={100} speed={30} />
          <div className="skills-grid">
            {(["programminglanguages", "technical", "personal"] as const).map(
              (level, i) => (
                <div key={level} className="skill-category">
                  <DecryptText
                    text={
                      level === "programminglanguages"
                        ? "programming languages"
                        : level
                    }
                    as="h3"
                    delay={200 + i * 100}
                    speed={25}
                  />
                  <div className="skill-tags">
                    {skills[level].map((skill, j) => (
                      <span key={skill} className="tag">
                        <DecryptText
                          text={skill}
                          delay={300 + j * 80}
                          speed={20}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        <section className="about-section">
          <DecryptText text="Education" as="h2" delay={100} speed={30} />
          <p>
            <strong>
              <DecryptText text={education.school} delay={200} speed={20} />
            </strong>
            <DecryptText
              text={` — expected graduation ${education.graduationYear}`}
              delay={300}
              speed={20}
            />
          </p>
          <DecryptText
            text="Relevant Coursework"
            as="h3"
            delay={400}
            speed={25}
          />
          <ul className="course-list">
            {education.relevantCourses.map((course, i) => (
              <li key={course}>
                <DecryptText text={course} delay={500 + i * 100} speed={20} />
              </li>
            ))}
          </ul>
        </section>

        <section className="about-section">
          <DecryptText text="Interests" as="h2" delay={100} speed={30} />
          <div className="skill-tags">
            {interests.map((interest, i) => (
              <span key={interest} className="tag">
                <DecryptText text={interest} delay={200 + i * 80} speed={20} />
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
