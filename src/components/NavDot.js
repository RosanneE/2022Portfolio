import { Link } from "react-router-dom";


function NavDot(props) {
  return (
    <div className="navDot">
        <button className="dotBtn">Drop</button>
<div className="drops">

      <a><Link className="navDotLink" to ='/about'>
        <h3>About</h3>
      </Link>
      </a>
      <a><Link className="navDotLink" to ='/projects'>
        <h3>Projects</h3>
      </Link>
      </a>
      <a><Link className="navDotLink" to ='/contact'>
        <h3>Contact</h3>
      </Link>
      </a>
      </div>
    </div>
  );
}

export default NavDot;
