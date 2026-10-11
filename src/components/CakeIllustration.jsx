import React from "react";
import { motion } from "framer-motion";

/**
 * CakeIllustration reproduces the delicate sketched birthday cake
 * with cherries and a bow from the Canva card reference.
 */
export function CakeIllustration({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-block ${className}`}
    >
      <svg
        viewBox="0 0 160 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-20 sm:w-28 sm:h-24 mx-auto"
      >
        {/* Cherries / Candles topping */}
        <g stroke="#5B0616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Top Cherries */}
          <ellipse cx="60" cy="38" rx="5" ry="4.5" fill="#8B1229" />
          <ellipse cx="73" cy="34" rx="5.5" ry="5" fill="#5B0616" />
          <ellipse cx="87" cy="34" rx="5.5" ry="5" fill="#5B0616" />
          <ellipse cx="100" cy="38" rx="5" ry="4.5" fill="#8B1229" />
          
          {/* Cherry Stems & small flames */}
          <path d="M 60,33.5 Q 63,22 68,18" />
          <path d="M 73,29 Q 74,18 78,14" />
          <path d="M 87,29 Q 86,18 82,14" />
          <path d="M 100,33.5 Q 97,22 92,18" />

          {/* Cake Top Oval */}
          <ellipse cx="80" cy="48" rx="42" ry="14" fill="#FCFAF7" stroke="#5B0616" strokeWidth="1.75" />
          
          {/* Cake Body */}
          <path
            d="M 38,48 L 38,78 C 38,90 122,90 122,78 L 122,48"
            fill="#FCFAF7"
            stroke="#5B0616"
            strokeWidth="1.75"
          />

          {/* Delicate Icing / Frosting Swirl */}
          <path
            d="M 38,55 Q 46,62 54,56 Q 62,63 70,57 Q 78,63 86,57 Q 94,63 102,57 Q 110,63 122,55"
            fill="none"
            stroke="#5B0616"
            strokeWidth="1.25"
          />

          {/* Cake Plate Stand */}
          <ellipse cx="80" cy="85" rx="52" ry="9" stroke="#5B0616" strokeWidth="1.5" />
          <path d="M 62,91 L 58,98 L 102,98 L 98,91" stroke="#5B0616" strokeWidth="1.5" fill="#FCFAF7" />
          
          {/* Ribbon Bow on Cake Base */}
          <g transform="translate(80, 84)">
            {/* Knot */}
            <circle cx="0" cy="0" r="3" fill="#8B1229" />
            {/* Left Loop */}
            <path d="M 0,0 C -6,-10 -15,-6 -8,0 Z" fill="#EADFD7" stroke="#5B0616" strokeWidth="1.25" />
            {/* Right Loop */}
            <path d="M 0,0 C 6,-10 15,-6 8,0 Z" fill="#EADFD7" stroke="#5B0616" strokeWidth="1.25" />
            {/* Tails */}
            <path d="M -2,2 Q -8,12 -12,18" stroke="#5B0616" strokeWidth="1.25" />
            <path d="M 2,2 Q 8,12 12,18" stroke="#5B0616" strokeWidth="1.25" />
          </g>
        </g>
      </svg>
    </motion.div>
  );
}
