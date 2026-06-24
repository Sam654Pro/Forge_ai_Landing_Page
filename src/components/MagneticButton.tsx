import { useRef, MouseEvent, ReactNode } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !textRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    
    buttonRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    textRef.current.style.transform = `translate(${-deltaX * 0.2}px, ${-deltaY * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current || !textRef.current) return;
    buttonRef.current.style.transform = '';
    textRef.current.style.transform = '';
  };

  return (
    <button
      ref={buttonRef}
      className={`transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span 
        ref={textRef} 
        className="inline-flex items-center justify-center gap-2 w-full h-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      >
        {children}
      </span>
    </button>
  );
}
