import { Link } from "react-router-dom";
import MyResume from "../Assets/RosanneAndersonResume.pdf";


function HomeFooter(props) {
  return (
    <div className="homeFoot">
        <div className="homeMenu homeRes homeBot">
        <Link className="navLink" to ='/about'>
        <h3 className="botText">about me</h3>
      </Link>
    </div>
    <div className="homeMenu homeRes homeBot">
    <Link className="navLink" to ='/portfolio'>
        <h3 className="botText">portfolio</h3>
      </Link>
    </div>
    <div className="homeMenu homeRes homeBot">
    <Link className="navLink" to ='/resume'>
        <h3 className="botText">resume</h3>
      </Link>
    </div>
    <div className="homeMenu homeRes homeBot">
      <a
        className="homeFootLink"
        href="mailto:anderson.rosanne4@gmail.com"
        download="My_File.pdf"
      >
        <h3 className="botText">lets talk</h3>
      </a>
    </div>
    
    <div >
      <a href="https://github.com/RosanneE">
        <img
          className="connectPic git homeIcon"
          src={require("../Assets/github.png")}
          alt="image: flaticon.com, github logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/rosanne-anderson">
        <img
          className="connectPic linkedin homeIcon"
          src={require("../Assets/linkedinLogo.png")}
          alt="image: flaticon.com, linkedin logo"
        />
      </a>
    </div>
  </div>
  );
}

export default HomeFooter;


{/* <Link className="navLink" to ='/'>
<h3>Home</h3>
</Link>
<Link className="navLink" to ='/about'>
<h3>About</h3>
</Link>
<Link className="navLink" to ='/projects'>
<h3>Projects</h3>
</Link>
<Link className="navLink" to ='/resume'>
<h3>Resume</h3>
</Link> */}