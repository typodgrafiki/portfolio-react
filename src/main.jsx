import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage/>} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </Router>
        <Footer />
    </React.StrictMode>,
)