import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const TextShimmerHero = ({ text, style }) => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        if (typeof text === 'string') {
            const chars = text.split("").map((char, index) => ({
                char,
                id: `char-${index}`,
                isSpace: char === ' '
            }));
            setElements(chars);
        } else {
            console.error('TextShimmerEffect expects a string as the text prop.');
            setElements([]);
        }
    }, [text]);

    useEffect(() => {
        const chars = document.querySelectorAll(".char");
        if (chars.length > 0) {
            const timeline = gsap.timeline({
                defaults: {
                    ease: "power1.inOut",
                    duration: 0.75,
                    delay: 1.2
                }
            });

            timeline.fromTo(chars,
                { opacity: 0.2 },
                {
                    opacity: 1,
                    stagger: 0.05,
                    repeat: 0,
                    yoyo: true,
                    onComplete: () => gsap.to(chars, { opacity: 1, duration: 0.5 })
                }
            );
        }
    }, [elements]);

    return (
        <div className="title" style={style}>
            {elements.map(({ char, id, isSpace }) => (
                <span key={id} className="char" style={{ display: 'inline-block', opacity: 0.5 }}>
                    {isSpace ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
};

export default TextShimmerHero;


