import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import TopNavBar from './Components/NavBar/TopNavBar';
import PDFViewer from './Components/Common/PDFViewr';

function App() {
  return (
    <React.Fragment>
    <Router>
      <TopNavBar />
      <div className="App">
        <Routes>
          <Route path="/pdf-viewer" element={<PDFViewer />} />
        </Routes>
      </div> 
    </Router>
  </React.Fragment>
   
  );
}

export default App;