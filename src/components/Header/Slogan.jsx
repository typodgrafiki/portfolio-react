import React, { useState, useEffect } from "react";

const sloganArray = ["CODE", "FUNCTIONS", "DEVELOP", "NFT"];

function Slogan() {
    
    const [currentText, setCurrentText] = useState(sloganArray[0]);
    const [index, setIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeOut(1);
            const changeText = setTimeout(function() {
                setIndex((prevIndex) => (prevIndex + 1) % sloganArray.length);            
                setFadeOut(0);
            }, 300);
            return () => clearTimeout(changeText);
            
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);
    
    useEffect(() => {
        setCurrentText(sloganArray[index]);
    }, [index]);
    
    return (
        <h1>
            <span className="font-light">WE CREATE</span>
            AWESOME
            <span className={fadeOut ? 'fadeout' : ''}>
                {currentText}
            </span>
        </h1>
    )
}

export default Slogan