import React, { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const sloganArray = ["CODE", "FUNCTIONS", "DEVELOP", "NFT"];

// ----------------------
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const TextContainer = styled.div`
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-name: ${({ fadingOut }) => (fadingOut ? fadeOut : fadeIn)};
`;
// ----------------------

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
            }, 500);
            
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
            <br />
            AWESOME
            <span className={fadeOut ? 'fadeout' : ''}>
                {currentText}
            </span>
            
        </h1>
    )
}

export default Slogan