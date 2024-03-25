import React from "react";
import resume from "../../Assests/mainResume.pdf";

const PDFViewer = () => {
  
  return (
    <div>
      <iframe src={resume} width='100%' height='1200px' title="Resume PDF" />
    </div>
  );
};

export default PDFViewer;
