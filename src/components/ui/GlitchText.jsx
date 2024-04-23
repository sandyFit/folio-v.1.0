import React, { useState, useEffect } from 'react';

const GlitchText = ({ text, typingSpeed = 200 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, text, typingSpeed]);

  return <span>{displayedText}</span>;
};

export default GlitchText;
