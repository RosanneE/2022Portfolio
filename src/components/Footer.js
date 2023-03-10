function Footer(props) {
  return (
    <div>
      
      <h5 className="footerText">Created By Rosanne Anderson, 2023</h5>
      <div className="inline">
        <img className = 'connectPic' src={require("../Assets/github-mark.png")} />
        <img className = 'connectPic' src={require("../Assets/linkedinLogo.jpg")} />
      </div>
    </div>
  );
}

export default Footer;
