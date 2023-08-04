import React from "react";
import MyPDF from "../Assets/RosanneAndersonResume.pdf";
import ResSwiper from "../components/Carosels/ResSwiper";
import { useEffect } from "react";

function Resume(props) {
  useEffect(() => document.body.classList.add("resumePage"));
  return (
    <div className="resume">
      <h1 className="title">Resume</h1>
      <div className="resLink">
        <button className="downButton">
          <a href={MyPDF} download="My_File.pdf">
            {" "}
            Download{" "}
          </a>
        </button>
      </div>
      <div className="resSliderDiv">
        {/* <a src= "../Assets/RosanneAndersonResume.pdf" type="application/pdf" width="400" /> */}
        <ResSwiper />
      </div>
    </div>
  );
}

export default Resume;
