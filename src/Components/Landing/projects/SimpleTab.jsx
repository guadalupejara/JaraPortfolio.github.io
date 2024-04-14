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
      <div className='box mb-5'>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active tab-text-color" id="Software-tab" data-bs-toggle="tab" data-bs-target="#Software" type="button" role="tab" aria-controls="Software" aria-selected="true">Software Development</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link tab-text-color" id="Design-tab" data-bs-toggle="tab" data-bs-target="#Design" type="button" role="tab" aria-controls="Design" aria-selected="false">UI Design & UX Research</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link tab-text-color" id="UI-tab" data-bs-toggle="tab" data-bs-target="#UI" type="button" role="tab" aria-controls="UI" aria-selected="true">UI Examples</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="Software" role="tabpanel" aria-labelledby="Software-tab"><SoftwareDetails/></div>
        <div className="tab-pane fade" id="Design" role="tabpanel" aria-labelledby="Design-tab"><Design/></div>
      </div></div>
    </React.Fragment>
  );
}

export default SimpleTab;
