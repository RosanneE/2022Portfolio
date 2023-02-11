import React from "react";
import MyPDF from "../Assets/RosanneAndersonResume.pdf";
import ResSwiper from "../components/ResSwiper";
function Resume(props) {
  return (
    <div>
      <h1>Resume</h1>
      <div className="resLink">
      <a href={MyPDF} download="My_File.pdf">
        {" "}
        Download{" "}
      </a>
      </div>
      <div className="resSliderDiv">
      <ResSwiper/>
      </div>
    </div>
  );
}

export default Resume;
