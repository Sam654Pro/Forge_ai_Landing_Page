import { useEffect, useState } from 'react';

export function useTextScramble(finalText: string, duration: number = 1500) {
  const [text, setText] = useState('');

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let iteration = 0;
    const maxIterations = finalText.length * 3;
    const stepDuration = 30; // ms

    const interval = setInterval(() => {
      setText(
        finalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration / 3) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setText(finalText);
      }
      iteration++;
    }, stepDuration);

    return () => clearInterval(interval);
  }, [finalText, duration]);

  return text;
}
