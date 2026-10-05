import highlighter from "../../assets/highlighter.svg";
import "./Services.css";
import front from "../../assets/front.svg";
import back from "../../assets/back.svg";
import both from "../../assets/both.svg";


export const Services = () => {
  return (
    <div id="Services" className="services">
      <div className="title">
        <h1>My Services</h1>
        <img src={highlighter} alt="" />
      </div>
      <div className="all-services">
        <div className="service">
          <div className="back">
            <h1>01</h1>
          </div>
          <img src={front} alt="" className="service-icon" />
          <h1 className="heading">Frontend Developer </h1>
          <p>
            I’m a passionate Frontend Developer who builds beautiful,
            responsive, and user-friendly web applications using HTML, CSS,
            JavaScript, and modern frameworks like React. I focus on creating
            seamless user experiences. I love turning ideas into interactive
            products that users enjoy using.
          </p>
        
        </div>

        <div className="service">
          <div className="back">
            <h1>02</h1>
          </div>
          <img src={back} alt="" className="service-icon" />
          <h1 className="heading">Backend Developer </h1>
          <p>
            I’m a Backend Developer who builds the logic, databases, and APIs
            that power web applications. I work mainly with Node.js and
            Express.js to create secure, scalable, and efficient backend
            systems. I connect frontend designs with backend functionality to
            deliver full web experiences.
          </p>
        
        </div>

        <div className="service">
          <div className="back">
            <h1>03</h1>
          </div>
          <img src={both} alt="" className="service-icon" />
          <h1 className="heading">Full Stack Developer </h1>
          <p>
            As a Full Stack Developer, I specialize in building complete web
            applications from end to end. I can handle both the frontend (React)
            and backend Node.js and Express.js web applications. I will work on
            everything — <br />
            UI, APIs, authentication, and database (MongoDB).
          </p>
          
        </div>
      </div>
    </div>
  );
};
