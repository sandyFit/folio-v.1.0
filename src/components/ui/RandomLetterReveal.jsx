import React, { useState, useEffect } from 'react';


const generateRandomChar = () => {
    const chars = '!¬~&®#|°¿@µÆØß1237890»™€░▒║╬φΦ≤Σε≡±█▄ß.';
    return chars.charAt(Math.floor(Math.random() * chars.length));
};

const RandomLetterReveal = ({ text }) => {
    const [revealedIndices, setRevealedIndices] = useState([]);
    const [placeholders, setPlaceholders] = useState(Array(text.length).fill('').map(() => generateRandomChar()));

    useEffect(() => {
        const characters = text.split('');
        let remainingIndices = characters.map((_, index) => index); // Array of all indices

        const revealLetter = () => {
            if (remainingIndices.length === 0) {
                clearInterval(intervalId);
                return;
            }

            const randomIndex = Math.floor(Math.random() * remainingIndices.length);
            const selected = remainingIndices[randomIndex];

            setRevealedIndices((current) => [...current, selected]);
            remainingIndices = remainingIndices.filter((_, index) => index !== randomIndex);
        };

        const updatePlaceholders = () => {
            setPlaceholders(placeholders.map((_, index) => 
                revealedIndices.includes(index) ? text.charAt(index) : generateRandomChar()
            ));
        };

        const intervalId = setInterval(() => {
            revealLetter();
            updatePlaceholders();
        }, 5); // Adjust timing as needed

        return () => clearInterval(intervalId);

    }, [text, revealedIndices]); // Effect depends on 'text' and 'revealedIndices'

    return (
        <div className="letter-container">
            {placeholders.map((char, index) => (
                <span key={index} className={revealedIndices.includes(index) ? 'revealed' : 'hidden'}>
                    {char}
                </span>
            ))}
        </div>
    );
};

export default RandomLetterReveal;
