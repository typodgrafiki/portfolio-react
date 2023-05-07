import { useState, useEffect, useRef } from "react"

function Card({ title, description, label, image, video }) {
    const [videoVisible, setVideoVisible] = useState(false)
    const [videoAdded, setVideoAdded] = useState(false)
    const [videoClass, setVideoClass] = useState(
        "card-video card-video--hidden"
    )
    const [cardClass, setCardClass] = useState(
        "card flex flex-column justify-between"
    )
    {
        videoVisible ? "data-playing" : ""
    }

    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current

        if (video && videoVisible) {
            video.play()
            setVideoClass("card-video card-video--visible")
            setCardClass("card flex flex-column justify-between playing")
        } else {
            setVideoClass("card-video card-video--hidden")
            setCardClass("card flex flex-column justify-between")
            if (video) {
                video.pause()
            }
        }
    }, [videoVisible, videoRef])

    function cardPlayHandler(event) {
        setVideoVisible(!videoVisible)
        setVideoAdded(true)
    }

    return (
        <div
            className={cardClass}
            style={image ? { backgroundImage: `url(${image})` } : {}}
        >
            <h3>{title}</h3>
            <div className="content relative">
                <p>{description}</p>
                <div className="bottom">
                    {label.map((item, index) => (
                        <small key={index}>{item}</small>
                    ))}
                </div>
                <button className="btn play" onClick={cardPlayHandler}></button>
            </div>
            {videoAdded && (
                <video src={video} className={videoClass} ref={videoRef} loop />
            )}
        </div>
    )
}

export default Card
