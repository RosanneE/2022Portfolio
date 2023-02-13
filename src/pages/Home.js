import RecoSwiper from "../components/Carosels/RecoSwiper";
import Skills from '../components/Skills'

function Home(props) {
  return (
    <div className="home">
      <h1 className="homeOne">Rosanne Anderson</h1>
      <h2 className="homeTwo">Software Engineer // Full Stack Developer // Problem Solver</h2>
     <h3 className="home3">Welcome to my portfolio!  Browse the site to learn more about me and my coding projects.  If you have any questions, or are hiring, please reach out using the contact info listed in my resume.</h3>
      <RecoSwiper/>
      <Skills/>
    </div>
  );
}

export default Home;
