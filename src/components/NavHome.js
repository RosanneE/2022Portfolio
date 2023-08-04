import { Link } from "react-router-dom";

function NavHome(props) {
  return (
    <div className="nav">
      <div className="homeMenu homeBtn">
        <Link className="navHome homeLink" to="/about">
          <h3 className="homeMenTxt">About</h3>
        </Link>
      </div>
      <div className="homeMenu homeBtn">
        <Link className="navHome" to="/projects">
          <h3 className="homeMenTxt">Projects</h3>
        </Link>
      </div>
      <div className="homeMenu homeBtn">
        <Link className="navHome homeLink" to="/resume">
          <h3 className="homeMenTxt" >Resume</h3>
        </Link>
      </div>
    </div>
  );
}

export default NavHome;




