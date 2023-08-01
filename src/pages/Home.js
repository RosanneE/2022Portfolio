import MyResume from "../Assets/RosanneAndersonResume.pdf";
import Nav from "../components/NavHome";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import contact from "./Contact";

function Home(props) {
  useEffect(() => document.body.classList.add("home"));
  return (
    <div className="homeDiv">
      {/* <Nav/> */}
      <div className="homeTxt">
        <h1 className="homeOne">const</h1>
        <h1 className="homeOne">rosanneAnderson</h1>
        <h1 className="homeOne"> = </h1>

        <h3 className="home3">
          &#123; <br></br>
          &#160;&#160;&#160;profession: software engineer;<br></br>
          &#160;&#160;&#160;location: Baltimore;<br></br>
          &#160;&#160;&#160;currJob: teachingAssistant;<br></br>
          &#160;&#160;&#160;AvailableForWork: true; <br></br>
          &#125;
        </h3>
      </div>
      <div className="homeFoot">
      <div className="homeMenu homeRes homeBot">
          <a className="homeFootLink" href='mailto:anderson.rosanne4@gmail.com' download="My_File.pdf">
            <h3 className="botText">lets talk</h3>
          </a>
        </div>
        <div className="homeIcon">
          <a href="https://github.com/RosanneE">
            <img
              className="connectPic git"
              src={require("../Assets/github.png")}
              alt="image: flaticon.com, github logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/rosanne-anderson">
            <img
              className="connectPic linkedin"
              src={require("../Assets/linkedinLogo.png")}
              alt="image: flaticon.com, linkedin logo"
            />
          </a>
        </div>
        <div className="homeMenu homeRes homeBot">
          <a className="homeFootLink" href={MyResume} download="My_File.pdf">
            <h3 className="botText">download resume</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
