import React from 'react';


const CircularTextWithStaticImage = ({ text, imagePath, textColor, textSize = "18" }) => {
  // Manually adjust the text to include separators and control spacing
    const baseText = ` ~  ${text}  `; // Adding a dot separator for visual distinction
    const repeatedText = baseText.repeat(20); // Repeat based on the circumference

    return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path id="circlePath" d="M100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
        </defs>
        
        <g>
            <text fill={textColor} fontSize={textSize}>
            <textPath href="#circlePath" startOffset="0%">
                {repeatedText}
            </textPath>
            </text>
            <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="30s"
            repeatCount="indefinite"
            />
        </g>

        <image href={imagePath} x="45" y="45" height="110" width="110" preserveAspectRatio="xMidYMid slice" />
        </svg>
    );
};

export default CircularTextWithStaticImage;
