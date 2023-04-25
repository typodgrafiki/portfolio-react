import AboutUsBox from './AboutUsBox'
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
        <div className="about-us section">
            <div className="container">
                <h2 className="title">About Us</h2>
                <div className="flex justify-between align-center">
                    <p className="subtitle-big">We Strive Innovate</p>
                    <button>Become a client</button>
                </div>
                <div className="flex gap20">
                    <div className="flex-sm-60">
                        <p className="subtitle"><strong>Lorem ipsum</strong> dolor, sit amet consectetur adipisicing elit. Neque repellendus facere amet, ea sapiente dolores id voluptatum sunt officia.</p>
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
                    <div className="flex-sm-40">IMAGE</div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
