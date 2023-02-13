function About(props) {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="aboutDiv">
      <div className="colOne">
          <p className="pAbout">
          &emsp;&emsp;I am a Baltimore based Software Engineer, crrently working as a
            Teaching Assistant at General Assembly's coding bootcamp. I enjoy
            helping students debug, reviewing difficult concepts with them, and
            teaching them how to google search even when your problem seems
            ungoogleable (have you tried to get information about 'this'
            lately?).  I'm currently working on a website for home bartenders (and if you want to hear me rant about how search bars should include the ability to exclude terms, just ask!).
          </p>
        </div>
        <div className="colTwo">
          <img className="aboutPic" src={require("../Assets/greenWall.jpeg")} />
        </div>
        <div className="colOne">
          <p  className="pAbout">
          &emsp;&emsp;Having worked in various sectors before learning to
            coding (Education, Human Resources, Marketing, Realty, Bar Tending...), I am a huge beliver that working with people from diverse
            backgrounds, with different lived experiences, creates novel
            solutions and change the way we look at problems. I am passionate
            about learning new things, whether it's a new framework, coding
            language, instument, craft, or dance. I love the fact that coding is an ever growing and innovating field, one in which I can spend the rest of my life learning new things.  
          </p>
        </div>
        <div className="colTwo">
          <img className="aboutPic" src={require("../Assets/grow.png")} />
        </div>
      </div>
    </div>
  );
}

export default About;
