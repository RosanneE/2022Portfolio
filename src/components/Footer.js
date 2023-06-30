import MyPDF from "../Assets/RosanneAndersonResume.pdf";
function Footer(props) {
  return (
    <div className="footer">

      
      <div className="inline">
      <button className="resumeButton"><a  classname = "resume" href={MyPDF} download="My_File.pdf">
        {" "}
        Download Character Sheet{" "}
      </a></button>
        <img className = 'connectPic' src={require("../Assets/github.png")} />
        <img className = 'connectPic' src={require("../Assets/linkedinLogo.png")} />
   
      </div>
      <h5 className="footerText">Created By Rosanne Anderson, 2023</h5>
    </div>
  );
}

export default Footer;
