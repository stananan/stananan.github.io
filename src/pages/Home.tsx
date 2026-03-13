import { Link } from "react-router-dom";
import { personalInfo } from "../data";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero section">
        <div className="container">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View My Projects
            </Link>
            <Link to="/about" className="btn btn-outline">
              About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
