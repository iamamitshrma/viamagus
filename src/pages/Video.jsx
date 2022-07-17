import React, { useState } from 'react'
import './video.css';
import ReactPlayer from 'react-player'


const Video = () => {


    const [video, setVideo] = useState("https://www.youtube.com/watch?v=1USExPyX9ds");

    const videoUrl = 'https://www.youtube.com/watch?v=tplJ3GvhNAI';

    const [thumbnail, setThumbnail] = useState(videoUrl.split("=")[1]);

    console.log(thumbnail)

    const changeVideo = () => {
        setVideo(videoUrl);
        setThumbnail(video.split("=")[1])
    }
  return (
    <>
    <div className='video--video_container'>
        <ReactPlayer url={video} width="100%" height="100vh"/>
    </div>
    <div className="outer">
            <div onClick={changeVideo} className='video--circle'>
                <img src={"//img.youtube.com/vi/" + thumbnail + "/0.jpg"} alt="" />
            </div>
    </div>
    </>
  )
}

export default Video