import React from "react";
import resume from "../../Assests/Resume.pdf";

const PDFViewer = () => {
    console.log("hit")
  return (
    <div>
      <iframe src={resume} width='100%' height='1200px' title="Resume PDF" />
    </div>
  );
};

export default PDFViewer;
