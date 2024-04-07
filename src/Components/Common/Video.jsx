import React from 'react'
import "./codeVideo.css"

function Video({video}){
console.log(video,"video")
    return(
        <React.Fragment>
            <div className=' videoContainer mb-3'>
            <div className='videoSize'>
             <video controls autoPlay  muted width="100%">
      <source src={video} type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video></div></div>

        </React.Fragment>
    )
}
export default Video