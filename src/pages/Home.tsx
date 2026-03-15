import { personalInfo } from "../data";
import DecryptText from "../components/DecryptText";
import "./Home.css";

function Home() {
  return (
    <div id="home" className="home">
      <section className="hero section">
        <div className="container">
          <DecryptText
            text="Hi, I'm"
            as="p"
            className="hero-greeting"
            delay={200}
            speed={25}
            animateOn="mount"
          />
          <DecryptText
            text={personalInfo.name}
            as="h1"
            className="hero-name"
            delay={500}
            speed={40}
            animateOn="mount"
          />
          <DecryptText
            text={personalInfo.tagline}
            as="p"
            className="hero-tagline"
            delay={1000}
            speed={20}
            animateOn="mount"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
