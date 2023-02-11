function About(props) {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="aboutDiv">
      <div className="colOne">
          <p className="pAbout">
          &emsp;&emsp;I am a Baltimore based Software Engineer. Currently working as a
            Teaching Assistant at General Assembly's coding bootcamp, I enjoy
            helping students debug, reviewing difficult concepts with them, and
            teaching them how to google search even when your problem seems
            ungoogleable (have you tried to get information about 'this'
            lately?).
          </p>
        </div>
        <div className="colTwo">
          <img className="aboutPic" src={require("../Assets/greenWall.jpeg")} />
        </div>
        <div className="colOne">
          <p  className="pAbout">
          &emsp;&emsp;Having worked in various sectors before learning to
            coding, I am a huge beliver that working with people from diverse
            backgrounds, with differnnet lived experiences, creates novel
            solutions and change the way we look at problems. I am passionate
            about learning new things, whether it's a new framework, coding
            language, instument or dance. As poet E. E. Cummings wrote "the
            goal of living is to grow". I can't wait to see where this journey
            takes me!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
