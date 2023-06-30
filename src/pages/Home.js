import MyResume from "../Assets/RosanneAndersonResume.pdf";
import NavDot from "../components/NavDot";
import { Link } from "react-router-dom";
import contact from "./Contact";

function Home(props) {
  return (
    <div className="home">
      <NavDot />

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

      <div className="homeFoot">
        <div className="contactLink">
        <a  className="homeFootLink"><Link to ='/contact'>
        <h3>let's talk</h3>
      </Link>
      </a>
        </div>

        <img
          className="connectPic git"
          src={require("../Assets/github.png")}
          alt="image: flaticon.com, github logo"
        />
        <img
          className="connectPic linkedin"
          src={require("../Assets/linkedinLogo.png")}
          alt="image: flaticon.com, linkedin logo"
          href="https://www.linkedin.com/in/rosanne-anderson"
        />
        <div className="resLink ">
 
            <a  className="homeFootLink" href={MyResume} download="My_File.pdf">
              <h3>
              resume</h3>
            </a>

        </div>
      </div>
    </div>
  );
}

export default Home;
