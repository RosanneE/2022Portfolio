import { Link } from "react-router-dom";


function NavBar(props) {
  return (
    <div className="Nav">

      <Link className="navLink" to ='/'>
        <div>Home</div>
      </Link>
      <Link className="navLink" to ='/about'>
        <div>About</div>
      </Link>
      <Link className="navLink" to ='/projects'>
        <div>Projects</div>
      </Link>
      <Link className="navLink" to ='/resume'>
        <div>Resume</div>
      </Link>

      {/* toggle between old school and modern (CSS and photos in about update) inner html changes to bring it back now y'all*/}
      <button>Take it Old School</button>

    </div>
  );
}

export default NavBar;
