import Marquee from '../../Modules/Marquee'
import PortfolioUi from './PortfolioUi'
import './_portfolio.scss'
import iphone1 from '../../../assets/images/iphone1-anim.png'
import iphone2 from '../../../assets/images/iphone2-anim.png'

const marquee = 'Lorem ipsum dolor sit amet consectetur'

function Portfolio() {
    return (
        <div id="portfolio" className="portfolio background-dark relative">
            <Marquee text={marquee} />
            <div className="section relative">
                <div className="flex justify-between align-center">
                    <p className="title subtitle-big">{`{SMART}`}<br /> DEVELOPMENT</p>
                </div>
                <div className="flex justify-between align-center">
                    <p className="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illum!</p>
                    <div className="image flex justify-center">
                        <img src={iphone1} width={209} height={572} alt='image iphone 1' />
                        <img src={iphone2} width={201} height={572} alt='image iphone 2' />
                    </div>
                    <div className="text2 text-right">
                        <a href="#reviews" className="btn btn-default">Show reviews</a>
                    </div>
                </div>
            </div>
            <div className="list-images grid justify-center align-end flex-wrap">
                <PortfolioUi />
            </div>
        </div>
    )
}

export default Portfolio