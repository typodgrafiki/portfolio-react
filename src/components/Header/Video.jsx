import React, { useRef, useState } from "react";
import srcWebm from '../../assets/pexels-t-leish-5310323-426x240-25fps.webm'
import srcMp4 from '../../assets/pexels-t-leish-5310323-426x240-25fps.mp4'

function Video() {
    
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handlePlayClick = () => {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    
    return (
        <div className="video relative">
            <button className={isPlaying ? 'pause' : 'play'} onClick={handlePlayClick}><span></span></button>
            <video width="100%" ref={videoRef}>
                <source src={srcWebm} type="video/webm" />
                <source src={srcMp4} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video