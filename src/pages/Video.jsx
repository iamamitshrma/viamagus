import React, { useState } from 'react'
import './video.css';
import ReactPlayer from 'react-player'


const Video = () => {

    const [video, setVideo] = useState("https://www.youtube.com/watch?v=1USExPyX9ds");

    const changeVideo = () => {
        setVideo("https://www.youtube.com/watch?v=tplJ3GvhNAI");
    }
  return (
    <>
    <div className='video--video_container'>
        <ReactPlayer url={video} width="100%" height="100vh"/>
    </div>
        <div onClick={changeVideo} className='video--circle'>
            <img src="https://images.pexels.com/photos/12821633/pexels-photo-12821633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
    </>
  )
}

export default Video