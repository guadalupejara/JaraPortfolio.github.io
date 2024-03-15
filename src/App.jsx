import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import TopNavBar from './Components/NavBar/TopNavBar';
import PDFViewer from './Components/Common/PDFViewr';
import Home from "./Components/Landing/Home";

function App() {
  return (
    <React.Fragment>
    <Router>
      <TopNavBar />
      <div className="App">
        <Routes>
          <Route path="/pdf-viewer" element={<PDFViewer />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
      </div> 
    </Router>
  </React.Fragment>
   
  );
}

export default App;