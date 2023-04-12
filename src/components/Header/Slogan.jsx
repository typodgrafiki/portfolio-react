import React, { useState, useEffect } from "react";

const sloganArray = ["CODE", "FUNCTIONS", "DEVELOP", "NFT"];

function Slogan() {
    
    const [currentText, setCurrentText] = useState(sloganArray[0]);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % sloganArray.length);    
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);
    
    useEffect(() => {
        setCurrentText(sloganArray[index]);
    }, [index]);
    
    return (
        <h1>
            WE CREATE
            <br />
            AWESOME
            <br />
            {currentText}
        </h1>
    )
}

export default Slogan