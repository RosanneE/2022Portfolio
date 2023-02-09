import RecoSwiper from "../components/RecoSwiper";
import Skills from '../components/Skills'

function Home(props) {
  return (
    <div className="home">
      <h1>Rosanne Anderson</h1>
      <h2>Software Engineer // Full Stack Developer // Problem Solver</h2>
      <RecoSwiper/>
      <Skills/>
    </div>
  );
}

export default Home;
