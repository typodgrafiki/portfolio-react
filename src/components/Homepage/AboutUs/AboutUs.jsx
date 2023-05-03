import AboutUsBox from './AboutUsBox'
import AboutUsVideo from './Video'
import Slider from './AboutUsSlider'
import './_aboutUs.scss'

const data = [
    {
        'title': '+200',
        'description': 'We have successfully completed a total of 200+ projects',
        'img': '...'
    },
    {
        'title': '500k',
        'description': 'We’ve gathered dozens of reviews from the clients and + 500k reviews from their users',
        'img': '...'
    },
    {
        'title': '11',
        'description': 'Years of experience',
        'img': '...'
    },
    {
        'title': '+34',
        'description': 'Team members all over the world',
        'img': '...'
    }
]

function AboutUs() { 
    return (
        <div id="us" className="about-us">
            <div className="section">
                <div className="container">
                    <h2 className="title">About Us</h2>
                    <div className="flex justify-between align-start align-center-sm flex-direction-column-xs">
                        <p className="subtitle-big">We Strive Innovate</p>
                        <a href="#reviews" className="btn btn-default">Show reviews</a>
                    </div>
                    <div className="flex gap20 flex-direction-column-xs">
                        <div className="flex-sm-67">
                            <p className="subtitle"><strong>Lorem ipsum</strong> dolor, sit amet consectetur adipisicing elit. Neque repellendus facere amet, ea sapiente dolores id voluptatum sunt officia corrupti quidem quibusdam.</p>
                            <div className="grid grid-column2 gap20">
                                {data.map((item, index) => (
                                    <AboutUsBox 
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        img={item.img}
                                    />               
                                ))}
                            </div>
                        </div>
                        <div className="flex-sm-33 flex justify-center align-center">
                            <AboutUsVideo />
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-tumbnail">
                <Slider />
            </div>
        </div>
    )
}

export default AboutUs
