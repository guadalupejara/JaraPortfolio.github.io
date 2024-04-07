import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Tab } from 'bootstrap';
import SoftwareDetails from './SoftwareDetails';
import Design from './Design';
import './projects.css'

function SimpleTab() {
  useEffect(() => {
    var tabs = new Tab(document.getElementById('myTab'));
    tabs.show();
  }, []);

  return (
    <React.Fragment>
      <div className='box'>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active tab-text-color" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Software Development</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link tab-text-color" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">UI Design & UX Research</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><SoftwareDetails/></div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Design/></div>
      </div></div>
    </React.Fragment>
  );
}

export default SimpleTab;
