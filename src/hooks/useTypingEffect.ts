import { useState, useEffect } from 'react';

/**
 * @hook useTypingEffect
 * Simulates a typewriter effect for a given string.
 * @param text - The full text to animate
 * @param speed - Milliseconds per character (default: 45ms)
 * @param delay - Initial delay before typing starts (default: 0ms)
 */
export function useTypingEffect(
  text: string,
  speed: number = 45,
  delay: number = 0
) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
}
