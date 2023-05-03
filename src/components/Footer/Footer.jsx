import React, { useState, useEffect, useRef } from 'react';
import NavMenu from "../Header/NavMenu"
import './_footer.scss'
import Logo from "../Header/Logo"

const Footer = () => {
    
    const [distance, setDistance] = useState(0);
    const footerRef = useRef(null);

    useEffect(() => {        
        function handleScroll() {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight;
            const distanceFromBottom = ((fullHeight - (scrollTop + windowHeight) + 15) * (-0.3));
            const footerHeight = footerRef.current.scrollHeight;
            
            if ((distanceFromBottom+15) < footerHeight){
                setDistance(distanceFromBottom);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll)};
    }, []);
  
    return (
        <div className="footer">
            <div 
                className="section" 
                ref={footerRef}
                style={{transform: `translateY(${distance}px)`}}
            >
                <Logo />
                <div className="flex row gap20">
                    <div>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>    
                        <p className="hidden-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam labore at ad numquam animi nam harum. Laboriosam, ex. Aperiam, beatae.</p>
                        <a href="#reviews" className="btn btn-default">Show reviews</a>
                        <p className="hidden-xs">
                            Don’t like the forms? Drop us a line via email.<br />
                            <a href="mailto:fakeJohn@example.com" className="link">fakeJohn@example.com</a>
                        </p>
                    </div>
                    <div className="hidden-xs">
                        <p className="h4">Contact us</p>
                        <p>
                            Our Email<br />
                            <a href="mailto:fakeJohn@example.com" className="link">fakeJohn@example.com</a>
                        </p>
                        <p>
                            Our Phone<br />
                            <a href="tel:16288000000" className="link">+1(628)800-00-00</a>
                        </p>
                        <p>
                            San Francisco, CA 2 Embarcadero Center, 8 floor, 94111
                        </p>
                    </div>
                    <div>
                        <p className="h4">Contact us</p>
                        <ul className="navMenu ulHoverEffect">
                            <li><a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                            <li><a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                            <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <NavMenu />
                    </div>
                </div>
                <div className="flex justify-between copyright">
                    <p>© Lorem ipsum 2023. All rights reserved.</p>
                    <a id="toTop" href="#start" className="link">
                        Back to the top
                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.03033 0.46967C6.73744 0.176777 6.26256 0.176777 5.96967 0.46967L1.1967 5.24264C0.903806 5.53553 0.903806 6.01041 1.1967 6.3033C1.48959 6.59619 1.96447 6.59619 2.25736 6.3033L6.5 2.06066L10.7426 6.3033C11.0355 6.59619 11.5104 6.59619 11.8033 6.3033C12.0962 6.01041 12.0962 5.53553 11.8033 5.24264L7.03033 0.46967ZM5.75 14C5.75 14.4142 6.08579 14.75 6.5 14.75C6.91421 14.75 7.25 14.4142 7.25 14L5.75 14ZM5.75 1L5.75 14L7.25 14L7.25 1L5.75 1Z" fill="black"/></svg>
                    </a>
                </div>
            </div>
        </div>       
    )
}

export default Footer