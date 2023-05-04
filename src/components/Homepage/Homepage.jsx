// import React, { useState } from 'react';
import Header from "../Header/Header"
import OurServices from "./OurServices/OurServices"
import AboutUs from "./AboutUs/AboutUs"
import Portfolio from "./Portfolio/Portfolio"
import Reviews from "./Reviews/Reviews"
import Footer from "../Footer/Footer"
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

function Homepage() {    
    
    // const [isLoaded, setIsLoaded] = useState(false);

    // window.onload = () => {
    //     console.log('Loaded')
    //     setIsLoaded(true)
    // }

    return (
        <>      
            {/* <div className={isLoaded ? 'loaded' : 'preload'}> */}
                <Header />
                <OurServices marquee={lorem} />
                <AboutUs />
                <Portfolio />
                <Reviews />  
            {/* </div> */}
        </>
    )    
}

export default Homepage
