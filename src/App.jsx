import Header from "./components/Header/Header"
import OurServices from "./components/OurServices/OurServices"
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

function App() {
    return (
        <>
            <Header />
            <OurServices 
                marquee={lorem} 
            />
        </>
    )
}

export default App
