import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TopNavBar() {
     
  return (
    <React.Fragment>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://example.com">Guadalupe Jara</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

    <li className="nav-item">
          <a className="nav-link" href="https://example.com">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://example.com">Git</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://example.com">Resume</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </React.Fragment>
  );
}

export default TopNavBar;


