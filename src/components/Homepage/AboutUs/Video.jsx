import srcWebm from '../../../assets/phone-scroll.webm'
import srcMp4 from '../../../assets/phone-scroll.mp4'

function AboutUsVideo() {    
    return (
        <video className="video" width="290" height="529" loop muted autoPlay>
            <source src={srcWebm} type="video/webm" />
            <source src={srcMp4} type="video/mp4" />
        </video>
    )
}

export default AboutUsVideo