import { useState } from 'react'
import './_menuLayer.scss'

function MenuLayer() {
    
    const [isOpen, setIsOpen] = useState(0)
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <button className={`menu relative ${isOpen ? 'open' : ''}`} onClick={handleClick}><span></span><span></span><span></span></button>
            <div className="menu-layer">
                MenuLayet
            </div>
        </>
    )
}

export default MenuLayer