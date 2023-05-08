import PropTypes from "prop-types"
import Card from "./Card"
import Marquee from "../../Modules/Marquee"
import "./_ourServices.scss"
import image1 from "../../../assets/images/rodion-kutsaiev-0VGG7cqTwCo-unsplash.jpg"
import image2 from "../../../assets/images/sunbeam-photography-B7BnSfy0Lws-unsplash.jpg"
import image3 from "../../../assets/images/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg"
import video1 from "../../../assets/pexels-t-leish-5310323-426x240-25fps.mp4"
import video2 from "../../../assets/pexels-cottonbro-studio-7170781-426x226-25fps.mp4"
import video3 from "../../../assets/pexels-cottonbro-studio-6153459-960x506-25fps.mp4"

const labels = [
    {
        title: "MOBILE DEVELOPMENT",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus dolores deserunt, illum ipsam provident molestias culpa a repellat temporibus",
        label: ["CSS3", "React", "FlutterJS"],
        image: image1,
        video: video1,
    },
    {
        title: "DESIGN SOLUTIONS",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus dolores deserunt, illum ipsam provident molestias culpa a repellat temporibus",
        label: ["CSS3", "React", "FlutterJS"],
        image: image2,
        video: video2,
    },
    {
        title: "FRONTEND DEVELOPMENT",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus dolores deserunt, illum ipsam provident molestias culpa a repellat temporibus",
        label: ["CSS3", "React", "FlutterJS"],
        image: image3,
        video: video3,
    },
]

function OurServices({ marquee }) {
    return (
        <div className="our-services">
            <Marquee text={marquee} />
            <div id="services" className="section">
                <div className="container">
                    <h2 className="title">Our Services</h2>
                    <p className="subtitle">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Neque repellendus facere amet, ea sapiente dolores
                        id voluptatum sunt officia corrupti quidem quibusdam
                        quisquam molestias! Ea nobis enim iste accusantium illo.
                    </p>
                    <div className="flex flex-direction-column-xs">
                        {labels.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                label={item.label}
                                image={item.image}
                                video={item.video}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices

OurServices.propTypes = {
    marquee: PropTypes.string,
}
