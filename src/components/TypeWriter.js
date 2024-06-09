// src/components/Typewriter.js
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else {
      setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 2000);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
