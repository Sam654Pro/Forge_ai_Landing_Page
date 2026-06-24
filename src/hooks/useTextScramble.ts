import { useEffect, useState } from 'react';

export interface ScrambleChar {
  finalChar: string;
  currentChar: string;
}

export function useTextScramble(finalText: string, duration: number = 1500) {
  const [chars, setChars] = useState<ScrambleChar[]>([]);

  useEffect(() => {
    const scramblePool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const finalChars = finalText.split('');
    
    // Initialize
    setChars(
      finalChars.map((char) => ({
        finalChar: char,
        currentChar: char === ' ' ? ' ' : scramblePool[Math.floor(Math.random() * scramblePool.length)],
      }))
    );

    let iteration = 0;
    const maxIterations = finalText.length * 3;
    const stepDuration = 30; // ms

    const interval = setInterval(() => {
      setChars(
        finalChars.map((char, i) => {
          if (char === ' ') return { finalChar: ' ', currentChar: ' ' };
          if (i < iteration / 3) return { finalChar: char, currentChar: char };
          return {
            finalChar: char,
            currentChar: scramblePool[Math.floor(Math.random() * scramblePool.length)],
          };
        })
      );
      
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setChars(finalChars.map((char) => ({ finalChar: char, currentChar: char })));
      }
      iteration++;
    }, stepDuration);

    return () => clearInterval(interval);
  }, [finalText, duration]);

  return chars;
}
