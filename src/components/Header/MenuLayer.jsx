import { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import Logo from './Logo'
import Social from './Social'
import './_menuLayer.scss'

function MenuLayer() {
    
    const [isOpen, setIsOpen] = useState(0)
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 27) {
                setIsOpen(0)
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    })
    
    // TODO zamknąć po kliknieciu pozycji
    
    return (
        <>
            <div className={`menu-top flex align-center ${isOpen ? 'open' : ''}`}>
                <button className={`menu relative ${isOpen ? 'open' : ''}`} onClick={handleClick}><span></span><span></span><span></span></button>    
            </div>
            <div className="menu-layer flex">
                <div className="flex flex-column left-column justify-between">
                    <Logo />
                    <p className="text-muted">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="right-column flex justify-between flex-column">
                    <div className="line-top flex justify-between">
                        <p className="text-muted">Navigation</p>
                    </div>
                    <div className="flex justify-between align-end">
                        <NavMenu />
                        <div className="flex">
                            <div>
                                <ul className="contact-links ulHoverEffect">
                                    <li><a href="mailto:John@example.com">Email Us</a></li>
                                    {/* TODO dodac rel dla blanks */}
                                    <li><a href="https://www.whatsapp.com" target="_blank">WhatsApp</a></li>
                                    <li><a href="https://web.telegram.org" target="_blank">Telegram</a></li>
                                </ul>
                                
                                {/* TODO dodac podstronę polityka */}
                                <p><a href="/privacy-policy" className="link">Privacy Policy & Cookies</a></p>
                                <p className="text-muted">&#169; Copyright</p>
                            </div>
                            <Social />
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuLayer