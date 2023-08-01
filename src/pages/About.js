import RecoSwiper from "../components/Carosels/RecoSwiper";
import Skills from "../components/Skills";
import { useEffect } from "react";

function About(props) {
  useEffect(() => document.body.classList.add("aboutPage"));
  return (
    <div className="about">
      <div className="aboutTxtShell">
        <h1 className="title">About Me</h1>
        <div className="aboutDiv">
          <div className="pOne">
            <p className="pAbout">
              &emsp;&emsp;I'm Rosanne (she/her) a Baltimore based Software
              Engineer, currently working as aTeaching Assistant at General
              Assembly's coding bootcamp. I enjoy helping students debug,
              reviewing difficult concepts with them, and teaching them how to
              google search even when your problem seems ungoogleable (have you
              tried to get information about 'this' lately?). I'm currently
              working on a website for home bartenders (and if you want to hear
              me rant about how search bars should include the ability to
              exclude terms, just ask!).
            </p>
          </div>
          <div className="picShell">
            <img
              className="aboutPic"
              src={require("../Assets/ProfilePicSupport.jpg")}
            />
          </div>
          <div className="pTwo">
            <p className="pAbout">
              &emsp;&emsp;Having worked in various sectors before learning to
              code (Education, Human Resources, Marketing, Realty, Bar
              Tending...), I am a huge believer that working with people from
              diverse  backgrounds, with different lived experiences, creates
              novel solutions and changes the way we look at problems. I am
              passionate about learning new things, whether it's a new
              framework, coding language, instrument, craft, or dance. I love
              the fact that coding is an ever growing and innovating field, one
              in which I can spend the rest of my life learning new things.  
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

{
  /* <RecoSwiper/> */
}
{
  /* <Skills/> */
}

export default About;
