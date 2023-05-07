import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import PrivacyPolicy from "./components/PrivacyPolicy/Privacy"
import Homepage from "./components/Homepage/Homepage"

function App() {
    window.onload = () => {
        const rootEl = document.getElementById("root")
        rootEl.classList.add("loaded")
        rootEl.classList.remove("preload")
    }

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default App
