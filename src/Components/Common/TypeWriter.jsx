import React, { useState, useEffect } from 'react';

function Typewriter(props) {
  const [currentText, setCurrentText] = useState('');
  const [phase, setPhase] = useState('typing');
  const [stringIndex, setStringIndex] = useState(0);
  const strings = props.strings || [];
  const currentString = strings[stringIndex] || '';

  useEffect(() => {
    let timer;

    if (phase === 'typing') {
      if (currentText.length < currentString.length) {
        timer = setTimeout(() => {
          setCurrentText(prevText => prevText + currentString[currentText.length]);
        }, props.speed || 150); 
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'pausing') {
      timer = setTimeout(() => {
        setPhase('deleting');
      }, props.pauseSpeed || 1600);
    } else if (phase === 'deleting') {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(prevText => prevText.slice(0, -1));
        }, props.deleteSpeed || 65);
      } else {
        setStringIndex(prevIndex => (prevIndex + 1) % strings.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, currentString, phase, props.deleteSpeed, props.pauseSpeed, props.speed, stringIndex, strings.length]);

  return (
    <span>{currentText}</span>
  );
}

export default Typewriter;
