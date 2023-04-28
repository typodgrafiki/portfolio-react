import Header from "../Header/Header"
import OurServices from "./OurServices/OurServices"
import AboutUs from "./AboutUs/AboutUs"
import Portfolio from "./Portfolio/Portfolio"
import Reviews from "./Reviews/Reviews"
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

function Homepage() {
    return (
        <>
            <Header />
            <OurServices marquee={lorem} />
            <AboutUs />
            <Portfolio />
            <Reviews />
        </>
    )
}

export default Homepage
