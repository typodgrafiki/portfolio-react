import ui1 from '../../assets/images/portfolio/ui1.png'
import ui2 from '../../assets/images/portfolio/ui2.png'
import ui3 from '../../assets/images/portfolio/ui3.png'
import ui4 from '../../assets/images/portfolio/ui4.png'
import ui5 from '../../assets/images/portfolio/ui5.png'
import ui6 from '../../assets/images/portfolio/ui6.png'
import ui7 from '../../assets/images/portfolio/ui7.png'
import ui8 from '../../assets/images/portfolio/ui8.png'
import ui9 from '../../assets/images/portfolio/ui9.png'
import ui10 from '../../assets/images/portfolio/ui10.png'
import ui11 from '../../assets/images/portfolio/ui11.png'
import ui12 from '../../assets/images/portfolio/ui12.png'
import uiSticky from '../../assets/images/portfolio/ui12.png'

const uiList = [
    {
        'image': ui1,
        'description': 'UI sample description'
    },
    {
        'image': ui2,
        'description': 'UI sample description'
    },
    {},
    {
        'image': ui3,
        'description': 'UI sample description'
    },
    {
        'image': ui4,
        'description': 'UI sample description'
    },
    {
        'image': ui5,
        'description': 'UI sample description'
    },
    {
        'image': ui6,
        'description': 'UI sample description'
    },
    {},
    {
        'image': ui7,
        'description': 'UI sample description'
    },
    {
        'image': ui8,
        'description': 'UI sample description'
    },
    {
        'image': ui9,
        'description': 'UI sample description'
    },
    {
        'image': ui10,
        'description': 'UI sample description'
    },
    {
        'image': uiSticky,
        'description': 'UI sample description video'
    },
    {
        'image': ui11,
        'description': 'UI sample description'
    },
    {
        'image': ui12,
        'description': 'UI sample description'
    }
]

function PortfolioUi() {
    return (
        <>
        {uiList.map((item, index) => (    
            <div className="item" key={index}>
                {item.image ? (
                    
                    <img className="img-responsive" src={item.image} width={375} height={710} alt={item.description} />
                    
                ) : ''}
            </div>    
        ))}        
        </>
    )
}

export default PortfolioUi