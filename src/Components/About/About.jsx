import "./About.css";
import highlighter from "../../assets/highlighter.svg";


const About = () => {
  return (
    <div id="About" className="about">
      <div className="title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
         
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              👋 I'm Monti Rajput, a passionate Full-Stack Developer who loves
              turning bold ideas into clean, functional, and interactive digital
              experiences. From pixel-perfect frontends to robust backend
              systems, I thrive on building products that solve real problems
              and look amazing doing it.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>DSA USING CPP</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>NODE JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>5+</h1>
          <p>Months of Experience</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>4+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>Resolved 1000+</h1>
          <p>Coding Queries</p>
        </div>
      </div>
    </div>
  );
};

export default About;
