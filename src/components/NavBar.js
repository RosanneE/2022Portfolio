import { Link } from "react-router-dom";


function NavBar(props) {
  return (
    <div className="Nav">

      <Link className="navLink" to ='/'>
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
      </Link>

      {/* toggle between old school and modern (CSS and photos in about update) inner html changes to bring it back now y'all*/}
      {/* <button className="oldSchoolB">Go Old School</button> */}

    </div>
  );
}

export default NavBar;
