import React from 'react';
import { Document, Page } from 'react-pdf';

function Resume(props) {
  return (
    <div>
      <h1>Resume</h1>
      <a
        href="RosanneAndersonResume.pdf"
        download
        rel="noopener noreferrer"
        target="_blank"
      >
        Download
      </a>
      <embed src="RosanneAndersonResume.pdf" width="500" height="375"></embed>
    </div>
  );
}

export default Resume;


