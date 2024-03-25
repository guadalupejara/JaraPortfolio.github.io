import React from 'react'
import "./skillStyle.css"

function skillsDetails (props){
console.log(props,"skills details")
const skillInfo = props.skill;
console.log(skillInfo)
    return(
        <React.Fragment>
            <div className='col-3'>
<img src={skillInfo.pic} className="imageDetails" alt="..."></img>
<p className='textFont'>{skillInfo.name}</p>
</div>
        </React.Fragment>
    )
}

export default skillsDetails