import React from "react";
import MyPDF from "../Assets/RosanneAndersonResume.pdf";
import ResSwiper from "../components/Carosels/ResSwiper";
function Resume(props) {
  return (
    <div>
      <h1>Resume</h1>
      <div className="resLink">
        <button className='downButton'>
      <a href={MyPDF} download="My_File.pdf">
        {" "}
        Download{" "}
      </a></button>
      </div>
      <div className="resSliderDiv">
      <ResSwiper/>
      </div>
    </div>
  );
}

export default Resume;
