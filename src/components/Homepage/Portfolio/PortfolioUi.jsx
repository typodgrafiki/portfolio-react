import ui1 from '../../../assets/images/portfolio/ui1.png'
import ui2 from '../../../assets/images/portfolio/ui2.png'
import ui3 from '../../../assets/images/portfolio/ui3.png'
import ui4 from '../../../assets/images/portfolio/ui4.png'
import ui5 from '../../../assets/images/portfolio/ui5.png'
import ui6 from '../../../assets/images/portfolio/ui6.png'
import ui7 from '../../../assets/images/portfolio/ui7.png'
import ui8 from '../../../assets/images/portfolio/ui8.png'
import ui9 from '../../../assets/images/portfolio/ui9.png'
import ui10 from '../../../assets/images/portfolio/ui10.png'
import ui11 from '../../../assets/images/portfolio/ui11.png'
import ui12 from '../../../assets/images/portfolio/ui12.png'
import uiSticky from '../../../assets/images/portfolio/ui12.png'
import srcWebm from '../../../assets/images/portfolio/ui-video.webm'
import srcMp4 from '../../../assets/images/portfolio/ui-video.mp4'

const uiList = [
    {
        'image': ui1,
        'description': 'UI sample description',
        'hiddenXs': true
    },
    {
        'image': ui2,
        'description': 'UI sample description'
    },
    {},
    {
        'image': ui3,
        'description': 'UI sample description',
        'hiddenXs': true
    },
    {
        'image': ui4,
        'description': 'UI sample description',
        'hiddenXs': true
    },
    {
        'image': ui5,
        'description': 'UI sample description',
        'hiddenXs': true
    },
    {
        'image': ui6,
        'description': 'UI sample description'
    },
    {},
    {
        'image': ui7,
        'description': 'UI sample description',
        'hiddenXs': true
    },
    {
        'image': ui8,
        'description': 'UI sample description',
        'hiddenXs': true
    },
    {
        'image': ui9,
        'description': 'UI sample description',
        'hiddenXs': true
    },
    {
        'image': ui10,
        'description': 'UI sample description'
    },
    {
        'image': uiSticky,
        'description': 'UI sample description video',
        'sticky': true
    },
    {
        'image': ui11,
        'description': 'UI sample description',
        'hiddenXs': true
    },
    {
        'image': ui12,
        'description': 'UI sample description',
        'hiddenXs': true
    }
]

function PortfolioUi() {
    return (
        <>
        {uiList.map((item, index) => (    
            <div className={item.sticky ? 'item sticky' : item.hiddenXs ? 'item hidden-xs' : 'item'} key={index}>
                {item.sticky ? (
                    <div className="video ui-bg">
                        <video width={375} height={710} className="img-responsive" muted autoPlay loop>
                            <source src={srcWebm} type="video/webm" />
                            <source src={srcMp4} type="video/mp4" />
                        </video>
                    </div>
                ) : item.image ? (
                    <img className="img-responsive" src={item.image} width={375} height={710} alt={item.description} loading="lazy" />
                ) : ''}              
            </div>    
        ))}        
        </>
    )
}

export default PortfolioUi
