import Header from "./components/Header/Header"
import OurServices from "./components/OurServices/OurServices"
import AboutUs from "./components/AboutUs/AboutUs"
import Portfolio from "./components/Portfolio/Portfolio"
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

function App() {
    return (
        <>
            <Header />
            <OurServices 
                marquee={lorem} 
            />
            <AboutUs />
            <Portfolio />
        </>
    )
}

export default App
