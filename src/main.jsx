import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import Homepage from './components/Homepage/Homepage'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    </React.StrictMode>,
)