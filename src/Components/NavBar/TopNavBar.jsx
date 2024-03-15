import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TopNavBar() {

  const togglePDFViewer = () => {
    window.open("/pdf-viewer", "_blank");
  };
 
  return (
    <React.Fragment>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Guadalupe Jara</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

    <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/guadalupejara0614/">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/lupe0614">Git</a>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={togglePDFViewer}>
            Resume
          </button>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </React.Fragment>
  );
}

export default TopNavBar;


