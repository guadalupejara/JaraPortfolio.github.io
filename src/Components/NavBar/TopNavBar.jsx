import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar/TopNavBar.css";
import git from "../../Assests/git.png"
import linkedin from "../../Assests/linked.png"
function TopNavBar() {

  const togglePDFViewer = () => {
    window.open("/pdf-viewer", "_blank");
  };
 
  return (
    <React.Fragment>
     <nav className="navbar navbar-expand-lg navbar-bg-color">
  <div className="container-fluid border-bottom border-opacity-10">
    <a className="navbar-brand navbar-text-color navbar-text" href="/home">Guadalupe Jara</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

    <li className="nav-item">
  <div className="icon-anchor-container">
    <img className="navbar-img" src={linkedin} alt="LinkedIn" />
    <a className="nav-link navbar-text-color navbar-text" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/guadalupejara0614/">LinkedIn</a>
  </div>
</li>
        <li className="nav-item">
        <div className="icon-anchor-container">
        <img className="navbar-img" src={git} alt="Git" />
          <a className="nav-link navbar-text-color navbar-text" target="_blank" rel="noreferrer" href="https://github.com/lupe0614">Git</a>
          </div>
        </li>
        <li className="nav-item">
          <button className="nav-link navbar-text-color navbar-text" onClick={togglePDFViewer}>
            Resume
          </button>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 mb-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn border-light mb-2 navbar-text-color navbar-text" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </React.Fragment>
  );
}

export default TopNavBar;


