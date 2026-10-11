import React from "react";
import { motion } from "framer-motion";

/**
 * CherryBowIllustration reproduces the delicate sketched bow tying two cherries
 * together, inspired by the top artwork of the Canva invitation.
 */
export function CherryBowIllustration({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-block select-none ${className}`}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 sm:w-28 sm:h-28 mx-auto"
      >
        {/* Ribbon Bow Loops */}
        <g stroke="#5B0616" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Left Bow Loop */}
          <path
            d="M 80,48 C 65,22 42,28 46,45 C 50,56 68,52 80,49"
            fill="#FCFAF7"
          />
          {/* Inner fold left */}
          <path d="M 60,35 C 56,42 62,48 70,49" fill="none" strokeWidth="1.2" />

          {/* Right Bow Loop */}
          <path
            d="M 80,48 C 95,22 118,28 114,45 C 110,56 92,52 80,49"
            fill="#FCFAF7"
          />
          {/* Inner fold right */}
          <path d="M 100,35 C 104,42 98,48 90,49" fill="none" strokeWidth="1.2" />

          {/* Center Knot */}
          <ellipse cx="80" cy="48" rx="5.5" ry="5" fill="#8B1229" stroke="#5B0616" strokeWidth="1.6" />

          {/* Ribbon Tails */}
          <path
            d="M 76,52 C 68,68 52,82 48,94 C 54,90 64,80 72,70"
            fill="#FCFAF7"
          />
          <path
            d="M 84,52 C 92,68 108,82 112,94 C 106,90 96,80 88,70"
            fill="#FCFAF7"
          />

          {/* Cherry Stems */}
          <path d="M 78,53 C 74,68 68,82 66,95" fill="none" strokeWidth="1.4" />
          <path d="M 82,53 C 86,68 90,82 94,95" fill="none" strokeWidth="1.4" />
        </g>

        {/* Left Cherry */}
        <g>
          <ellipse
            cx="64"
            cy="108"
            rx="14"
            ry="13"
            fill="#8B1229"
            stroke="#5B0616"
            strokeWidth="1.6"
          />
          {/* Cherry Highlight */}
          <path
            d="M 58,103 C 58,100 64,98 68,100"
            stroke="#FCFAF7"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>

        {/* Right Cherry */}
        <g>
          <ellipse
            cx="94"
            cy="109"
            rx="14"
            ry="13"
            fill="#72091F"
            stroke="#5B0616"
            strokeWidth="1.6"
          />
          {/* Cherry Highlight */}
          <path
            d="M 88,104 C 88,101 94,99 98,101"
            stroke="#FCFAF7"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      </svg>
    </motion.div>
  );
}
