import React from 'react';
import './projects.css';
import Button from 'react-bootstrap/Button';
import Video from '../../Common/Video';
import codeVideo from '../../../Assests/codeVideo.mp4'; // Double-check the path here

function SoftwareDetails() {
    return (
        <React.Fragment>
            <div className='border border mb-3'>
                <h1 className='border border mb-3'>Resolvely</h1>
                <Video video={codeVideo} />
                <p className='text'>Resolvely is an innovative and interactive platform 
                    designed to serve as an academic resource for high school 
                    scholars navigating the college admissions process. </p>
                    <h4>Technologies & Libraries Used:</h4>
                <p> SQL, C# in a .NET environment, SweetAlert, CK Editor, YUP, Bootstrap, and React.JS </p>
                <a href="https://github.com/guadalupejara/Projects" target="_blank" rel="noopener noreferrer">
                <Button className='button mb-3'>Code</Button>
                </a>
            </div>
        </React.Fragment>
    );
}

export default SoftwareDetails;