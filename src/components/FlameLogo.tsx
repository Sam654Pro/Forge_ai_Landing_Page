import { SVGProps } from 'react';

interface FlameLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function FlameLogo({ className = 'w-8 h-8', size = 32, ...props }: FlameLogoProps) {
  return (
    <svg 
      className={className} 
      width={size}
      height={size}
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Black ambient background glow, matching the luxury feel of the platform */}
      <defs>
        <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Background soft circular glow */}
      <circle cx="250" cy="250" r="220" fill="url(#amberGlow)" />
      
      {/* 
        High-fidelity representation of the stylized letter 'F' flame logo.
        Features thick organic contours, the signature dual flame points rising 
        elegantly on the top-right, and a sharp modern geometric slanted cut 
        on the middle crossbar.
      */}
      <path 
        d="M120 410V180C120 135.817 155.817 100 200 100H325C345 100 358 88 368 70C368 95 358 115 335 125C370 125 388 112 398 90C408 110 415 135 415 180C415 220 375 230 325 230H200V280H315L290 330H200V410H120Z" 
        stroke="#F59E0B" 
        strokeWidth="36" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
