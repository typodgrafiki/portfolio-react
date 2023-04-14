import Card from './Card'
import './_ourServices.scss'
import image1 from '../../assets/images/rodion-kutsaiev-0VGG7cqTwCo-unsplash.jpg'
import image2 from '../../assets/images/sunbeam-photography-B7BnSfy0Lws-unsplash.jpg'
import image3 from '../../assets/images/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg'

const labels = [
    {
        'title': 'MOBILE DEVELOPMENT',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus dolores deserunt, illum ipsam provident molestias culpa a repellat temporibus',
        'label': ['CSS3', 'React', 'FlutterJS'],
        'image': image1
    },
    {
        'title': 'DESIGN SOLUTIONS',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus dolores deserunt, illum ipsam provident molestias culpa a repellat temporibus',
        'label': ['CSS3', 'React', 'FlutterJS'],
        'image': image2
    },
    {
        'title': 'FRONTEND DEVELOPMENT',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus dolores deserunt, illum ipsam provident molestias culpa a repellat temporibus',
        'label': ['CSS3', 'React', 'FlutterJS'],
        'image': image3
    }
]

function OurServices({ marquee }) {
    return (
        <>  
            <div className="marquee">
                <div className="track">
                    <p className="content">{`${marquee} ${marquee}`}</p>
                </div>
            </div>
            <div className="our-services section">
                <div className="container">
                    <h2 className="title">Our Services</h2>
                    <p className="subtitle">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque repellendus facere amet, ea sapiente dolores id voluptatum sunt officia corrupti quidem quibusdam quisquam molestias! Ea nobis enim iste accusantium illo.
                    </p>
                    <div className=" flex">
                        {labels.map((item, index) => (
                            <Card 
                                key={index}
                                title={item.title}
                                description={item.description}
                                label={item.label}
                                image={item.image}
                            />    
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices