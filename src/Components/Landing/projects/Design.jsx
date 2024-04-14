import React from 'react'
import './projects.css';
import Button from 'react-bootstrap/Button';
import Oppia from '../../../Assests/Images/Oppia.png'
import LibreOffice from '../../../Assests/Images/LibreOffice.png'
function Design (){

    return(
        <React.Fragment>
            <div className='border border mb-3'>
            <h1 className='border border mb-3'>Oppia</h1>
            <img className='imageFrame mb-3' src={Oppia} alt='Oppia Home Page'/>
            <p className='text'>I volunteer my time and skillset as a user researcher at Oppia, 
                where I have the privilege of collaborating with young learners between the ages 7 - 14.
             My role involves conducting methodically structured studies to assess the effectiveness of 
             various learning components and to gauge the retention of acquired knowledge. Working closely 
             with the design team, I review the data and create reports that identify areas for improvement.
              Subsequently, I suggest possible solutions and propose enhancements to elevate the user 
              experience.</p>
              <h4>Technologies Used:</h4>
              <p>Figma, Google Suite</p>
              <a href="https://lupejara0614.wixsite.com/website-1" target="_blank" rel="noopener noreferrer">
                <Button className='button mb-3'>View More</Button>
                </a>
            </div>
            <div className='border border mb-3'>
            <h1 className='border border mb-3'>LibreOffice</h1>
            <img className='imageFrame mb-3' src={LibreOffice} alt='LibreOffice Home Page'/>
            <p className='text'>Devoting my time to the open-source endeavor of LibreOffice, I actively engage in refining 
                the user experience. My involvement encompasses not only bug reporting and resolution but 
                also extends to the creation of intuitive UI enhancements and resourceful templates. A 
                distinctive aspect of our collaborative efforts is the weekly rendezvous with the director,
                 where we collectively strategize and make pivotal decisions to tackle a spectrum of 
                 challenges. This dynamic interaction ensures that our contributions, spanning from issue
                  resolution to UI innovation, align seamlessly with the project's vision. In this synergy,
                   I find fulfillment as a dedicated member of the LibreOffice team, shaping its evolution 
                   and impact.</p>
              <h4>Technologies Used:</h4>
              <p>LibreOffice, Figma, Bugzilla</p>
              <a href="https://lupejara0614.wixsite.com/website-1/libra-office" target="_blank" rel="noopener noreferrer">
                <Button className='button mb-3'>View More</Button>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Design