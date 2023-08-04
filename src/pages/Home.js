
import Nav from "../components/NavHome";
import { Link } from "react-router-dom";
import HomeFooter from "../components/HomeFooter";
import { useEffect } from "react";

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
      <HomeFooter />
    </div>
  );
}

export default Home;
