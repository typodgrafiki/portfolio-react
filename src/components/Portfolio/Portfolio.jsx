import Marquee from '../Modules/Marquee'
import './_portfolio.scss'

const marquee = 'Lorem ipsum dolor sit amet consectetur'

function Portfolio() {
    return (
        <div className="portfolio background-dark relative">
            <Marquee text={marquee} />
            <div className="section relative">
                <div className="container">
                    <div className="flex justify-between align-center">
                        <p className="title subtitle-big">{`{SMART}`}<br /> DEVELOPMENT</p>
                    </div>
                </div>
                <div className="flex justify-between align-end">
                    <p className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illum!</p>
                    <div className="image flex justify-center">
                        IMG 2x
                    </div>
                    <div className="text2 text-right">
                        <a href="#contact" className="btn btn-default">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio